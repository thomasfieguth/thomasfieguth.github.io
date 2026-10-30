/**
 * experienceData.js
 *
 * Each entry renders as its own Experience page (hero +
 * JobSection), in array order; the first entry is where /experience lands.
 *
 * Fields:
 *   id            string      — Route id, e.g. 'werkr' → /experience/werkr
 *   tabLabel      string      — Short name for the mobile hero title
 *   company       string      — Company name (hero title)
 *   heroImage     string?     — Hero banner image; omit for a plain black banner
 *   heroXMove     number?     — Shift the hero image right (negative = left) by this
 *                               fraction of the banner's width (see MediaFrame)
 *   heroYMove     number?     — Shift the hero image down (negative = up) by this
 *                               fraction of the banner's height (see MediaFrame)
 *   role          string      — Role title or progression summary
 *   period        string      — Display date range
 *   terms         {role, period}[]?
 *                             — Individual co-op / full-time terms, listed under the
 *                               header when the job spans more than one
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
    heroImage: '/assets/images/hero/werkr.jpg',
    role: 'Software Engineer, Co-op to Full-time',
    period: 'Jan 2024 – Present',
    terms: [
      { role: 'Software Engineer (Full-time)', period: 'May 2026 – Present' },
      { role: 'Software Engineer Co-op', period: 'May – Aug 2025' },
      { role: 'Robotics / Software Engineer Co-op', period: 'Jan – Apr 2024' },
    ],
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
          '**Architecture:** The guidance system turns a mission planned in the operator interface (GPS-defined rows, headland turns, and implement events) \
          into steering and speed commands. I designed it as a set of C++ ROS2 lifecycle nodes: a mission manager that owns the state machine \
          and tracks progress, a trajectory planner that builds a short, speed-profiled trajectory ahead of the tractor, and a path tracker that \
          follows it with a modified Stanley controller, using curvature feedforward to compensate for steering lag. \n\
          **Obstacles:** Obstacles are mapped into a Nav2 costmap with custom layers. When one blocks the path, the tractor detours around it with Nav2\'s \
          Smac Hybrid planner, staying within the allowed deviation from the row, or stops if no detour exists, with Nav2\'s collision monitor \
          as an independent safety backstop. \n\
          **Testing:** All core logic lives in ROS-independent, unit-tested classes and is tested in simulation.',
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
          '**Problem:** This progression shows how I tuned the Extended Kalman Filter (EKF) that estimates the tractor\'s position and heading. \
          The tractor has to hold a straight line within a small error margin, in open fields and under tree cover where GPS quality varies, \
          so the guidance can only be as good as the estimate it is given. \n\
          **Approach:** To find where the filter was going wrong, I wrote a Python tool that parses logged rosbag data offline and plots covariance and \
          heading error over time, showing exactly when and how the estimate diverged. With it, I found and fixed three issues: \n\
          - **GPS confidence:** the GPS was overreporting its confidence, so I rescaled its covariance to a realistic value\n\
          - **Heading weighting:** the filter over-trusted the differential GPS heading, which made the output zig-zag, so I adjusted the relative weighting\n\
          - **RTK transitions:** the yaw estimate was too volatile during RTK float-to-fixed transitions, so I damped it\n\
          **Result:** Each fix shows up in the plots as a visible drop in error over time.',
        media: [
          {
            type: 'photoProgression', 
            steps: [
              { label: "V1", image: "/assets/images/experience/werkr/zoom_1.svg" }, 
              { label: "V2", image: "/assets/images/experience/werkr/zoom_2.svg" }, 
              { label: "V3", image: "/assets/images/experience/werkr/zoom_3.svg" }, 
              { label: "V4", image: "/assets/images/experience/werkr/zoom_4.svg" }, 
              { label: "V5", image: "/assets/images/experience/werkr/zoom_5.svg" }, 
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
        layout: 'stacked',
        description:
          '**Interface:** The screenshot shows the second iteration of the user interface, built in Qt and connected to ROS2. \
          It has two main jobs: letting the user generate missions with different path types, \
          and giving feedback about the state of the tractor and the mission. \n\
          **Mission types:** Currently there are 5 supported mission types:\n\
          - AB Line (straight line from A to B)\n\
          - AB Multi Line (set of straight lines connected optimally)\n\
          - Repeated Line (drives lines parallel to an initial line)\n\
          - Area Fill (cover every part of an area such as for mowing)\n\
          - Driving Path (drive a path that was recorded manually)\n\
          **Path planning:** For each mission type, the path generator calculates the optimal order to drive the rows in, \
          plans the route to avoid conflicts with a pre-defined boundary, plans implement moves, \
          and calculates a path modified from a Dubins or Reeds–Shepp path to smooth out steering inputs and \
          approach gear changes with straight steering, so that the tractor never has to steer at a standstill.',
        media: [
          {
            type: 'photo', 
            src: '/assets/images/experience/werkr/werkr_gui.jpg', 
            alt: 'Qt operator interface for the tractor, showing a planned mission on a map',
            row: 0, 
          }
        ],
      },
    ],
    gallery: [
      { type: 'photo', caption: 'Old Tractor', src: '/assets/images/experience/werkr/tractor_v1.jpg', thumb: '/assets/images/experience/werkr/tractor_v1_thumb.jpg' },
      { type: 'photo', caption: 'New Tractor', src: '/assets/images/experience/werkr/werkr_tractor.jpg', thumb: '/assets/images/experience/werkr/werkr_tractor_thumb.jpg' },
      { type: 'photo', caption: 'Autonomous Seeding', src: '/assets/images/experience/werkr/werkr_seeder.jpg', thumb: '/assets/images/experience/werkr/werkr_seeder_thumb.jpg'}, 
      { type: 'photo', caption: 'EKF Tuning Plot', src: '/assets/images/experience/werkr/full_5.svg' },
      { type: 'photo', caption: 'Debugging Tractor', src: '/assets/images/experience/werkr/werkr_debug.jpg', thumb: '/assets/images/experience/werkr/werkr_debug_thumb.jpg'}, 
      { type: 'photo', caption: 'Debugging Tractor', src: '/assets/images/experience/werkr/werkr_debug2.jpg', thumb: '/assets/images/experience/werkr/werkr_debug2_thumb.jpg'}, 
      { type: 'photo', caption: 'Debugging Tractor', src: '/assets/images/experience/werkr/werkr_debug3.jpg', thumb: '/assets/images/experience/werkr/werkr_debug3_thumb.jpg'},  
      { type: 'photo', caption: 'Autonomy System Diagram', src: '/assets/images/experience/werkr/werkr_autonomy_layout.svg', thumb: '/assets/images/experience/werkr/werkr_autonomy_layout_thumb.jpg'},      
    ],
  },
  {
    id: 'gei',
    tabLabel: 'GEI',
    company: 'GEI Consultants',
    heroImage: '/assets/images/hero/gei.jpg',
    heroYMove: 0.5,
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
          '**Goal:** This project involved creating detailed calculations and a report on the efficiency of the pumps and the pipes \
          for wastewater pumping stations. The goal was to isolate the issues to either the pump or the pipes to allow the \
          customer to choose what would be most optimal to fix first. \n\
          **Method:** Each calculation compared the expected flow rate (based on the pump specifications, length of the pipe, shape of the pipes, \
          and height it needs to pump) against the actual measured flow rate calculated using the derivative of liquid height \
          (compensating for changes in well shape). \n**Result:** The final graph shows the operating point of the pumps. \
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
          '**Goal:** This project involved creating a parametric cost-estimation model to \
          estimate water and wastewater treatment plants based on as few input variables \
          as possible. This would allow the customers to instantly get a very rough estimate \
          of what a new plant would cost without the need for detailed assessments. \
          The model only took in the plant\'s total flow rate and the existence of individual process components. \n\
          **Method:** Two methods were combined to get a final estimate: a flowrate-based method, \
          which fit a cost-to-flowrate curve based on historical data from comparable plants worldwide, \
          and a building block method, which fit a cost-to-flowrate curve for each individual process and combined \
          them to get a final result. \n\
          **Output:** The charts show the results of the model, showing the output results for both methods \
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
            x: 0.4, y: 0, width: 0.6, height: 0.35,
          },
          {
            type: 'photo',
            src: '/assets/images/experience/gei/WTP_building_block.jpg',
            alt: 'Water Treatment Plant Cost as a Function of Flowrate and Components',
            x: 0.4, y: 0.35, width: 0.6, height: 0.35,
          },
        ],
      },
    ],
  },
  {
    id: 'asi',
    tabLabel: 'ASI',
    company: 'Accelerated Systems Inc.',
    heroImage: '/assets/images/hero/asi.jpg',
    role: 'Mechanical / Software Engineer Co-op',
    period: 'Jan – Dec 2022',
    terms: [
      { role: 'Mechanical / Software Engineer Co-op', period: 'Sep – Dec 2022' },
      { role: 'Machinist & Technical Support Co-op', period: 'Jan – Apr 2022' },
    ],
    location: 'Waterloo, Ontario, Canada',
    website: 'https://www.acceleratedsystems.com',
    description:
      'Across two co-op terms at Accelerated Systems, I worked between the machine shop and software for electric vehicle drive systems. \
      The first term was hands-on: designing parts in SolidWorks, programming CNC machines, and building test hardware for motor development. \n\
      In the second, I added software, building a Kotlin control app and C++/ROS2 nodes for the company\'s autonomous lawnmower.',
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
          '**What I built:** Test hardware and production parts supporting motor development: \n\
          - Welded custom fixtures to secure motors during test runs\n\
          - Designed and built a watertight jacket to house a waterproof motor\n\
          - Machined a mold for the waterproof grommets that seal the motor\'s electrical connections, then made the grommets\n\
          - Designed motor cooling: an air cooling system machined into the motor casing, plus air and water cooling setups for high-intensity testing\n\
          - Assembled gearboxes on the motor production line\n\
          **What I learned:** Thermal management, waterproofing, mechanical assembly, and design for manufacturing.',
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
          '**Mobile app:** For Accelerated Systems\' autonomous lawnmower, I designed and built a Kotlin mobile app that \
          controls the mower wirelessly and shows its live state. It has a joystick for manual driving and four status pages: \n\
          - Overhead view of sensor proximity detection\n\
          - Sensor proximity detection over time\n\
          - Overhead object detection display\n\
          - Map showing the mower\'s GPS position\n\
          **ROS2:** On the mower itself, I wrote the C++ ROS2 nodes for safety stops on sensor proximity, geofencing, and joystick control.',
        media: [
          { type: 'photo', src: '/assets/images/experience/asi/App1.jpg', alt: 'Mower app screen 1', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App2.jpg', alt: 'Mower app screen 2', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App3.jpg', alt: 'Mower app screen 3', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App4.jpg', alt: 'Mower app screen 4', row: 0, width: 0.2, height: 0.43 },
          { type: 'photo', src: '/assets/images/experience/asi/App5.jpg', alt: 'Mower app screen 5', row: 0, width: 0.2, height: 0.43 },
        ],
      },
    ],
    gallery: [
      { type: 'photo', caption: 'E-Bike stress testing setup', src: '/assets/images/experience/asi/bike_tester.jpg', thumb: '/assets/images/experience/asi/bike_tester_thumb.jpg' },
      { type: 'photo', caption: 'DIY linuxCNC controller for a 4th axis on a CNC', src: '/assets/images/experience/asi/cnc_controller.jpg', thumb: '/assets/images/experience/asi/cnc_controller_thumb.jpg' },
    ],
  },
]

export default experienceData
