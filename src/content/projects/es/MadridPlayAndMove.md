---
title: Madrid Play & Move
description: 'App móvil para descubrir instalaciones deportivas en Madrid —el «Google Maps» del deporte de calle—: mapa interactivo, filtros por deporte, favoritos, valoraciones y aportes de la comunidad.'
img: madridplaymove.jpg
tags: ["vue", "ionic", "capacitor", "ts", "nestjs", "prisma", "postgresql", "firebase"]
anim: 'fade-up'
priority: 1
language: 'es'
---

<img src="/projects/madridplaymove_logo.png" alt="Logo de Madrid Play & Move" width="40%" style="display: block; margin: 0 auto 1.5rem; max-width: 320px;">

**Madrid Play & Move** es una app móvil (mobile-first) para descubrir instalaciones deportivas en Madrid, con foco en las pistas informales y de calle que los mapas convencionales no catalogan bien. Un «Google Maps del deporte» pensado para escalar a otras ciudades.

## ✨ Características

- 🗺️ **Mapa interactivo** con clustering de marcadores.
- 🎚️ **Filtros** por deporte y por distancia.
- 📌 **Detalle de cada pista** con fotos, reseñas y valoraciones.
- 💾 **Guardados** (favoritos) y aportación de nuevas canchas por parte de la comunidad.
- 🔐 **Acceso** con Google y Apple.
- 🌗 Tema **claro/oscuro** e internacionalización (ES/EN).

## 🛠️ Tecnologías

- **Frontend:** **Vue 3** + **Ionic** + **Capacitor** (una sola base de código para Web, Android e iOS), con **Pinia** y **TypeScript**.
- **Mapas:** **MapLibre** con tiles gratuitas y rendimiento WebGL.
- **Backend:** **NestJS** + **Prisma** sobre **PostgreSQL/PostGIS**, con consultas geoespaciales para el «cerca de mí».
- **Autenticación:** **Firebase** (Google / Apple).

## 👤 Mi rol

Desarrollo del frontend y de la API, sistema de diseño basado en tokens, mapa y geolocalización, y preparación del build móvil con Capacitor.

## 🚀 Estado

En fase avanzada, funcionando como aplicación web y con el build de Android listo; pendiente de publicación en Google Play.
