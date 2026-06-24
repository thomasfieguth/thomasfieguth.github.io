/**
 * Experience data
 *
 * Each entry maps to one job card on the home page preview
 * and one full entry on the Experience page.
 *
 * Fields:
 *   id          — unique string, used as the URL anchor (#werkr)
 *   company     — company name
 *   role        — job title shown on the full entry
 *   period      — date range string
 *   location    — city, country
 *   previewImage — path to the single image shown on the home page card
 *                  (relative to /public)
 *   description — paragraph shown on the Experience page
 *   skills      — array of strings shown as tags
 *   photos      — array of image paths shown in the photo grid on Experience page
 */
const experienceData = [
  {
    id: 'werkr',
    company: 'Werkr Tractors',
    role: 'Software Engineer (Co-op → Full-time)',
    period: 'Jan 2024 – Present',
    location: 'Waterloo, Ontario',
    previewImage: '/assets/images/experience/werkr/preview.jpg',
    description:
      'Placeholder — add your Werkr description here.',
    skills: ['C++', 'ROS2', 'Qt', 'Python', 'Autonomous Navigation'],
    photos: [
      '/assets/images/experience/werkr/photo1.jpg',
      '/assets/images/experience/werkr/photo2.jpg',
    ],
  },
  {
    id: 'gei',
    company: 'GEI Consultants',
    role: 'Project Designer Co-op',
    period: 'May – Aug 2023',
    location: 'Kitchener, Ontario',
    previewImage: '/assets/images/experience/gei/preview.jpg',
    description:
      'Placeholder — add your GEI description here.',
    skills: ['Hydraulic Analysis', 'Cost Estimation', 'Technical Reporting'],
    photos: [
      '/assets/images/experience/gei/photo1.jpg',
    ],
  },
  {
    id: 'accelerated',
    company: 'Accelerated Systems Inc.',
    role: 'Mechanical / Software Engineer Co-op',
    period: 'Jan – Dec 2022',
    location: 'Waterloo, Ontario',
    previewImage: '/assets/images/experience/accelerated/preview.jpg',
    description:
      'Placeholder — add your ASI description here.',
    skills: ['Kotlin', 'ROS2', 'C++', 'SolidWorks', 'CNC', 'Machining'],
    photos: [
      '/assets/images/experience/accelerated/photo1.jpg',
      '/assets/images/experience/accelerated/photo2.jpg',
    ],
  },
]

export default experienceData
