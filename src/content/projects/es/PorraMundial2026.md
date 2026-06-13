---
title: Porra Mundial 2026
description: 'Aplicación web de quiniela del Mundial 2026 para grupos de amigos: pronósticos por partido, puntuación automática al finalizar cada encuentro, simulador de torneo y clasificación en vivo.'
img: porramundial.png
tags: ["astro", "preact", "ts", "sass", "fastify", "postgresql", "vercel"]
demoUrl: "https://porra-mundial-2026-web.vercel.app/"
anim: 'fade-up'
priority: 5
language: 'es'
---

## ⚽ Sobre el proyecto

**Porra Mundial 2026** es una aplicación web privada para seguir el Mundial 2026 en grupo. Cada participante pronostica los resultados de los partidos y la aplicación los puntúa **automáticamente** en cuanto cada encuentro finaliza, sin intervención manual.

## ✨ Características

- 🔮 **Pronósticos por partido**, con cierre automático 10 minutos antes del saque.
- 🏆 **Puntuación automática**: los resultados se confirman solos al terminar el partido a partir de datos en directo.
- 📊 **Clasificación en vivo** del grupo.
- 🎮 **Simulador de torneo** paralelo con bracket de eliminatorias.
- ⭐ **Estelares**: apuestas a campeón, MVP y máximo goleador.

## 🛠️ Tecnologías

- **Frontend:** **Astro 5** con islas de **Preact** y estilos en **SCSS**.
- **Backend:** API en **Fastify** + **TypeScript**.
- **Base de datos:** **PostgreSQL** (Neon) con migraciones versionadas.
- **Validación:** esquemas con **Zod** compartidos entre cliente y servidor.
- **Datos en directo:** integración con fuentes públicas de resultados para confirmar marcadores sin retardo.
- **Despliegue:** web en **Vercel** y API en Render, con sincronización periódica mediante cron.

## 🧠 Arquitectura

Monorepo con frontend, API y paquetes compartidos (tipos, esquemas y lógica de simulación). Compartir la validación y los tipos de punta a punta mantiene el proyecto coherente y escalable.

## 👤 Mi rol

Diseño y desarrollo completo (frontend, API, base de datos e integración de datos en tiempo real), priorizando una puntuación fiable y automática y una experiencia ágil para todo el grupo.
