# MERN Note-Taking App

A full-stack note-taking web application built with the **MERN stack** (MongoDB, Express.js, React, and Node.js). Users can create an account, sign in, and manage their own notes through a simple dashboard. The project demonstrates REST API development, MongoDB persistence, JWT-based authentication, and a React frontend.

## Features

- **Account registration and login** using JSON Web Tokens (JWT)
- **Personal note management:** create, view, edit, and delete notes
- **Tags:** assign multiple tags to notes
- **Pinning:** mark important notes as pinned
- **Search:** find notes by title or content (case-insensitive)
- **Dashboard:** display notes associated with the signed-in user
- **Interface feedback:** note-editing modal, empty states, and toast messages

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 19, React Router, Vite, Tailwind CSS |
| API client | Axios |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (`jsonwebtoken`) |
| Other UI libraries | React Modal, React Icons, Moment.js |

## Project Structure

```text
mern-basics/
├── Backend/
│   ├── index.js                 # Express server and REST API routes
│   ├── utilities.js             # JWT authentication middleware
│   ├── models/
│   │   ├── note.model.js        # Note schema
│   │   └── user.model.js        # User schema
│   ├── package.json
│   ├── config.json              # MongoDB connection configuration (local)
│   └── .env                     # JWT secret (local; do not commit)
└── frontend/
    └── notes-app/
        ├── src/
        │   ├── components/      # Navbar, cards, inputs, search, toasts
        │   ├── pages/
        │   │   ├── Home/        # Dashboard and add/edit note modal
        │   │   ├── Login/
        │   │   └── SignUp/
        │   ├── utils/           # Axios client, constants, helpers
        │   └── App.jsx         # Application routes
        ├── package.json
        └── vite.config.js
```

> `node_modules`, `.git`, and operating-system files have been omitted from the tree for clarity.

## Getting Started

### Prerequisites

- Node.js and npm (use a version compatible with the Vite version in `frontend/notes-app/package.json`)
- A running MongoDB instance or a MongoDB Atlas connection string

### 1. Clone the repository

```bash
git clone https://github.com/brandonsch0521-GH/MERN-Note-Taking-Project.git
cd MERN-Note-Taking-Project
```

> The source archive uses `mern-basics/` as its top-level directory. Use the directory containing `Backend/` and `frontend/` if your checkout is named differently.

### 2. Configure and start the backend

```bash
cd Backend
npm install
```

Create `Backend/config.json`:

```json
{
  "connectionString": "mongodb://127.0.0.1:27017/notes-app"
}
```

For MongoDB Atlas, replace the local URI with your own connection string. Do not commit real connection credentials.

Create `Backend/.env`:

```dotenv
ACCESS_TOKEN_SECRET=replace-with-a-long-random-secret
```

Start the backend:

```bash
npm start
```

The Express server listens on **http://localhost:8000**. The `/` route returns a simple JSON response.

### 3. Configure and start the frontend

Open a second terminal from the repository root:

```bash
cd frontend/notes-app
npm install
npm run dev
```

Open the URL printed by Vite (typically `http://localhost:5173`). Navigate to `/signup` to create an account or `/login` to sign in. The authenticated dashboard is at `/dashboard`.

The frontend API base URL is currently set to `http://localhost:8000` in `frontend/notes-app/src/utils/constants.js`. Update it if your backend runs elsewhere.

## Using the App

1. **Sign up** with a name, email address, and password, or log in with an existing account.
2. **Create a note** using the add button on the dashboard, entering its title, content, and optional tags.
3. **Manage notes** from note cards: edit, delete, or toggle the pinned state.
4. **Find notes** through the search bar, which matches note titles and content.
5. **Log out** through the navigation interface when finished.

## API Endpoints

| Method | Endpoint | Purpose | Authentication |
| --- | --- | --- | --- |
| `GET` | `/` | Basic server response | No |
| `POST` | `/create-account` | Register a user | No |
| `POST` | `/login` | Log in and receive a JWT | No |
| `GET` | `/get-user` | Get signed-in user information | Yes |
| `POST` | `/add-note` | Create a note | Yes |
| `PUT` | `/edit-note/:noteId` | Update a note | Yes |
| `GET` | `/get-all-notes` | Get the user's notes | Yes |
| `DELETE` | `/delete-note/:noteId` | Delete a note | Yes |
| `PUT` | `/update-note-pinned/:noteId` | Update pinned status | Yes |
| `GET` | `/search-notes?query=...` | Search notes | Yes |

Protected endpoints expect a JWT in the header:

```http
Authorization: Bearer <access-token>
```

### Example: Create a Note

```http
POST /add-note
Authorization: Bearer <access-token>
Content-Type: application/json

{
  "title": "Meeting Notes",
  "content": "Review project milestones.",
  "tags": ["work", "meeting"]
}
```

## Available Commands

**Backend** (`Backend/`):

```bash
npm start        # Start the API using nodemon
```

**Frontend** (`frontend/notes-app/`):

```bash
npm run dev      # Start Vite development server
npm run build    # Build frontend for production
npm run preview  # Preview the production build
npm run lint     # Run ESLint
```

## Important Security Notes

This is a learning project and **should not be deployed publicly as-is**.

- **Passwords are currently stored in plaintext** in the user model and registration flow. Hash passwords using a suitable password-hashing library (for example, bcrypt or Argon2) and verify hashes at login before deploying.
- The supplied source archive contains `Backend/.env` and `Backend/config.json`. Keep real secrets and database credentials out of public repositories, add these files to `.gitignore`, and **rotate any secrets that have already been committed or shared**.
- Review token handling, input validation, error handling, and CORS settings before production use.
- The frontend currently saves the JWT in browser `localStorage`; evaluate safer authentication/session patterns for production deployments.

## Future Improvements

- Hash user passwords and strengthen authentication security
- Add automated frontend and backend tests
- Introduce environment-driven API and database configuration
- Improve form validation and API error handling
- Add responsive layouts and accessibility improvements
- Add deployment configuration and CI checks

## Project Status

A functional learning/demo implementation of a MERN note-taking application. Production hardening is still needed, particularly for credential handling and authentication security.
