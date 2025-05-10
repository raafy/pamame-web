<h1 align="center">Welcome to pamame-web 👋</h1>
<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

> **Registration Management App for Pamame Glamping Event**
> A modern, full-stack web application for handling registration, administration, and event coordination for Pamame's glamping event.

---

## ✨ Features

* Secure admin login with JWT and hashed credentials
* User-friendly registration form with validations
* Admin dashboard with charts and statistics
* Email notifications using Nodemailer
* Under-construction mode toggle via environment variable
* Styled using MUI and TailwindCSS

---

## 🧰 Tech Stack

* **Frontend**: React, Next.js 14, TailwindCSS, MUI
* **Backend**: Node.js, Next.js API Routes, Prisma ORM
* **Database**: PostgreSQL (or other via Prisma)
* **Authentication**: JWT, bcrypt
* **Email**: Nodemailer
* **Monitoring**: Sentry

---

## 🔐 Environment Setup

Create a `.env` file in the root directory with the following variables:

| Variable                         | Purpose                                                        |
| -------------------------------- | -------------------------------------------------------------- |
| `MAIL_EMAIL`                     | Sender email address for notifications                         |
| `MAIL_PASS`                      | Password or app-specific password for email sending            |
| `JWT_SECRET`                     | Used to sign JWT tokens for authentication                     |
| `DATABASE_URL`                   | Prisma-compatible DB connection string                         |
| `ADMIN_USERNAME`                 | Admin login username                                           |
| `ADMIN_PASSWORD`                 | Admin login password                                           |
| `NEXT_PUBLIC_UNDER_CONSTRUCTION` | Toggle for frontend "Under Construction" mode (`true`/`false`) |

> ⚠️ **Do not commit your `.env` file.**

---

## 📦 Install Dependencies

```bash
npm install
```

Or with Yarn:

```bash
yarn install
```

---

## 🧪 Prisma & Database Setup

Make sure your `DATABASE_URL` is set in `.env`, then:

```bash
# Generate Prisma client
npm run prisma:init

# Run production-safe DB migrations
npm run prisma:migrate

# Seed database (optional)
npm run prisma:seed
```

---

## 🚀 Run the App

### Development

```bash
npm run dev
```

### Production Build & Start

```bash
npm run build && npm run start
```

> ℹ️ The `prebuild` script automatically sets up Prisma (init, migrate, seed) before building.

---

## 🧹 Available Scripts

| Script           | Description                          |
| ---------------- | ------------------------------------ |
| `dev`            | Start Next.js in development mode    |
| `build`          | Build the application                |
| `start`          | Start Next.js in production          |
| `lint`           | Run ESLint                           |
| `prisma:init`    | Generate Prisma client               |
| `prisma:migrate` | Apply latest database migrations     |
| `prisma:seed`    | Seed the database with initial data  |
| `prebuild`       | Run init, migrate, seed before build |

---

## 👤 Author

**Raafy Shiham**

* Website: [raafy.dev](https://raafy.dev)
* GitHub: [@raafy](https://github.com/raafy)

---

## 📝 License

This project is private and intended for use by the Pamame team. All rights reserved.