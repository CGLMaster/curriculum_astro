# Portfolio · Carlos Gómez López

Portfolio/CV web personal de **Carlos Gómez López**, Ingeniero de Software.
Sitio estático, bilingüe (ES/EN), con tema claro/oscuro, línea de tiempo animada
y una colección de proyectos.

🔗 **En producción:** https://dev-cgl-portfolio.onrender.com

## 🧱 Stack

- **[Astro 5](https://astro.build/)** (SSG) — generación estática y _islands_.
- **[Tailwind CSS](https://tailwindcss.com/)** — estilos utilitarios + `@tailwindcss/typography`.
- **i18n nativo de Astro** (`es` por defecto, `en` bajo `/en/`) + diccionarios JSON.
- **[iconify-icon](https://iconify.design/)** — iconos como web component.
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — sitemap automático.
- **TypeScript**, **ESLint** y **Prettier**.

## 📁 Estructura

```text
public/
  images/            # foto, favicon, imagen OG…
  projects/          # portadas de las tarjetas de proyecto
  pdf/               # CV
  robots.txt
src/
  components/
    cards/           # ProjectCard (destacados), Card (otros)
    elements/        # Navbar, Footer, LanguageSelector
    icons/           # Chevron
    seo/             # BaseHead (head + meta + SEO + JSON-LD)
    sections/        # Intro, AboutMe, TimeLine, Projects, OutstandingProjects, CTA, ByNumber…
    shared/          # Button, Container, Title, Paragraph, ProjectModal…
    HomePage.astro   # composición de la home (compartida por / y /en/)
  content/
    config.ts        # esquema de la colección "projects"
    projects/{es,en}/*.md   # un .md por proyecto e idioma
    timeline/{es,en}.ts     # datos de la trayectoria
  i18n/
    {es,en}.json     # textos de la interfaz
    index.ts         # getI18n(): único accesor de traducciones
    ui.ts            # idiomas disponibles
  icons/iconsMapping.ts     # tag -> icono (skill-icons / logos)
  layouts/           # Layout (home) y ProjectLayout (detalle de proyecto)
  pages/             # / , /en/ , /project/[id] , /en/project/[id]
  styles/global.css  # variables de color (claro/oscuro), scrollbar, reduced-motion
```

## 🧞 Scripts

| Comando             | Acción                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm run dev`       | Servidor de desarrollo en `localhost:4321`               |
| `npm run build`     | Build de producción en `./dist/`                         |
| `npm run preview`   | Sirve el build localmente                                |
| `npm run check`     | Comprobación de tipos (`astro check`)                    |
| `npm run lint`      | ESLint                                                   |
| `npm run format`    | Formatea con Prettier                                    |
| **`npm run verify`**| **`check` + `lint` + `build`** (pasarela de calidad)     |

## 🌍 Internacionalización

El idioma por defecto es **español** (sin prefijo); el inglés vive bajo `/en/`.
Los textos de la interfaz están en `src/i18n/{es,en}.json` y se leen con
`getI18n({ currentLocale })`. El selector de idioma conserva la página actual al
cambiar de idioma.

## ➕ Añadir un proyecto

1. Crea la imagen de portada en `public/projects/<nombre>.png` (apaisada; se
   recorta con `object-cover`).
2. Crea el contenido en **ambos idiomas**:
   `src/content/projects/es/<Nombre>.md` y `src/content/projects/en/<Nombre>.md`.
   Frontmatter (ver `src/content/config.ts`):

   ```yaml
   ---
   title: "Mi Proyecto"
   description: "Resumen breve para la tarjeta."
   img: nombre.png
   tags: ["astro", "ts"] # deben existir en src/icons/iconsMapping.ts
   demoUrl: "https://..." # opcional
   repoUrl: "https://..." # opcional
   inDevelopment: false # opcional, muestra la etiqueta DEV
   priority: 1 # las 3 menores se muestran como destacados
   language: "es" # o "en", debe coincidir con la carpeta
   ---
   ```

3. Si usas una tecnología nueva en `tags`, añade su icono en
   `src/icons/iconsMapping.ts`.

## 🚀 Despliegue

Sitio estático desplegado en **Render**. `npm run build` genera `./dist/`; el
`site` configurado en `astro.config.mjs` alimenta el `sitemap` y las URLs
canónicas/`hreflang`.
