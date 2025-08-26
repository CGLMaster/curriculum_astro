---
title: Riffster
description: A modern web application that leverages the Spotify API to deliver an enhanced music experience, allowing users to explore and play music with premium features and an intuitive interface.
img: riffster_preview.png
tags: ["astro", "react", "tailwindcss", "Spotify API", "ts", "code"]
repoUrl: "https://github.com/CGLMaster/Riffster"
demoUrl: "https://youtu.be/2kbbo3K7GUk"
anim: 'fade-up'
priority: 2
language: 'en'
---

# 🎵 Riffster

<img src="/projects/riffster_logo.png" alt="Riffster Logo" width="50%" style="display: block; margin: auto; max-width: 400px;">

Riffster is a web music application built on top of the [Spotify Developer API](https://developer.spotify.com/documentation/web-api), allowing users to enjoy their favorite music with a modern and fluid interface.

## 🚀 Features

### For all users
- 🔍 Advanced search for songs, artists, albums, and playlists
- 📱 Modern responsive interface
- 📑 Detailed view of playlists and albums
- 👥 Artist profile exploration
- 🎨 Minimalist and elegant design

### For Spotify Premium users
- ▶️ Complete music player
- 🔊 Full volume control
- � Playback controls (next, previous, repeat)
- 🎲 Shuffle mode
- 📱 Device synchronization

## 🛠️ Technologies Used

- **[Astro](https://astro.build/)**: Main framework that offers exceptional performance through its island architecture
- **React**: For dynamic components and state management
- **Tailwind CSS**: For design and styling
- **Spotify Web Playback SDK**: For player functionality
- **Axios**: For HTTP requests

## ⚙️ Technical Features

- 🔄 Automatic token refresh system
- 🎮 Complete integration with Spotify SDK
- 🔐 Secure authentication handling
- 📦 Centralized service architecture
- 🌐 Dynamic routing
- 🎯 Performance optimization

## 🎯 Project Status

Currently in beta phase, with the following planned features:
- ❤️ "Like" system for songs
- 📊 Enhanced visual feedback
- ⚡ Performance optimizations
- 🔧 Improvements in player state management between pages
- 📱 Accessibility improvements

## 💡 Motivation

This project emerged from curiosity to explore new APIs and, especially, from the opportunity to experiment with the API of an application I use daily. Spotify offers incredible freedom for developers through its API, which motivated me to create something of my own while learning. I chose Astro for its innovative approach to modern web development, although I faced interesting challenges, especially in handling the player state between navigations due to the dynamic nature of the application.

## 🔧 Installation and Setup

### Spotify API Configuration

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Create a new application:
   - Click on "Create App"
   - Fill out the form with:
     - Application name
     - Description
     - Redirect URL (example: `http://localhost:4321` for development)
4. Once created, access the app settings to obtain:
   - Client ID
   - Client Secret
   - Configure allowed URLs in "Redirect URIs"
   - Indicate in User Management if you want to give another Spotify account access to the API

### Project Installation

1. Clone the repository
```bash
git clone https://github.com/CGLMaster/Riffster.git
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the project root and add your Spotify credentials:
```env
PUBLIC_SPOTIFY_CLIENT_ID=your_dashboard_client_id
PUBLIC_SPOTIFY_CLIENT_SECRET=your_dashboard_client_secret
```

4. Start the development server
```bash
npm run dev
```

*Note: Make sure to never share or commit your Spotify tokens. The `.env` file is included in `.gitignore` for security.*

## 🤝 Contributions

Do you have ideas to improve Riffster? Contributions are welcome. Please open an [issue](https://github.com/CGLMaster/Riffster/issues) or submit a [pull request](https://github.com/CGLMaster/Riffster/pulls) on GitHub to discuss the changes you'd like to make.

---

*Note: This project is not officially affiliated with Spotify. It is a personal project created for educational and learning purposes.*
