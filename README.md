# Frontend - React + TypeScript App
This is the frontend implementation of the project based on the provided Figma design. The application is built using **React with TypeScript**, and includes modern libraries such as **Zod**, **React Hook Form**, and **React Query** for schema validation, form handling, and data fetching respectively.
---
## 🔧 Tech Stack

- **React** with **TypeScript**
   npm create vite@latest folder
- **React Hook Form** - Form handling
  useState,useNavigate
- **Zod** - Schema validation
   npm i zod
- **Axios** - API calls
   npm i axios
- **React-roter-dom**- Routing pages
   npm i react-router-dom
## 📁 Project Structure
Frontend/
│
├── nodemodules/
├── src/
│   │ ── Components/  
│   │    │──Login.tsx
│   │    └──Success.tsx   
│   │── App.tsx          # Routes for the project
│   └───main.tsx 
│    
├── index.html
├── package.json
└── vite.config.js


-How to run frontend
 cd frontend folder
 npm install
 npm run dev
 

### 🛠️ Backend - README.md

# Backend - Node.js + Javascript + Prisma

This is the backend server for the project. It includes user authentication functionality, built using **Node.js**, **JavaScript**, and **Prisma** for database handling.



## 🔧 Tech Stack

- **Node.js** with **JavaScript**
- **Express.js** - Web framework
- **Prisma** - ORM and schema management
- **Monogodb** 

---

## 📁 Project Structure
backend/
│
├── prisma/
│   └── schema.prisma         # Prisma schema file
├── methods/
│   ├───  createUser.js
│   └───  createUser.js       # optional
├── routes/
│   └─login.routes.js         # Express route for user
├── server.js 
└── package.json

## 🧪 Prisma Schema
 -INtintializing prisma
  npx prisma init
 -Run it every time you update your Prisma schema, 
  npx prisma generate
 -Using Prisma Client
  npm install @prisma/client
 
The Prisma model for `User`:
prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  password String
}
Extra dependencies 
-express server
 npm i express --save
-bcryptjs- for hashing password
 npm i bcryptjs
-How to start the backend
 cd backend-folder
 npm install
 npm start
