/**
 * experienceData.js
 *
 * Each entry renders as:
 *   - A preview card on the Home page (company, role, period, previewImage)
 *   - A full section on the Experience page (all fields), via JobSection
 *
 * Fields:
 *   id            string      — URL anchor id, e.g. 'werkr' → /#/experience#werkr
 *   company       string      — Company name
 *   role          string      — Role title or progression summary
 *   period        string      — Display date range
 *   location      string      — City, Country
 *   previewImage  string      — Single image for the home page card (/public-relative)
 *   description   string      — 1–3 sentence overview: what the job/company is and what you did
 *   skills        string[]    — Tags shown below the description
 *   website       string?     — Optional company URL for a link on the Experience page
 *   projects      Project[]   — Individual projects done at this job, each rendered by
 *                               ProjectSection (see src/data/projects/*.js for the shape:
 *                               id, title, date, skills, description, media, gridWidth)
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
    projects: [
      {
        id: 'werkr-project-1',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/werkr/project1_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/werkr/project1_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
      {
        id: 'werkr-project-2',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/werkr/project2_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/werkr/project2_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
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
    projects: [
      {
        id: 'gei-project-1',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/gei/project1_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/gei/project1_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
      {
        id: 'gei-project-2',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/gei/project2_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/gei/project2_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
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
    projects: [
      {
        id: 'accelerated-project-1',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/accelerated/project1_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/accelerated/project1_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
      {
        id: 'accelerated-project-2',
        title: 'Placeholder Project Title',
        date: 'Date TBD',
        skills: ['Skill 1', 'Skill 2'],
        description:
          'Placeholder — describe this project. What was the goal, what did you build, and what was the outcome?',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/accelerated/project2_photo1.jpg',
            alt: 'Placeholder photo 1',
            row: 0, width: 0.5, height: 0.4,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/accelerated/project2_photo2.jpg',
            alt: 'Placeholder photo 2',
            row: 0, width: 0.5, height: 0.4,
          },
        ],
      },
    ],
  },
]

export default experienceData
