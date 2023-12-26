# Nowted - Note Taking App

A note taking application with CRUD, authentication & authorization features.

<!-- [Watch Demo](https://youtu.be/Tmncayg7FeU)

![UI-community](https://raw.githubusercontent.com/nz-m/SocialEcho/main/resources/UI-community.png) -->

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documents](#documents)

## Project Overview

The project is a note-taking application built using Typescript, React.js, Styled Components, Express.js, Postgres for database, and Redis for session. It incorporates two major features: CRUD note and authentication.

## Features

- CRUD (Create, Read, Update, & Delete) note
- Authentication & Authorization

## Technologies

- React.js
- Node.js
- Redux
- Typescript
- Styled Components
- Webpack
- Axios
- Express.js
- Postgres
- Sequelize
- Redis
- JWT Authentication
- Bcrypt
- Umzug
- Nginx
- Docker

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- Docker

### Installation

1. Clone the repository

```bash
git clone https://github.com/danggro/nowted.git
```

2. Go to the project directory and install dependencies for both the frontend and backend

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

3. Build docker image & start application for development

```bash
cd ./frontend
npm install
```

```bash
cd ./backend
npm install
```

> **Note** In development there must intall the dependencies cause docker container attached with volumes in folder frontend & backend

```bash
docker compose -f docker-compose.dev.yml build
docker compose -f docker-compose.dev.yml up
```

4. Build docker image & start application for production

```bash
docker compose build
docker compose up
```

## Usage

### Create New Account

The signup page can be accesses at the /signup route. Fill all input form (username, email, password) with valid value. If success page will navigated to login page

### Login

After user registered in to database, we can login with that username.

### CRUD

#### Create New Note

Click New Note on the left top of the page to show input form. Fill title, date, & content input with valid value then wait 5 second to be saved.

#### Read Note

Click note list on the left page to read your note.

#### Update Note

After specific note is show up it can be changed by click input, change the value, then wait 5 second to be saved.

#### Delete Note

Delete specific note with click 3 dot on the right top of the page and then click delete.

## Documents

### PRD ( Product Requirements Document )

- link

### Technical Design

- Deployment Diagram (link)
- ERD ( Entity Relationships Diagram ) (link)

### API Specification

- link
