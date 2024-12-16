# **Todo List App Backend**

**Overview**

This is the backend server for the **Todo List App**. It is built using **Express.js**, **TypeScript**, and **Prisma** with **MySQL** as the database. It provides RESTful APIs to manage tasks and uses **Express Validator** for input validation.

---

**Tech Stack**

- **Backend Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Prisma
- **Database**: MySQL
- **Validation**: Express Validator
- **Environment Variables**: `.env` file for configuration

---

**Features**

1. **Task Management**:
   - Create, read, update, and delete tasks.
   - Mark tasks as **Completed/Not Completed**.
2. **Input Validation**:
   - Use **Express Validator** to validate and sanitize request data.
3. **Database Management**:
   - MySQL with Prisma for schema management and queries.
4. **Modular Architecture**:
   - Clean separation of concerns for **Controller**, **Service**, **Repository**, and **Routes**.

---

**Folder Structure**

```plaintext
TODO-BACKEND/
├── modules/ # define module in this folder
│   └── tasks/ # task modules
│       ├── task.controller.ts  # Handles API request logic for tasks
│       ├── task.repository.ts  # Database queries (Prisma interactions)
│       ├── task.routes.ts      # Task API routes
│       └── task.service.ts     # Business logic for tasks
│
├── node_modules/           # Project dependencies
├── prisma/
│   ├── migrations/         # Database migration files
│   ├── db.ts               # Prisma client instance
│   └── schema.prisma       # Prisma schema
│
├── types/                  # Defgine TypeScript types and interfaces
├── utils/                  # Utility/helper functions
├── middlewares/            # Express Validator middlewares
├── .env                    # Environment variables
├── .gitignore              # Files to exclude from version control
├── app.ts                  # Main application entry point
├── package.json            # Project metadata and dependencies
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

---

**Validation**

The **Express Validator** middleware is used to validate incoming request data. The following validations are applied:

---

**Setup Instructions**

1. **Clone the Repository**

```bash
git clone https://github.com/LionelGokul/todo-backend.git
cd todo-backend
```

2. **Install Dependencies**

```bash
npm install
# or
yarn install
```

3. **Set Up Environment Variables**

Create a `.env` file at the root with:

```env
DATABASE_URL=YOUR_DB_URL
PORT=5000
```

---

4. **Database Setup**

Run Prisma commands to initialize and apply database migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

---

5. **Run the Server**

```bash
npm run dev
# or
yarn dev
```

Access the API at:

```
http://localhost:5000
```

---

**Future Enhancements**

1. **Error Logging and Alerts**:

   - Log errors using a library like Winston or Morgan.
   - Send email alerts for high-priority errors using Nodemailer.

2. **Caching**:
   - Implement caching for GET endpoints (/tasks) to improve response time.

---
