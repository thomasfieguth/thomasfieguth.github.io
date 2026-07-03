/**
 * experienceData.js
 *
 * Each entry renders as:
 *   - A preview card on the Home page (company, role, period, previewImage)
 *   - A full section on the Experience page (all fields)
 *
 * Fields:
 *   id            string      — URL anchor id, e.g. 'werkr' → /#/experience#werkr
 *   company       string      — Company name
 *   role          string      — Role title or progression summary
 *   period        string      — Display date range
 *   location      string      — City, Country
 *   previewImage  string      — Single image for the home page card (/public-relative)
 *   description   string      — 1–3 sentence paragraph for the Experience page
 *   skills        string[]    — Tags shown below the description
 *   photos        string[]    — Photo grid on the Experience page (add as many as needed)
 *   website       string?     — Optional company URL for a link on the Experience page
 */
const experienceData = [
  {
    id: 'werkr',
    company: 'Werkr Tractors',
    role: 'Software Engineer Co-op & Full-time',
    period: '2022 – Present',
    location: 'Waterloo, Ontario, Canada',
    previewImage: '/assets/images/experience/werkr/preview.jpg',
    website: 'https://werkrtractors.com',
    description:
      'Placeholder — describe your work at Werkr here. What problem does the tractor solve? What did you contribute across your three terms?',
    skills: [
      'C++', 'ROS2', 'Qt', 'Python',
      'Autonomous Navigation', 'Sensor Fusion',
      'Camera-Based Detection', '3D Visualization',
    ],
    photos: [
      '/assets/images/experience/werkr/photo1.jpg',
      '/assets/images/experience/werkr/photo2.jpg',
      '/assets/images/experience/werkr/photo3.jpg',
    ],
  },
  {
    id: 'gei',
    company: 'GEI Consultants',
    role: 'Project Designer Co-op',
    period: 'May – Aug 2023',
    location: 'Kitchener, Ontario, Canada',
    previewImage: '/assets/images/experience/gei/preview.jpg',
    website: 'https://www.geiconsultants.com',
    description:
      'Placeholder — describe your work at GEI here. What projects did you work on? What did you learn about civil/environmental engineering consulting?',
    skills: [
      'Hydraulic Analysis', 'Pump Efficiency',
      'Cost Estimation', 'Technical Reporting', 'Site Inspection',
    ],
    photos: [
      '/assets/images/experience/gei/photo1.jpg',
      '/assets/images/experience/gei/photo2.jpg',
    ],
  },
  {
    id: 'accelerated',
    company: 'Accelerated Systems Inc.',
    role: 'Mechanical / Software Engineer Co-op',
    period: 'Jan – Dec 2022',
    location: 'Waterloo, Ontario, Canada',
    previewImage: '/assets/images/experience/accelerated/preview.jpg',
    website: 'https://www.acceleratedsystems.com',
    description:
      'Placeholder — describe your work at ASI here. What did you build for the lawnmower platform? What did machining motor casings involve?',
    skills: [
      'Kotlin', 'Android', 'ROS2', 'C++',
      'SolidWorks', 'CNC Programming', 'Machining',
      'GPS Integration', 'Dynamometer Design',
    ],
    photos: [
      '/assets/images/experience/accelerated/photo1.jpg',
      '/assets/images/experience/accelerated/photo2.jpg',
      '/assets/images/experience/accelerated/photo3.jpg',
    ],
  },
]

export default experienceData
