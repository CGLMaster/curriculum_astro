---
title: Madrid Play & Move
description: 'Mobile app to discover sports facilities in Madrid —the «Google Maps» of street sport—: interactive map, filters by sport, favourites, ratings and community contributions.'
img: madridplaymove.jpg
tags: ["vue", "ionic", "capacitor", "ts", "nestjs", "prisma", "postgresql", "firebase"]
anim: 'fade-up'
priority: 1
language: 'en'
---

<img src="/projects/madridplaymove_logo.png" alt="Madrid Play & Move logo" width="40%" style="display: block; margin: 0 auto 1.5rem; max-width: 320px;">

**Madrid Play & Move** is a mobile-first app to discover sports facilities in Madrid, focused on the informal, street courts that conventional maps don't catalogue well. A "Google Maps of sport" designed to scale to other cities.

## ✨ Features

- 🗺️ **Interactive map** with marker clustering.
- 🎚️ **Filters** by sport and by distance.
- 📌 **Per-venue detail** with photos, reviews and ratings.
- 💾 **Saved** (favourites) and community-submitted new courts.
- 🔐 **Sign-in** with Google and Apple.
- 🌗 **Light/dark** theme and internationalization (ES/EN).

## 🛠️ Tech stack

- **Frontend:** **Vue 3** + **Ionic** + **Capacitor** (a single codebase for Web, Android and iOS), with **Pinia** and **TypeScript**.
- **Maps:** **MapLibre** with free tiles and WebGL performance.
- **Backend:** **NestJS** + **Prisma** over **PostgreSQL/PostGIS**, with geospatial queries for "near me".
- **Authentication:** **Firebase** (Google / Apple).

## 👤 My role

Frontend and API development, a token-based design system, map and geolocation, and the mobile build setup with Capacitor.

## 🚀 Status

At an advanced stage, running as a web app and with the Android build ready; pending publication on Google Play.
