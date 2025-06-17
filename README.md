# Web Page Collection

A collection of responsive web pages including Ideas, AI, Feedback, and Connect sections with dynamic content loading.

## Features

- Four distinct page sections with unique designs
- Dynamic content loading via JavaScript
- Responsive design
- SCSS for advanced styling
- Docker containerization
- Nginx web server

## Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/)
- [Sass](https://sass-lang.com/install)

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/IT22051448/E25_Assignment.git
cd IT22051448/E25_Assignment.git
```

### 2. Compile SCSS (Optional)

If you need to modify the SCSS files:

```bash
sass src/scss/styles.scss src/css/styles.css
```

### 3. Open Docker Desktop

Ensure Docker Desktop is open

### 4. Run Application

```bash
docker-compose up --build
```

### 5. Visit Application

Application should be running on http://localhost:3000

## Deployment

### 1. Build optimized Docker image:

```bash
docker build -t web-pages-prod .
```

### 2. Run with production settings:

```bash
docker run -d -p 80:80 --name web-pages web-pages-prod
```
