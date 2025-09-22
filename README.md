# Next-Generation Learning Platform (NGLP)

## Project Overview

This project is the frontend for the Next-Generation Learning Platform (NGLP). It is a modern, user-centric web application designed to serve as a front-end for a Moodle Learning Management System (LMS) backend.

The primary goal is to provide a superior user experience for learners, abstracting away the complexity of the Moodle interface. It handles course browsing, progress tracking, and content consumption. It integrates with an external payment gateway and synchronizes all user and course data with a Moodle instance.

For more details on the system architecture, see [NGLP_ARCHITECTURE.md](./NGLP_ARCHITECTURE.md).
For the development backlog, see [USER_STORIES.md](./USER_STORIES.md).

---

## Technology Stack

- **Frontend:** React / Next.js, Vite, TypeScript
- **Styling:** Tailwind CSS with shadcn-ui
- **Backend (to be built):** Node.js, Express.js
- **Database (to be built):** PostgreSQL
- **LMS Backend:** Moodle

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/) (for running a local PostgreSQL database)
- Access to a Moodle instance for development/testing.

---

## Development Setup

### 1. Clone the Repository

```sh
git clone <YOUR_GIT_URL>
cd <PROJECT_DIRECTORY>
```

### 2. Configure Environment Variables

Create a `.env` file in the root of the project. Copy the contents of `.env.example` if it exists, or use the template below. This will be used by both the frontend and the future backend.

```env
# Frontend Configuration
VITE_API_BASE_URL=http://localhost:3001/api

# Backend & Database Configuration
DATABASE_URL="postgresql://user:password@localhost:5432/nglp_db"

# Moodle Integration
MOODLE_API_URL="https://your-moodle-instance.com/webservice/rest/server.php"
MOODLE_API_TOKEN="your-moodle-api-token"

# Payment Gateway (Example: Stripe)
STRIPE_PUBLISHABLE_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
```

**Important:** You will need to get the Moodle API URL and an API token from your Moodle instance. The token should belong to a Moodle user with the necessary permissions for creating users, enrolling users, and fetching course data.

### 3. Setup the Database

You can use Docker to easily run a PostgreSQL database locally.

```sh
docker run --name nglp-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_USER=user -e POSTGRES_DB=nglp_db -p 5432:5432 -d postgres
```

This command will start a PostgreSQL container with the database `nglp_db`, user `user`, and password `password`, matching the `DATABASE_URL` in the `.env` template.

### 4. Install Dependencies

This project currently contains the frontend application. The backend will be added later.

```sh
# Install frontend dependencies
npm install
```

### 5. Run the Application

```sh
# Start the frontend development server
npm run dev
```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is in use).

---

## Project Structure

```
.
├── public/              # Static assets
├── src/                 # Frontend source code
│   ├── components/      # Reusable React components
│   ├── pages/           # Page components for routing
│   ├── services/        # API service definitions
│   └── ...
├── NGLP_ARCHITECTURE.md # System architecture document
├── USER_STORIES.md      # Development backlog
└── ...
```