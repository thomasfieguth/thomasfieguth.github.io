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
    website: 'https://werkrtractors.com',
    description:
      'Werkr Tractors is a privately owned Canadian company developing a fully electric, autonomous tractor for small-scale precision agriculture. \
      The tractor can be driven manually or run autonomously, following GPS-defined paths to plant, weed, and manage rows with high positional accuracy. \
      It is designed to be modular, supporting a range of implements including seeders, weeders, mower decks, and flame weeders, and is powered by swappable \
      LFP battery packs with an optional gas-powered range extender for continuous operation. The company is also developing camera-based, \
      AI-driven row-following to complement GPS guidance for more precise navigation between crop rows. The overall goal is to replace diesel tractors with an electric, \
      autonomous alternative that reduces fuel costs and labour requirements while increasing yield and precision, making small-scale farming more sustainable and profitable.',
    skills: [
      'C++', 'ROS2', 'Qt', 'Python',
      'Autonomous Navigation', 'Sensor Fusion',
      'Camera-Based Detection', '3D Visualization',
    ],
    projects: [
      {
        id: 'werkr-project-1',
        title: 'Optimizing Position Estimation',
        skills: ['Skill 1', 'Skill 2'],
        gridWidth: 0.55, 
        description:
          'This progression documents the tuning of the Extended Kalman Filter (EKF) responsible for state estimation on our self-driving tractor. \
          Since the tractor must hold a straight line within a small error margin, in open fields and under tree cover where GPS quality varies, \
          the reliability of the EKF output is critical. To debug and tune the filter, \
          I wrote a Python tool that parses logged rosbag data offline and plots covariance and heading error over time, \
          letting me pinpoint exactly when and how the estimate diverged. Using this tool, I identified and corrected several issues: \
          the GPS was overreporting its confidence, so I manually rescaled its covariance to a more realistic value; the filter was over-trusting differential GPS heading, \
          causing a zig-zagging output, which I corrected by adjusting the relative weighting; and the yaw estimate was too volatile during RTK float-to-fixed transitions, \
          which I damped accordingly. Each fix is reflected in the plots as a visible reduction in error against the time axis.',
        media: [
          {
            type: 'photoProgression', 
            steps: [
              { label: "V1", image: "assets/images/experience/werkr/zoom_1.svg" }, 
              { label: "V2", image: "assets/images/experience/werkr/zoom_2.svg" }, 
              { label: "V3", image: "assets/images/experience/werkr/zoom_3.svg" }, 
              { label: "V4", image: "assets/images/experience/werkr/zoom_4.svg" }, 
              { label: "V5", image: "assets/images/experience/werkr/zoom_5.svg" }, 
            ], 
            waitMs: 2500,
            fadeMs: 600,
            aspectRatio: '16 / 9', 
            row: 0, width: 1.0, height: 1.0,
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
      'GEI Consultants is an engineering and environmental consulting firm providing geotechnical, \
      environmental, water resources, and ecological engineering services for infrastructure and industrial projects. \
      During my co-op, I worked in the water resources group, analyzing pump efficiency and friction losses in piping systems, \
      building a capacity-based cost estimation model for water and wastewater treatment plants, \
      and conducting site inspections with formal client reporting.',
    skills: [
      'Hydraulic Analysis', 'Pump Efficiency',
      'Cost Estimation', 'Technical Reporting', 'Site Inspection',
    ],
    projects: [
      {
        id: 'gei-project-1',
        title: 'Pump Efficiency Calculation',
        skills: ['Skill 1', 'Skill 2'],
        gridWidth: 0.45, 
        description:
          'This project involved creating detailed calculations and a report on the efficiency of the pumps and the pipes \
          for wastewater pumping stations. The goal was to isolate the issues to either the pump or the pipes to allow the \
          customer to choose what would be most optimal to fix first. \n\
          Each calculation compared the expected flow rate (based on the pump specifications, length of the pipe, shape of the pipes, \
          and height it needs to pump) against the actual measured flow rate calculated using the derivative of liquid height \
          (compensating for changes in well shape). \nThe final graph shows the operating point of the pumps. \
          The pumps were operating at 93% of their expected capacity, whereas the rest of the system added much more resistance, \
          which was the main limiting factor of the pumping station\'s performance.',
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/gei/pump_data.svg',
            alt: 'Pump Data',
            row: 0,
          },
        ],
      },
      {
        id: 'gei-project-2',
        title: 'Water Treatment Plant Cost Estimation',
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
