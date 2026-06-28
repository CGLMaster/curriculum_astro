---
title: TheVideoGameBoxWeb
description: "The VideoGameBox Web is a web catalog of video games built on IGDB's open data: it lets you explore over 10,000 games with search, filters, detailed sheets and weighted rankings, in a bilingual (Spanish / English) interface."
img: thevideogameboxweb.png
tags: ["astro", "preact", "ts", "tailwindcss", "mongodb", "IGDB", "vercel", "code"]
repoUrl: "https://github.com/CGLMaster/PaginaWeb_Videojuegos"
demoUrl: "https://pagina-web-videojuegos.vercel.app"
anim: 'fade-up'
priority: 7
language: 'en'
---

<img src="/projects/thevideogameboxweb_logo.png" alt="The Video Game Box logo" width="160" style="display: block; margin: 0 auto 1.5rem; image-rendering: pixelated;">

# The VideoGameBox Web

**The VideoGameBox Web** is a web catalog of video games built on the open data of **[IGDB](https://www.igdb.com)** (Internet Game Database). It lets you explore over **10,000 games** with search, filters, detailed game sheets and weighted rankings, all in a **bilingual** (Spanish / English) interface that is fast and accessible from any browser. It is the fully rewritten evolution of the previous version and a web adaptation of the desktop application **[The VideoGameBox](https://github.com/CGLMaster/TheVideoGameBox)**.

## What it offers

- 🔎 Search and filter the catalog by name, genre, platform and more.
- 🎮 Detailed sheets for each game with description, score, year, genre and platforms.
- 🏆 **Weighted rankings**: a Bayesian score (IMDb-style) that combines critic and community ratings according to their number of votes.
- 🌐 **Bilingual** interface (ES/EN), with a dark-first, responsive and accessible design.

## Stack

- **Astro 5** (SSR) with **Preact** islands for the interactive parts.
- **TypeScript** throughout the codebase and **Tailwind CSS v4** for the design.
- **MongoDB** (native driver) as the database, holding over 10,000 games.
- Deployed on **Vercel** + **MongoDB Atlas**, with **Vitest**, **ESLint** and **Prettier** for code quality.

## Always up to date

The data comes from the **IGDB API**. An ingestion script fetches new or updated games and _upserts_ them into MongoDB; the process is automated with **GitHub Actions** (~every 15 days) and recomputes the rankings across the whole database after each update.

## Owner

- **Carlos** Gómez López
