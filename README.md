# FurFind - Pet Adoption Platform

A full-stack web application designed to facilitate animal adoptions, connecting pets in need with potential adopters.

## Overview

FurFind is a platform where users can freely post adoption listings, create accounts, and manage their announcements. Built to raise awareness about animal adoption and streamline the adoption process.

## Features

- User authentication (register/login)
- Post adoption listings with images
- Browse available pets
- Search and filter functionality
- Responsive design
- Secure file upload

## Tech Stack

### Frontend
- React 18
- Vite
- React Router
- React Bootstrap
- Axios
- SASS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Passport.js (authentication)
- Bcrypt (password hashing)
- Multer (file uploads)
- Helmet (security)
- CORS

## Getting Started
```bash
# Clone the repository
git clone https://github.com/develhope/FS26-Team1-Project3.git

# Install dependencies
npm install

# Set up environment variables
# Create a .env file with:
# MONGO_URI=your_mongodb_connection_string
# SESSION_SECRET=your_session_secret

# Start the backend server
npm run devStart

# Start the frontend development server (in another terminal)
npm run dev

# Frontend runs on http://localhost:5173
# Backend runs on http://localhost:3000
```

## API Endpoints

- `POST /iscriviti` - User registration
- `POST /login` - User authentication
- `POST /upload` - Upload pet for adoption
- `GET /pets` - Get all pets

## Team

Developed collaboratively during Develhope Bootcamp.

## License

This project is for educational purposes.
