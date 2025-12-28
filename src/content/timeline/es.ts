const timeline = [
  {
    title: "Grado en Ingeniería de Software (UCM)",
    date: "2019 - 2024",
    description:
      "Estudios en Ingeniería de Software en la <a href='https://www.ucm.es/' alt='UCM' title='UCM' style='color: {color}' target='_blank' rel='noopener noreferrer'>Universidad Complutense de Madrid</a>, con formación práctica en programación (Java, Python, C++), bases de datos (SQL/NoSQL), desarrollo web y metodologías ágiles. Realicé proyectos de frontend, backend y videojuegos (Phaser), aplicando buenas prácticas de arquitectura y rendimiento.",
    type: "degree",
    color: "#4F46E5",
    projects: [
      {
        title: "SwiftDo",
        bullets: [
          "Desarrollo del front-end y funcionalidades principales con <strong>React Native</strong>, adaptadas a iOS, Android y web.",
          "Desarrollo de la versión de escritorio mediante <strong>Electron</strong> para soporte en Windows.",
          "Implementación de endpoints y lógica de sincronización para funcionalidades críticas.",
          "Integración con <strong>Alexa</strong> para control por voz y mejoras en accesibilidad y automatización.",
        ],
      },
      {
        title: "TheGamuSinner",
        bullets: [
          "Diseño y creación de sprites, mapas y niveles con <strong>Phaser</strong>.",
          "Implementación de mecánicas de juego (colisiones, controles y estados) y lógica de gameplay.",
          "Desarrollo del front web e interfaz de usuario para la experiencia de juego.",
          "Optimización del rendimiento y del pipeline de assets.",
        ],
      },
      {
        title: "TheVideoGameBox",
        bullets: [
          "Desarrollo de un script en <strong>Python</strong> para consumir la API de <strong>IGDB</strong> y normalizar datos de videojuegos.",
          "Diseño y desarrollo del frontend para visualización, búsqueda y filtrado de juegos.",
          "Implementación de endpoints y persistencia en <strong>MongoDB</strong> para acceso escalable a los datos.",
          "Automatización de actualizaciones y validaciones para asegurar la integridad de los datos.",
        ],
      },
    ],
  },
  {
    title: "Prácticas en LiveMed",
    date: "2023 - 2024",
    description:
      "Prácticas en <a href='https://www.livemed.in/es/' alt='LiveMed' title='LiveMed' style='color: {color}' target='_blank' rel='noopener noreferrer'>LiveMed</a> centradas en automatización y migración de datos (scripts Python) y en el desarrollo y mantenimiento de canales web (Canal Diabetes) y contenidos. Me centré especialmente en el diseño de pipelines de migración y en la optimización de procesos para garantizar la integridad y la escalabilidad de los datos.",
    type: "internship",
    color: "#10B981",
    projects: [
      {
        title: "Saludemia",
        bullets: [
          "Proyecto principal durante mi estancia: desarrollo completo de scripts de migración de datos en <strong>Python</strong> para transferir y normalizar información hacia <strong>Wagtail</strong> con persistencia en base de datos.",
          "Diseño de <strong>pipeline</strong> que obtiene entidades (enfermedades, medicamentos, síntomas), establece sus relaciones y crea las tablas/entradas de BD correspondientes.",
          "Optimización para obtención y procesamiento en <strong>paralelo</strong>, mejorando el rendimiento en datasets grandes y respetando dependencias entre entidades.",
          "Implementación de validaciones y automatización para garantizar la integridad y consistencia de los datos migrados.",
        ],
      },
      {
        title: "Web LiveMed",
        bullets: [
          "Desarrollo íntegro del <strong>Canal Diabetes</strong> en la web (front-end y coordinación de contenido).",
          "Implementaciones puntuales del <strong>Canal Respiratorio</strong> en la web",
          "Actualización de posts, correos y cursos.",
          "Coordinación con el equipo de contenidos y mejoras en el flujo de publicación.",
          "Aplicación de buenas prácticas de <strong>accesibilidad</strong> y <strong>SEO</strong> para mejorar alcance y experiencia de usuario.",
        ],
      },
    ],
  },
  {
    title: "Desarrollador en Slashmobility",
    date: "2024 - Presente",
    description:
      "Desarrollador en <a href='https://slashmobility.com/' alt='Slashmobility' title='Slashmobility' style='color: {color}' target='_blank' rel='noopener noreferrer'>Slashmobility</a>, trabajando en aplicaciones web y móviles con Vue, React y React Native, además de proyectos con Astro. Enfoque en arquitectura, rendimiento y colaboración en equipos ágiles para entregar soluciones escalables.",
    type: "job",
    color: "#F59E0B",
    projects: [
      {
        title: "Plataforma de Chat Conversacional (Repsol)",
        description:
          "Aplicación web para <strong>orquestación multi-agente</strong> (swarm, planners, agents y tools) que orquesta modelos de <strong>IA</strong> en producción. <strong>Interfaz conversacional multimodal</strong> (texto, audio y documentos con transcripción), comunicación en tiempo real vía <strong>SignalR</strong> y consola de administración y memoria reciente por chat.",
        bullets: [
          "Lideré <strong>~80–90%</strong> del frontend usando <strong>Vue 3</strong> (Composition API), <strong>Pinia</strong> y una arquitectura de componentes reutilizables.",
          "<strong>Input y UX conversacional</strong>: <strong>prompts avanzados</strong>, ingestión y <strong>transcripción de documentos y audio</strong>, así como <strong>transcripción de imágenes</strong> (import desde portapapeles o fichero), renderizado incremental de respuestas y visualización de planes y snippets interactivos.",
          "<strong>Canvas editable</strong> (.md y documentos): editor colaborativo con <strong>versionado</strong> (formato Unified) y edición context-aware por agentes; permite editar, guardar y descargar, y comparar propuestas del agente con el contenido previo (feature destacada).",
          "Sincronización en tiempo real: integración de <strong>SignalR</strong> y coordinación con backend/<strong>Redis</strong> para mantener consistencia de estado.",
          "Paneles de administración: formularios y paneles para crear/editar/eliminar agentes, tools, swarm masters y planners con validaciones y control de accesos.",
          "Refactorización y mantenimiento: separación de <strong>SCSS</strong>, modularización, reducción de duplicados y adaptación al rebranding.",
          "Soporte backend (<strong>.NET</strong>): implementación puntual de CRUDs y servicios auxiliares para el frontend.",
        ],
      },
      {
        title: "Aplicación de Conectividad con Soldadores",
        description:
          "Aplicación híbrida (React Native) para monitorización y control de soldadores mediante BLE, mostrando métricas en tiempo real (temperatura, potencia, batería, estado del dispositivo) y gestionando múltiples conexiones.",
        bullets: [
          "Lideré el <strong>desarrollo completo</strong> tras la salida de un compañero, implementando la gestión de múltiples dispositivos y la sincronización de datos en almacenamiento local.",
          "Mejoré la <strong>comunicación BLE</strong>: reconexión automática y conexión directa al último dispositivo emparejado.",
          "Diseñé la UI con soporte dark/light y soporte de internacionalización (i18n).",
          "Implementé el <strong>proceso de actualización de firmware</strong> mediante envío de datos en paquetes desde archivos .hex.b16 al soldador.",
          "Refactoricé código heredado y optimicé la representación de gráficos en tiempo real para mejorar rendimiento y claridad.",
        ],
      },
      {
        title: "App de Podcasts y Radio",
        description: "Aplicación móvil para descubrir y reproducir podcasts y emisoras locales mediante geolocalización. Desarrollada con <strong>Vue 3 (Options API)</strong> e <strong>Ionic</strong>, integra reproductor en segundo plano, mapas y autenticación social con <strong>Firebase</strong> (Apple/Google).",
        bullets: [
          "Configuración de <strong>Firebase</strong> y logins sociales (Apple y Google) para autenticación sin usuario/contraseña.",
          "Implementación de reproductor de audio en segundo plano con controles desde notificaciones y lock screen; migración a librería activa por deprecación de la anterior.",
          "Integración de <strong>mapa</strong> con búsqueda geolocalizada de podcasts; actualización dinámica de marcadores al desplazar el mapa y búsqueda por zona.",
          "Mejoras de navegación y UX: slidebar, control de 'volver atrás' y manejo consistente del estado de reproducción entre vistas.",
          "Nuevas secciones: pistas, logros y favoritos; cambio completo de UI a tema oscuro (re-diseño visual del app).",
          "Refactorización del código heredado: modularización, limpieza y optimizaciones de rendimiento.",
        ],
      },
      {
        title: "Landing App Fútbol",
        description: "Landing desarrollada con <strong>Astro</strong> y <strong>Tailwind CSS</strong> para presentar la aplicación de fútbol; foco en performance, SEO y captación de usuarios.",
        bullets: [
          "Desarrollo con componentes reutilizables en <strong>Astro</strong> y estilos con <strong>Tailwind</strong>.",
          "Optimización para SEO y tiempos de carga; integración con formularios de captura y tracking de eventos.",
          "Implementación de microinteracciones y pruebas A/B para mejorar conversiones.",
        ],
      },
      {
        title: "Web equipo de Rugby",
        description: "Web institucional desarrollada en <strong>WordPress</strong> con personalizaciones y módulos a medida para el equipo.",
        bullets: [
          "Diseño y desarrollo con <strong>WordPress</strong> y custom post types para jugadores y partidos.",
          "Integración con feeds de resultados y calendario de eventos.",
          "Optimización para móviles y soporte básico de multilanguage.",
        ],
      },
      {
        title: "Mantenimiento App Fútbol",
        bullets: [
          "Corrección de errores críticos y optimización de memoria y consumo.",
          "Gestión de releases y pipelines de CI/CD (tests, build y despliegues).",
          "Refactorización de módulos para facilitar nuevas integraciones y mejoras.",
          "Implementación de diseño responsive.",
        ],
      }
    ],
  },
];

export default timeline;
