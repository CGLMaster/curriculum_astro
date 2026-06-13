---
title: Porra Mundial 2026
description: 'Web app for a 2026 World Cup prediction pool with friends: per-match predictions, automatic scoring as soon as each game ends, a tournament simulator and a live leaderboard.'
img: porramundial.png
tags: ["astro", "preact", "ts", "sass", "fastify", "postgresql", "vercel"]
demoUrl: "https://porra-mundial-2026-web.vercel.app/"
anim: 'fade-up'
priority: 5
language: 'en'
---

## ⚽ About the project

**Porra Mundial 2026** is a private web app to follow the 2026 World Cup with a group of friends. Each participant predicts match results and the app scores them **automatically** as soon as each game ends, with no manual work.

## ✨ Features

- 🔮 **Per-match predictions**, automatically locked 10 minutes before kickoff.
- 🏆 **Automatic scoring**: results are confirmed on their own when the match ends, from live data.
- 📊 **Live group leaderboard**.
- 🎮 Parallel **tournament simulator** with a knockout bracket.
- ⭐ **Outright bets**: champion, MVP and top scorer.

## 🛠️ Tech stack

- **Frontend:** **Astro 5** with **Preact** islands and **SCSS** styles.
- **Backend:** **Fastify** + **TypeScript** API.
- **Database:** **PostgreSQL** (Neon) with versioned migrations.
- **Validation:** **Zod** schemas shared between client and server.
- **Live data:** integration with public score sources to confirm results without delay.
- **Deployment:** web on **Vercel** and API on Render, with periodic sync via cron.

## 🧠 Architecture

Monorepo with frontend, API and shared packages (types, schemas and simulation logic). Sharing validation and types end-to-end keeps the project consistent and scalable.

## 👤 My role

Full design and development (frontend, API, database and real-time data integration), focused on reliable automatic scoring and a smooth experience for the whole group.
