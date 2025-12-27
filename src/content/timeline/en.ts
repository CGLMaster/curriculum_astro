const timeline = [
  {
    title: "Bachelor's Degree in Software Engineering (UCM)",
    date: "2019 - 2024",
    description:
      "Bachelor's Degree in Software Engineering at <a href='https://www.ucm.es/' alt='UCM' title='UCM' style='color: {color}' target='_blank' rel='noopener noreferrer'>Complutense University of Madrid</a>, with practical training in programming (Java, Python, C++), databases (SQL/NoSQL), web development and agile methodologies. Completed projects in frontend, backend and game development (Phaser), applying architecture and performance best practices.",
    type: "degree",
    color: "#4F46E5",
    projects: [
      {
        title: "SwiftDo",
        bullets: [
          "Led front-end development and feature implementation using <strong>React Native</strong>, ensuring functionality across iOS, Android and web.",
          "Built a desktop version using <strong>Electron</strong> for Windows desktop support.",
          "Implemented backend endpoints and synchronization logic for core features.",
          "Integrated <strong>Alexa</strong> for voice control and automation improvements.",
        ],
      },
      {
        title: "TheGamuSinner",
        bullets: [
          "Designed and created sprites, maps and levels using <strong>Phaser</strong>.",
          "Implemented core gameplay mechanics (collision, controls, state management) and game logic.",
          "Developed the web frontend and UI to showcase the game experience.",
          "Optimized performance and asset pipeline for smooth gameplay.",
        ],
      },
      {
        title: "TheVideoGameBox",
        bullets: [
          "Implemented a <strong>Python</strong> script to fetch and normalize game data from the <strong>IGDB</strong> API.",
          "Designed and built the frontend for browsing, searching and filtering games.",
          "Implemented REST endpoints and <strong>MongoDB</strong> persistence for scalable data access.",
          "Automated data updates and added integrity checks to ensure consistent datasets.",
        ],
      },
    ],
  },
  {
    title: "Internship at LiveMed",
    date: "2023 - 2024",
    description:
      "Internship at <a href='https://www.livemed.in/es/' alt='LiveMed' title='LiveMed' style='color: {color}' target='_blank' rel='noopener noreferrer'>LiveMed</a> focused on automation and data migration (Python scripts) and on development and maintenance of web channels (Diabetes channel) and content updates. Main focus: designing migration pipelines and optimizing processes to ensure data integrity and scalability.",
    type: "internship",
    color: "#10B981",
    projects: [
      {
        title: "Saludemia",
        bullets: [
          "Primary project during my internship: end-to-end development of <strong>Python</strong> migration scripts to transfer and normalize data into <strong>Wagtail</strong> with persistent storage in a database.",
          "Designed a <strong>pipeline</strong> to fetch entities (diseases, medications, symptoms), map relationships and create corresponding DB tables/records.",
          "Optimized for <strong>parallel</strong> fetching and processing to improve performance on large datasets while preserving entity dependencies.",
          "Implemented validation and automation to ensure data integrity and consistency post-migration.",
        ],
      },
      {
        title: "Web LiveMed",
        bullets: [
          "Full development of the <strong>Diabetes channel</strong> on the website (frontend and content coordination).",
          "Ad-hoc implementations for the <strong>Respiratory channel</strong> on the website.",
          "Updated posts, emails and course materials.",
          "Coordinated with the content team and improved the publishing workflow.",
          "Applied <strong>accessibility</strong> and <strong>SEO</strong> best practices to improve reach and user experience.",
        ],
      },
    ],
  },
  {
    title: "Developer at Slashmobility",
    date: "2024 - Present",
    description:
      "Developer at <a href='https://slashmobility.com/' alt='Slashmobility' title='Slashmobility' style='color: {color}' target='_blank' rel='noopener noreferrer'>Slashmobility</a>, working on web and mobile applications with Vue, React and React Native, and on projects with Astro. Focused on architecture, performance and collaborating in agile teams to deliver scalable solutions.",
    type: "job",
    color: "#F59E0B",
    projects: [
      {
        title: "CONVERSATIONAL CHAT PLATFORM (Repsol)",
        description:
          "Web application for <strong>multi-agent orchestration</strong> (swarm, planners, agents and tools) that orchestrates <strong>AI</strong> models in production. <strong>Conversational multimodal interface</strong> (text, audio and documents with transcription), real-time communication via <strong>SignalR</strong> and administration console and recent memory by chat.",
        bullets: [
          "Led <strong>~80–90%</strong> of the frontend using <strong>Vue 3</strong> (Composition API), <strong>Pinia</strong> and a reusable component/folder architecture.",
          "<strong>Conversational input/UX</strong>: <strong>advanced prompts</strong>, ingestion and <strong>transcription of documents and audio</strong>, plus <strong>image transcription</strong> (clipboard/file import), incremental rendering of partial responses and visualization of plans and interactive code snippets.",
          "<strong>Editable canvas</strong> (.md & docs): collaborative editor with <strong>versioning</strong> (Unified format) and context-aware agent edits; allows editing, saving and downloading, and comparing agent-proposed changes with previous content (major feature).",
          "Real-time sync: <strong>SignalR</strong> integration and coordination with backend/<strong>Redis</strong> to ensure consistent state.",
          "Admin panels: panels and forms to create/edit/remove agents, tools, swarm masters and planners with validations and access control.",
          "Refactoring & maintenance: <strong>SCSS</strong> separation, modularization and duplication reduction; adaptation for rebranding.",
          "Backend support (<strong>.NET</strong>): ad-hoc CRUDs and auxiliary services to support the frontend.",
        ],
      },
      {
        title: "WELDER CONNECTIVITY APP",
        description:
          "Hybrid app (<strong>React Native</strong>) for monitoring and controlling welders via <strong>BLE</strong>, displaying real-time metrics (temperature, power, battery, device status) and managing multiple connections.",
        bullets: [
          "Led full development after a teammate left, implementing multi-device management and local data synchronization.",
          "Improved BLE communication: automatic reconnection and direct connection to the last paired device.",
          "Designed the UI with dark/light mode support and internationalization (i18n).",
          "Implemented firmware update flow, sending data in packets from .hex.b16 files to the welder.",
          "Refactored legacy code and optimized real-time chart rendering for improved performance and clarity.",
        ],
      },
      {
        title: "Project F - UI library",
        bullets: ["Reusable components", "Docs", "TypeScript", "NPM publish"],
      },
      {
        title: "Project G - Mobile integration",
        bullets: [
          "RN bridge",
          "Performance tuning",
          "Error monitoring",
          "Cross-platform support",
        ],
      },
    ],
  },
];

export default timeline;
