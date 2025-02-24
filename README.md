Somnium Project
# User Authentication API

## Overview

This API provides user authentication functionality for a web application, including user signup and sign-in using bcrypt for password hashing and JWT for token-based authentication.

## Technologies Used

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: ODM for MongoDB
- **bcrypt**: Password hashing
- **jsonwebtoken (JWT)**: Token-based authentication

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone <repository_url>
   cd <project_folder>
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Set up the environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     JWT_SECRET=your_jwt_secret_key
     NODE_ENV=development
     ```

4. Start the server:

   ```sh
   npm start
   ```

## API Endpoints

### **User Signup**

**Endpoint:** `POST /signup`

**Description:** Registers a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "username": "john_doe",
  "role": "learner"
}
```

**Response:**

```json
{
  "message": "User created successfully.",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "username": "john_doe",
    "role": "learner"
  }
}
```

### **User Sign-In**

**Endpoint:** `POST /signin`

**Description:** Authenticates a user and returns a JWT token.

**Request Body:**

```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "learner"
  }
}
```

## Security Measures

- **Password Hashing:** All passwords are securely hashed using `bcrypt` before being stored in the database.
- **JWT Authentication:** Users receive a signed JWT token upon login, which is used for authentication.
- **Role-Based Access Control:** Users have assigned roles (`learner` by default) that determine their access level.
- **Account Blocking:** If a user's account is blocked, they cannot log in.

## License

This project is licensed under the MIT License. Feel free to use and modify it as needed.


