/**
 * experienceData.js
 *
 * Each entry renders as its own Experience page (hero +
 * JobSection), in array order; the first entry is where /experience lands.
 *
 * Fields:
 *   id            string      — Route id, e.g. 'werkr' → /#/experience/werkr
 *   tabLabel      string      — Short name for the mobile hero title
 *   company       string      — Company name (hero title)
 *   heroImage     string?     — Hero banner image; omit for a plain black banner
 *   role          string      — Role title or progression summary
 *   period        string      — Display date range
 *   location      string      — City, Country
 *   description   string      — Summary of the job, shown below the skills; '\n' starts a new paragraph
 *   skills        (string|{text, quirk})[]
 *                             — Tags shown below the description. Plain strings render as
 *                               normal; an object with `quirk: true` renders the same
 *                               tag text but wires up the hidden tractor quirk on click
 *                               (see JobSection.jsx / TractorQuirkContext)
 *   website       string?     — Optional company URL for a link on the Experience page
 *   projects      Project[]   — Individual projects done at this job, each rendered by
 *                               ProjectSection (see src/data/projects/*.js for the shape:
 *                               id, title, date, skills, description, media, gridWidth)
 *   gallery       CaptionGridItem[]?
 *                             — Captioned thumbnails under the projects, same as the
 *                               project pages' grids: { type, caption, src, ... }
 *                               (see CaptionGrid.jsx for the full shape). Clicking a
 *                               thumbnail opens it in the Lightbox.
 */
