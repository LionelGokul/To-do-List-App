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
<<<<<<< HEAD
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
>>>>>>> todo-backend/master
```
