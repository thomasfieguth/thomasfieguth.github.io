// Nested copies of the site shown before the video takes over.
const MAX_NESTED_COPIES = 2

const FALLBACK_VIDEO_SRC =
  'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0&playsinline=1'

// Nesting depth of the current copy: 0 on the real site, 1 inside the first
// nested copy, and so on. Set by the parent as the `d` query param.
function currentDepth() {
  return Number(new URLSearchParams(window.location.search).get('d')) || 0
}

/**
 * Source the self-embedding grid item ("Prompt Engineering: Website") loads
 * in its lightbox.
 *
 * Each level gets a distinct `d` value because browsers refuse to load a
 * frame whose URL matches one of its own ancestors; `d` is otherwise inert,
 * since this app's router only reads the URL's hash. Once MAX_NESTED_COPIES
 * copies are already open, the video is returned instead of another copy.
 */
export function selfEmbedSrc(src) {
  const depth = currentDepth()
  if (depth >= MAX_NESTED_COPIES) return FALLBACK_VIDEO_SRC

  const url = new URL(src, window.location.href)
  url.searchParams.set('d', depth + 1)
  return url.toString()
}
