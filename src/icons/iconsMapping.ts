export const iconsMapping: Record<
    string,
    { light: string; dark: string; alt: string }
> = {
    "React-Native": {
        light: "skill-icons:react-light",
        dark: "skill-icons:react-dark",
        alt: "React-Native",
    },
    "Spotify API":{
        light: "logos:spotify-icon",
        dark: "logos:spotify-icon",
        alt: "Spotify API",
    },
    react: {
        light: "skill-icons:react-light",
        dark: "skill-icons:react-dark",
        alt: "React",
    },
    node: {
        light: "skill-icons:nodejs-light",
        dark: "skill-icons:nodejs-dark",
        alt: "NodeJS",
    },
    aws: {
        light: "skill-icons:aws-light",
        dark: "skill-icons:aws-dark",
        alt: "AWS",
    },
    js: {
        light: "skill-icons:javascript",
        dark: "skill-icons:javascript",
        alt: "JavaScript",
    },
    docker: {
        light: "skill-icons:docker",
        dark: "skill-icons:docker",
        alt: "Docker",
    },
    alexa: {
        light: "cbi:alexa-logo",
        dark: "cbi:alexa-logo",
        alt: "Alexa",
    },
    electron: {
        light: "skill-icons:electron",
        dark: "skill-icons:electron",
        alt: "Electron",
    },
    eclipse: {
        light: "skill-icons:eclipse-light",
        dark: "skill-icons:eclipse-dark",
        alt: "Eclipse",
    },
    python: {
        light: "skill-icons:python-light",
        dark: "skill-icons:python-dark",
        alt: "Python",
    },
    mongodb: {
        light: "skill-icons:mongodb",
        dark: "skill-icons:mongodb",
        alt: "MongoDB",
    },
    mongoose: {
        light: "devicon:mongoose",
        dark: "devicon:mongoose",
        alt: "Mongoose",
    },
    jira: {
        light: "logos:jira",
        dark: "logos:jira",
        alt: "Jira",
    },
    java: {
        light: "skill-icons:java-light",
        dark: "skill-icons:java-dark",
        alt: "Java",
    },
    IGDB: {
        light: "simple-icons:igdb",
        dark: "simple-icons:igdb",
        alt: "IGDB API",
    },
    code: {
        light: "skill-icons:vscode-light",
        dark: "skill-icons:vscode-dark",
        alt: "Visual Studio Code",
    },
    sass: {
        light: "skill-icons:sass",
        dark: "skill-icons:sass",
        alt: "SASS",
    },
    html: {
        light: "skill-icons:html",
        dark: "skill-icons:html",
        alt: "HTML",
    },
    gimp: {
        light: "devicon:gimp",
        dark: "devicon-plain:gimp",
        alt: "GIMP",
    },
    express: {
        light: "skill-icons:expressjs-light",
        dark: "skill-icons:expressjs-dark",
        alt: "ExpressJS",
    },
    css: {
        light: "skill-icons:css",
        dark: "skill-icons:css",
        alt: "CSS",
    },
    astro: {
        light: "skill-icons:astro",
        dark: "skill-icons:astro",
        alt: "Astro",
    },
    tailwindcss: {
        light: "skill-icons:tailwindcss-light",
        dark: "skill-icons:tailwindcss-dark",
        alt: "TailwindCSS",
    },
    ts:{
        light: "skill-icons:typescript",
        dark: "skill-icons:typescript",
        alt: "TypeScript",
    },
    vue: {
        light: "skill-icons:vuejs-light",
        dark: "skill-icons:vuejs-dark",
        alt: "Vue.js",
    },
    ionic: {
        light: "logos:ionic-icon",
        dark: "logos:ionic-icon",
        alt: "Ionic",
    },
    capacitor: {
        light: "logos:capacitorjs-icon",
        dark: "logos:capacitorjs-icon",
        alt: "Capacitor",
    },
    nestjs: {
        light: "skill-icons:nestjs-light",
        dark: "skill-icons:nestjs-dark",
        alt: "NestJS",
    },
    prisma: {
        light: "skill-icons:prisma",
        dark: "skill-icons:prisma",
        alt: "Prisma",
    },
    postgresql: {
        light: "skill-icons:postgresql-light",
        dark: "skill-icons:postgresql-dark",
        alt: "PostgreSQL",
    },
    firebase: {
        light: "logos:firebase-icon",
        dark: "logos:firebase-icon",
        alt: "Firebase",
    },
    preact: {
        light: "logos:preact",
        dark: "logos:preact",
        alt: "Preact",
    },
    fastify: {
        light: "simple-icons:fastify",
        dark: "simple-icons:fastify",
        alt: "Fastify",
    },
    vercel: {
        light: "skill-icons:vercel-light",
        dark: "skill-icons:vercel-dark",
        alt: "Vercel",
    },
};

/** Icono de tecnología ya resuelto: imagen (logo en /public) o iconify (claro/oscuro). */
export type SkillIcon =
    | { type: "image"; src: string; alt: string }
    | { type: "icon"; light: string; dark: string; alt: string };

/** Convierte una lista de tags en iconos listos para renderizar. */
export function resolveSkills(tags: string[] = []): SkillIcon[] {
    return tags.map((tag) => {
        if (tag.toLowerCase() === "phaser") {
            return { type: "image", src: "/logos/phaser.png", alt: "Phaser" };
        }
        const found = iconsMapping[tag];
        if (found) return { type: "icon", ...found };
        return { type: "icon", light: tag, dark: tag, alt: tag };
    });
}