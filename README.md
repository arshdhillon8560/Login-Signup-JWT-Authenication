n system using Node.js, Express, MongoDB, and JWT.

## Features

- User registration (signup)
- User login with JWT authentication
- Password hashing with bcrypt
- Protected routes requiring authentication
- MongoDB for user data storage

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

```bash
git clone https://github.com/yourusername/Login-Signup-JWT-Authentication.git
cd Login-Signup-JWT-Authentication
npm install
```

### Configuration

Create a `.env` file in the root directory and add:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the App

```bash
npm start
```

## API Endpoints

- `POST /api/signup` — Register a new user
- `POST /api/login` — Login and receive JWT token
- `GET /api/protected` — Access protected route (requires JWT)

## License

MIT