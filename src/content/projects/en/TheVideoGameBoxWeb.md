---
title: TheVideoGameBoxWeb
description: The VideoGameBox Web is a web application designed to manage and organize large collections of video games, allowing users to obtain detailed information and manage their games efficiently through a platform accessible from any browser.
img: thevideogameboxweb.png
tags: ["html", "css", "express", "python", "mongoose", "mongodb", "IGDB", "code"]
repoUrl: "https://github.com/CGLMaster/PaginaWeb_Videojuegos"
demoUrl: "https://youtu.be/7s0T1A_z7iM?si=dsFFAJ87Ra3KUPpA"
inDevelopment: true
anim: 'fade-up'
priority: 5
language: 'en'
---

# The VideoGameBox Web

**The VideoGameBox Web** is a web application created for those who wish to manage, organize, and obtain information about video games in a simple, efficient, and accessible way. This project aims to provide users with an easy-to-use platform from any browser, allowing them to search for, view, and organize the video games in their collections. It is an extension and adaptation of the desktop application **[The VideoGameBox](https://github.com/CGLMaster/TheVideoGameBox)**, but now in a web environment, taking advantage of more accessible and universal technologies.

## Information

**The VideoGameBox Web** retrieves video game data from the powerful **[IGDB API](https://api-docs.igdb.com/#examples)** (Internet Game Database), which offers information on almost any available video game. Using **Python**, the team extracted game data and stored it in **JSON** format in a **MongoDB** database. This database contains an impressive collection of **10,000 video games**, allowing for massive and rapid management of information.

For the web application, a modern technology stack was used that includes:

- **Node.js** for the backend, which facilitates the creation of a robust and scalable API.
- **Express.js** to manage routes and server logic.
- **Mongoose**, a tool that enables efficient work with **MongoDB** databases by using **schemas** to define collections and ensure data integrity.

In addition to the **MongoDB** database, the interface is built using common web development technologies such as **HTML**, **CSS**, and **JavaScript**, which ensures a smooth user experience accessible from any device.

The idea is to offer users the ability to **browse** and **organize** their online video game library, viewing details such as the game description, genre, release date, platforms, and more. As the project continues to progress, new functionalities will be integrated, such as the ability to **add games** to a custom collection and **filter** by various criteria.

### Current Features:
- Display of games with detailed information retrieved from the **IGDB API**.
- A user-friendly and simple interface to search for and organize video games.
- Data storage in a **MongoDB** database with over 10,000 games.
- Use of **Node.js** and **Express.js** for backend and API management.
- **Mongoose** for efficient database handling and schema modeling.

## How It Works

Although the application is **in development**, it currently allows users to view games retrieved from the database. Users can search by name, genre, or platform and obtain detailed information about each game. All information is automatically retrieved from the **IGDB API**, ensuring that the data is always up-to-date and accurate.

In the project's demonstration, you can see the game search process, the user interface, and how the information is clearly organized. If you wish to see how the application works, click on the following video to view the complete **demo**:

<p align="center">
  <a href="https://www.youtube.com/watch?v=7s0T1A_z7iM">
    <img src="https://img.youtube.com/vi/7s0T1A_z7iM/0.jpg" alt="Video Demo">
  </a>
</p>

## Owner

- **Carlos** Gómez López
