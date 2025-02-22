---
title: TheVideoGameBoxWeb
description: The VideoGameBox Web es una aplicación web diseñada para gestionar y organizar grandes colecciones de videojuegos, permitiendo a los usuarios obtener información detallada y administrar sus juegos de manera eficiente a través de una plataforma accesible desde cualquier navegador.
img: thevideogameboxweb.png
tags: ["html", "css", "express", "python", "mongoose", "mongodb", "IGDB", "code"]
repoUrl: "https://github.com/CGLMaster/PaginaWeb_Videojuegos"
demoUrl: "https://youtu.be/7s0T1A_z7iM?si=dsFFAJ87Ra3KUPpA"
inDevelopment: true
anim: 'fade-up'
priority: 5
language: 'es'
---

# The VideoGameBox Web

**The VideoGameBox Web** es una aplicación web creada para aquellos que desean gestionar, organizar y obtener información sobre videojuegos de forma sencilla, eficiente y accesible. Este proyecto tiene como objetivo proporcionar a los usuarios una plataforma fácil de usar desde cualquier navegador, permitiéndoles buscar, ver y organizar videojuegos de sus colecciones. Es una extensión y adaptación de la aplicación de escritorio **[The VideoGameBox](https://github.com/CGLMaster/TheVideoGameBox)**, pero ahora en un entorno web, aprovechando tecnologías más accesibles y universales.

## Información

La **The VideoGameBox Web** toma los datos de los videojuegos de la poderosa **[IGDB API](https://api-docs.igdb.com/#examples)** (Internet Game Database), que ofrece información sobre casi cualquier videojuego disponible. Mediante el uso de **Python**, el equipo extrajo los datos de los juegos y los almacenó en formato **JSON** en una base de datos **MongoDB**. Esta base de datos contiene una impresionante colección de **10,000 videojuegos**, lo que permite una gestión masiva y rápida de la información.

Para la aplicación web, se utilizó un stack de tecnologías modernas que incluye:

- **Node.js** para el backend, que facilita la creación de una API robusta y escalable.
- **Express.js** para gestionar las rutas y la lógica del servidor.
- **Mongoose**, una herramienta que permite trabajar con bases de datos **MongoDB** de manera eficiente, utilizando **esquemas** para definir las colecciones y garantizar la integridad de los datos.

Además de la **base de datos** MongoDB, la interfaz está construida utilizando tecnologías comunes de desarrollo web como **HTML**, **CSS** y **JavaScript**, lo que permite una experiencia de usuario fluida y accesible desde cualquier dispositivo.

La idea es ofrecer a los usuarios la capacidad de **consultar** y **organizar** su biblioteca de videojuegos en línea, visualizando detalles como la descripción del juego, género, fecha de lanzamiento, plataformas y más. A medida que el proyecto sigue avanzando, se integrarán nuevas funcionalidades como la capacidad de **añadir juegos** a una colección personalizada y **filtrar** por diferentes criterios.

### Características actuales:
- Visualización de juegos con información detallada extraída desde **IGDB API**.
- Interfaz amigable y sencilla para buscar y organizar videojuegos.
- Almacenamiento de datos en una base de datos **MongoDB** con más de 10,000 juegos.
- Utilización de **Node.js** y **Express.js** para la gestión del backend y la API.
- **Mongoose** para el manejo eficiente de la base de datos y el modelado de esquemas.

## Cómo funciona

Aunque la aplicación está **en desarrollo**, actualmente permite visualizar los juegos extraídos de la base de datos. Los usuarios pueden buscar por nombre, género o plataforma, y obtener información detallada sobre cada juego. Toda la información es extraída automáticamente de la **IGDB API**, lo que garantiza que los datos estén siempre actualizados y sean precisos.

En la demostración del proyecto, se puede ver el proceso de búsqueda de juegos, la interfaz de usuario y cómo la información se organiza de forma clara. Si deseas ver el funcionamiento de la aplicación, puedes hacer clic en el siguiente video para ver la **demo** completa:

<p align="center">
  <a href="https://www.youtube.com/watch?v=7s0T1A_z7iM">
    <img src="https://img.youtube.com/vi/7s0T1A_z7iM/0.jpg" alt="Video Demo">
  </a>
</p>

## Propietario

- **Carlos Gómez López**

