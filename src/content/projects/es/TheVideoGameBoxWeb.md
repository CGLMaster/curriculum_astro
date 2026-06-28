---
title: TheVideoGameBoxWeb
description: "The VideoGameBox Web es un catálogo web de videojuegos construido sobre los datos abiertos de IGDB: permite explorar más de 10.000 juegos con búsqueda, filtros, fichas detalladas y rankings ponderados, en una interfaz bilingüe (español / inglés)."
img: thevideogameboxweb.png
tags: ["astro", "preact", "ts", "tailwindcss", "mongodb", "IGDB", "vercel", "code"]
repoUrl: "https://github.com/CGLMaster/PaginaWeb_Videojuegos"
demoUrl: "https://pagina-web-videojuegos.vercel.app"
anim: 'fade-up'
priority: 7
language: 'es'
---

<img src="/projects/thevideogameboxweb_logo.png" alt="The Video Game Box logo" width="160" style="display: block; margin: 0 auto 1.5rem; image-rendering: pixelated;">

# The VideoGameBox Web

**The VideoGameBox Web** es un catálogo web de videojuegos construido sobre los datos abiertos de **[IGDB](https://www.igdb.com)** (Internet Game Database). Permite explorar más de **10.000 juegos** con búsqueda, filtros, fichas detalladas y rankings ponderados, todo en una interfaz **bilingüe** (español / inglés), rápida y accesible desde cualquier navegador. Es la evolución —reescrita por completo— de la versión anterior y una adaptación web de la aplicación de escritorio **[The VideoGameBox](https://github.com/CGLMaster/TheVideoGameBox)**.

## Qué ofrece

- 🔎 Búsqueda y filtrado del catálogo por nombre, género, plataforma y más.
- 🎮 Fichas detalladas de cada juego con descripción, puntuación, año, género y plataformas.
- 🏆 **Rankings ponderados**: una nota bayesiana (estilo IMDb) que combina la valoración de la crítica y de la comunidad según su número de votos.
- 🌐 Interfaz **bilingüe** (ES/EN), con un diseño *dark-first*, responsive y accesible.

## Stack

- **Astro 5** (SSR) con islas de **Preact** para la parte interactiva.
- **TypeScript** en todo el código y **Tailwind CSS v4** para el diseño.
- **MongoDB** (driver nativo) como base de datos, con más de 10.000 juegos.
- Despliegue en **Vercel** + **MongoDB Atlas**, con **Vitest**, **ESLint** y **Prettier** para la calidad del código.

## Datos siempre al día

Los datos provienen de la **IGDB API**. Un script de ingesta obtiene los juegos nuevos o actualizados y hace *upsert* en MongoDB; el proceso se automatiza con **GitHub Actions** (~cada 15 días) y recalcula los rankings sobre toda la base tras cada actualización.

## Propietario

- **Carlos** Gómez López