const experienceData = [
  {
    id: 'werkr',
    tabLabel: 'Werkr',
    company: 'Werkr Tractors',
    heroImage: 'assets/images/hero/werkr.JPG',
    role: 'Software Engineer Co-op & Full-time',
    period: '2022 – Present',
    location: 'Waterloo, Ontario, Canada',
    website: 'https://werkrtractors.com',
    description:
      'I joined Werkr Tractors as a software engineering co-op and stayed on full-time, working on the software for a fully electric, \
      autonomous tractor built for small-scale precision agriculture. Most of my work is on the tractor\'s high-precision guidance: \
      writing the C++ ROS2 nodes that let it follow GPS-defined rows with high positional accuracy, in open fields and under tree cover alike. \n\
      Supporting that, I tuned the Extended Kalman Filter that fuses GPS, heading, and other sensor data into the position estimate the guidance \
      relies on, building Python tooling to analyze logged rosbag data offline so issues can be traced to the exact moment they occur. \
      I also develop the onboard Qt operator interface used to drive, monitor, and switch the tractor between manual and autonomous operation.',
    skills: [
      'C++', 'ROS2', 'Qt', 'Python',
      { text: 'Autonomous Navigation', quirk: true }, 'Sensor Fusion',
    ],
    projects: [
      {
        id: 'werkr-project-1',
        title: 'Tractor Guidance',
        description:
          'The guidance system turns a mission planned in the operator interface (GPS-defined rows, headland turns, and implement events) \
          into steering and speed commands. I designed it as a set of C++ ROS2 lifecycle nodes: a mission manager that owns the state machine \
          and tracks progress, a trajectory planner that builds a short, speed-profiled trajectory ahead of the tractor, and a path tracker that \
          follows it with a modified Stanley controller, using curvature feedforward to compensate for steering lag. \n\
          Obstacles are mapped into a Nav2 costmap with custom layers. When one blocks the path, the tractor detours around it with Nav2\'s \
          Smac Hybrid planner, staying within the allowed deviation from the row, or stops if no detour exists, with Nav2\'s collision monitor \
          as an independent safety backstop. All core logic lives in ROS-independent, unit-tested classes and is tested in simulation.',
        media: [
          {
            type: 'video',
            src: '/assets/videos/werkr/werkr_guidance_video.mp4',
            row: 0, width: 1.0, height: 0.5625,
          },
        ],
      },
      {
        id: 'werkr-project-2',
        title: 'Optimizing Position Estimation',
        gridWidth: 0.55, 
        description:
          'This progression shows how I tuned the Extended Kalman Filter (EKF) that estimates the tractor\'s position and heading. \
          The tractor has to hold a straight line within a small error margin, in open fields and under tree cover where GPS quality varies, \
          so the guidance can only be as good as the estimate it is given. \n\
          To find where the filter was going wrong, I wrote a Python tool that parses logged rosbag data offline and plots covariance and \
          heading error over time, showing exactly when and how the estimate diverged. With it, I found and fixed three issues: \n\
          - The GPS was overreporting its confidence, so I rescaled its covariance to a realistic value\n\
          - The filter over-trusted the differential GPS heading, which made the output zig-zag, so I adjusted the relative weighting\n\
          - The yaw estimate was too volatile during RTK float-to-fixed transitions, so I damped it\n\
          Each fix shows up in the plots as a visible drop in error over time.',
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
            row: 0, width: 1.0, height: 0.934,
          },
        ],
      },
      {
        id: 'werkr-project-3',
        title: 'Onboard Operator Interface',
        gridWidth: 0.4, 
        description:
          'The image on the left is the second iteration of the user interface. \
          The interface is built in Qt and connected to ROS2. \
          This gui has two main components: It allows the user to generate missions with different path types \
          and it gives users feedback about the state of the tractor and the state of the mission. \n\
          Currently there are 5 supported mission types:\
          - AB Line (straight line from A to B)\
          - AB Multi Line (set of straight lines connected optimally)\
          - Repeated Line (drives lines parallel to an initial line)\
          - Area Fill (cover every part of an area such as for mowing)\
          - Driving Path (drive a path that was recorded manually)\n\
          For each line type, the path generator calculates the most optimum route to drive the rows in, \
          plans the route to avoid any conflicts the a pre-defined boundary, plans implement moves, \
          and calculates a path modified from a dubins or reeds-shepp path to smooth out steering inputs and \
          approach gear changes at straight steering so that steering does not need to happen at a stand still.',
        media: [
          {
            type: 'photo', 
            src: '/assets/images/experience/werkr/werkr_gui.png', 
            alt: 'image of the graphical user interface for the tractor', 
            row: 0, 
          }
        ],
      },
    ],
    gallery: [
      { type: 'photo', caption: 'Tractor V1', src: '/assets/images/experience/werkr/tractor_v1.png' },
      { type: 'photo', caption: 'New Tractor', src: '/assets/images/experience/werkr/werkr_tractor.jpg' },
      { type: 'photo', caption: 'Autonomous Seeding', src: '/assets/images/experience/werkr/werkr_seeder.jpg'}, 
      { type: 'photo', caption: 'EKF Tuning Plot', src: '/assets/images/experience/werkr/full_5.svg' },
    ],
  },
  {
    id: 'gei',
    tabLabel: 'GEI',
    company: 'GEI Consultants',
    role: 'Project Designer Co-op',
    period: 'May – Aug 2023',
    location: 'Kitchener, Ontario, Canada',
    website: 'https://www.geiconsultants.com',
    description:
      'As a project designer co-op in GEI\'s water resources group, I supported engineering work on water and wastewater infrastructure. \
      I analyzed pump efficiency and friction losses at wastewater pumping stations to determine whether the pumps or the piping \
      were limiting performance, and built a parametric cost-estimation model that gives clients a rough price for a new treatment \
      plant from only its flow rate and process components. \n\
      I also took part in site inspections and turned the findings into formal client reports.',
    skills: [
      'Hydraulic Analysis', 'Data Analysis',
      'Professional Report Writing', 'Cost Estimation', 
      'Site Inspection'
    ],
    projects: [
      {
        id: 'gei-project-1',
        title: 'Pump Efficiency Calculation',
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
        description:
          'This project involved creating a parametric cost-estimation model to \
          estimate water and wastewater treatment plants based on as few input variables \
          as possible. This would allow the customers to instantly get a very rough estimate \
          of what a new plant would cost without the need for detailed assessments. \
          The model only took in the plant\'s total flow rate and the existence of individual process components. \n\
          Two methods were combined to get a final estimate. A flowrate-based method, \
          which fit a cost-to-flowrate curve based on historical data from comparable plants worldwide. \
          A building block method, which fit a cost-to-flowrate curve for each individual process and combined \
          them to get a final result. \n\
          The data shows the results of the model, showing the output results for both methods \
          individually and the individual cost estimates per process.',
        gridWidth: 0.55, 
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/gei/WTP_cost_breakdown.jpg',
            alt: 'Water Treatment Plant Cost Breakdown',
            x: 0, y: 0, width: 0.4, height: 0.7,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/gei/WTP_flowrate.jpg',
            alt: 'Water Treatment Plant Cost as a Function of Flowrate',
            x: 0.4, y: 0, width: 0.6, height: 0.34,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/gei/WTP_building_block.jpg',
            alt: 'Water Treatment Plant Cost as a Function of Flowrate and Components',
            x: 0.4, y: 0.34, width: 0.6, height: 0.34,
          },
        ],
      },
    ],
  },
  {
    id: 'asi',
    tabLabel: 'ASI',
    company: 'Accelerated Systems Inc.',
    heroImage: 'assets/images/hero/asi.jpg',
    role: 'Mechanical / Software Engineer Co-op',
    period: 'Jan – Dec 2022',
    location: 'Waterloo, Ontario, Canada',
    website: 'https://www.acceleratedsystems.com',
    description:
      'During my co-op at Accelerated Systems, I split my time between the machine shop and software development \
      for electric vehicle drive systems. On the mechanical side, I designed parts in SolidWorks, wrote CNC programs, \
      and machined and welded test fixtures, a watertight motor jacket, grommet molds, and an integrated air cooling system, \
      as well as assembling gearboxes on the production line. \n\
      On the software side, I worked in Kotlin and in C++ with ROS2, building tools that supported the company\'s motor and vehicle projects.',
    skills: [
      'Kotlin', 'ROS2', 'C++',
      'SolidWorks', 'CNC Programming', 'Machining',
      'Manufacturing', 
    ],
    projects: [
      {
        id: 'accelerated-project-1',
        title: 'Machining and Manufacturing',
        description:
          'I worked on a range of machining and manufacturing tasks supporting motor development and testing: \n\
          - Welded custom fixtures used to secure motors during test runs\n\
          - Designed and built a watertight jacket to house a waterproof motor\n\
          - To seal the motor\'s electrical connections, I machined a mold for producing the waterproof grommets and manufactured them\n\
          - Designed and machined an air cooling system integrated into the motor casing to manage heat during operation\n\
          - Assembled gearboxes as part of the motor production line \n\
          - Designed and built an air cooling system and a water cooling system for high intensity motor testing\n\
          Together, these projects gave me the hands-on machine shop and R&D design experiance that I can take into future\
          endeavors. Thermal management, waterproofing methods, mechanical assembly, and design for manufacturing are important \
          things I learned during this co-op.', 
        media: [
          {
            type: 'photo',
            src: '/assets/images/experience/asi/welding.jpg',
            alt: 'Welding',
            row: 0, width: 0.5, height: 0.5,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/asi/lathe.jpg',
            alt: 'Machining',
            row: 0, width: 0.5, height: 0.5,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/asi/CNC_example1.jpg',
            alt: 'CNC Result',
            row: 1, width: 0.333, height: 0.3,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/asi/CNC_example2.jpg',
            alt: 'CNC Result',
            row: 1, width: 0.334, height: 0.3,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/asi/CNC_example3.jpg',
            alt: 'CNC Result',
            row: 1, width: 0.333, height: 0.3,
          },
        ],
      },
      {
        id: 'accelerated-project-2',
        title: 'Software Development',
        description:
          ' As part of the autonomous tractor project at Accelerated Systems, I build a simple Kotlin app to display \
          information in a user friendly way and control the mower. \n\
          The app included a joystick to control the mower manually, and 4 pages displaying current status information: \n\
          - Sensor proximity detection from an overhead view \n\
          - Sensor proximity detection overlayed over time graph \n\
          - Overhead object detection display \n\
          - Map display showing mower position \n\
          This application, while simple and not used other than in testing, was a very interesting project to work on \
          and was a fun learning opportunity for learning a new language. \n\
          On the ROS2 side, I built the simple nodes controlling safety stops for sensor procimity, geofencing, and joystick control.',
        media: [
          { type: 'photo', src: '/assets/images/experience/asi/App1.png', alt: 'Mower app screen 1', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App2.png', alt: 'Mower app screen 2', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App3.png', alt: 'Mower app screen 3', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App4.png', alt: 'Mower app screen 4', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App5.png', alt: 'Mower app screen 5', row: 0, width: 0.2, height: 0.43 },
        ],
      },
    ],
    gallery: [
      { type: 'photo', caption: 'E-Bike stress testing setup', src: '/assets/images/experience/asi/bike_tester.jpg' },
      { type: 'photo', caption: 'DIY linuxCNC controller for a 4th axis on a CNC', src: '/assets/images/experience/asi/cnc_controller.jpg' },
    ],
  },
]

export default experienceData
