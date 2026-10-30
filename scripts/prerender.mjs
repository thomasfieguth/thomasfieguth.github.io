/**
 * prerender.mjs
 *
 * Runs after `vite build`. Writes one static HTML file per route into
 * dist/ (e.g. dist/projects/capstone.html, which GitHub Pages serves at
 * /projects/capstone), each with its own <title>, description and link
 * preview tags, plus a plain-HTML copy of the page's text inside #root.
 *
 * That copy is what search engines and link scrapers (which don't run
 * JavaScript) read. For everyone else, index.html hides it and React
 * replaces it on load. The text comes from the same src/data modules the
 * React pages render, so the two never drift apart.
 *
 * Also writes dist/404.html as a plain app shell, so any other path
 * (including client-side redirects like /projects) still boots the app.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const load = (rel) => import(pathToFileURL(path.join(root, rel)).href)

const { pages, notFoundMeta, SITE_URL, SITE_NAME, OG_IMAGE } = await load('src/data/pageMeta.js')
const { default: experienceData } = await load('src/data/experienceData.js')
const { default: featuredProjects } = await load('src/data/featuredProjects.js')
const { default: contactLinks } = await load('src/data/contactLinks.js')
const home = await load('src/data/home.js')
const { default: capstoneSections, gridItems: capstoneGrid } = await load('src/data/projects/capstone.js')
const woodworking = await load('src/data/projects/woodworking.js')
const code = await load('src/data/projects/code.js')
const other = await load('src/data/projects/other.js')

// ─── HTML helpers ───────────────────────────────────────────────────────────

const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

// Same **bold** convention ProjectSection renders.
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')

// Same paragraph / "- " bullet-list convention ProjectSection renders.
function description(text = '') {
  const out = []
  let list = null
  for (const line of text.split('\n').map((l) => l.trim()).filter(Boolean)) {
    if (line.startsWith('- ')) {
      list ??= []
      list.push(`<li>${inline(line.slice(2))}</li>`)
      continue
    }
    if (list) { out.push(`<ul>${list.join('')}</ul>`); list = null }
    out.push(`<p>${inline(line)}</p>`)
  }
  if (list) out.push(`<ul>${list.join('')}</ul>`)
  return out.join('\n')
}

const link = (href, text) => `<a href="${esc(href)}">${esc(text)}</a>`
const list = (items) => `<ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>`

const nav = `<nav>${list([
  link('/', 'Home'),
  ...experienceData.map((job) => link(`/experience/${job.id}`, job.company)),
  link('/projects/capstone', 'Capstone'),
  link('/projects/woodworking', 'Woodworking & CNC'),
  link('/projects/code', 'Code'),
  link('/projects/other', 'Other Projects'),
])}</nav>`

const contact = `<footer>${list(contactLinks.map((c) => link(c.href, c.label)))}</footer>`

const projectSection = (p) => [
  `<section><h2>${esc(p.title)}</h2>`,
  p.date ? `<p>${esc(p.date)}</p>` : '',
  p.skills?.length ? `<p>${esc(p.skills.join(' · '))}</p>` : '',
  description(p.description),
  '</section>',
].join('\n')

const captionList = (items) => items.length
  ? `<section><h2>More Projects</h2>${list(items.map((i) => esc(i.caption)))}</section>`
  : ''

const termsOf = (job) => job.terms ?? [{ role: job.role, period: job.period }]

// ─── Page bodies ────────────────────────────────────────────────────────────

const bodies = {
  '/': [
    `<h1>${esc(SITE_NAME)}</h1>`,
    `<p>${esc(home.skills.join(' · '))}</p>`,
    list(home.highlights.map(esc)),
    '<section><h2>Featured Projects</h2>',
    list(featuredProjects.map((p) => `${link(p.to, p.title)}: ${esc(p.blurb)}`)),
    '</section>',
    ...home.aboutSections.map(({ heading, paragraphs }) => [
      `<section><h2>${esc(heading)}</h2>`,
      ...paragraphs.map((p) => `<p>${esc(p)}</p>`),
      '</section>',
    ].join('\n')),
  ].join('\n'),

  ...Object.fromEntries(experienceData.map((job) => [`/experience/${job.id}`, [
    `<h1>${esc(job.company)}</h1>`,
    `<p>${esc([job.role, job.period, job.location].join(' · '))}</p>`,
    list(termsOf(job).map((t) => esc(`${t.role}, ${t.period}`))),
    `<p>${esc(job.skills.map((s) => (typeof s === 'object' ? s.text : s)).join(' · '))}</p>`,
    description(job.description),
    ...job.projects.map(projectSection),
    job.gallery?.length ? `<section><h2>Gallery</h2>${list(job.gallery.map((g) => esc(g.caption)))}</section>` : '',
  ].join('\n')])),

  '/projects/capstone': [
    '<h1>Capstone: Depth-Sensing Woodcarving Aid</h1>',
    ...capstoneSections.map(projectSection),
    captionList(capstoneGrid),
  ].join('\n'),

  '/projects/woodworking': [
    '<h1>Woodworking &amp; CNC</h1>',
    ...woodworking.writeups.map(projectSection),
    captionList(woodworking.gridItems),
  ].join('\n'),

  '/projects/code': [
    '<h1>Code</h1>',
    ...code.writeups.map(projectSection),
    captionList(code.gridItems),
  ].join('\n'),

  '/projects/other': [
    '<h1>Other Projects</h1>',
    ...other.writeups.map(projectSection),
    captionList(other.gridItems),
  ].join('\n'),
}

// ─── Write files ────────────────────────────────────────────────────────────

const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

function render({ title, description: desc, url, body }) {
  const setMeta = (html, attr, key, value) => html.replace(
    new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`),
    `$1${esc(value)}$2`,
  )
  let html = shell.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
  html = setMeta(html, 'name', 'description', desc)
  html = setMeta(html, 'property', 'og:title', title)
  html = setMeta(html, 'property', 'og:description', desc)
  html = setMeta(html, 'property', 'og:image', SITE_URL + OG_IMAGE)
  if (url) {
    html = setMeta(html, 'property', 'og:url', url)
    html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  } else {
    html = html.replace(/\s*<link rel="canonical"[^>]*>/, '')
  }
  const content = body ? `<div class="prerender">\n${nav}\n<main>\n${body}\n</main>\n${contact}\n</div>` : ''
  return html.replace('<div id="root"></div>', `<div id="root">${content}</div>`)
}

for (const page of pages) {
  const body = bodies[page.path]
  if (!body) throw new Error(`prerender: no body for ${page.path}`)
  const file = page.path === '/' ? 'index.html' : `${page.path.slice(1)}.html`
  const out = path.join(dist, file)
  fs.mkdirSync(path.dirname(out), { recursive: true })
  fs.writeFileSync(out, render({ ...page, url: SITE_URL + (page.path === '/' ? '/' : page.path), body }))
  console.log(`prerendered ${page.path} -> dist/${file}`)
}

fs.writeFileSync(path.join(dist, '404.html'), render({ ...notFoundMeta }))
console.log('wrote dist/404.html (app shell)')
