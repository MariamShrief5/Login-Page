# Login/SignUp 
A project centered on a Login and Signup (Registration) Page is essentially a User Authentication System designed to securely handle user access to an application. This type of project is commonly used in web applications where users need personalized or secure access, like social media platforms, e-commerce sites, and online dashboards.
    
# Project Description:
This project features a user authentication system with both a Signup (Registration) Page and a Login Page, designed to securely handle user access. The Registration Page allows new users to create an account by providing essential information, such as a username, email, and password. The Login Page enables existing users to access their account with their registered credentials.

## Project Details

This project is a user authentication system with a **Signup (Registration) Page** and a **Login Page**. Here’s a breakdown of the functionality and technical implementation:

### 1. Signup (Registration) Page
   - **User Input Fields**: 
     - Collects essential information from new users, such as:
       - **Username**
       - **Email** (must be unique for each user)
       - **Password** (encrypted before storage)
   - **Validations**:
     - **Unique Email Check**: Ensures no duplicate accounts by checking the database for existing emails.
     - **Password Requirements**: Enforces password strength criteria (e.g., minimum length, inclusion of numbers or symbols) to improve security.
     - **Input Format Validation**: Verifies that email format is correct and that no input fields are left empty.
   - **Password Encryption**:
     - Uses a hashing library (e.g., bcrypt) to encrypt the password before saving it to the database, protecting user data from unauthorized access.
   - **User Creation**:
     - After successful validation, a new user record is created and saved in the database.
   - **Error Handling**:
     - Returns error messages for common issues like "Email already registered" or "Password doesn’t meet requirements."

### 2. Login Page
   - **User Input Fields**:
     - Accepts registered user’s **email** and **password** for authentication.
   - **Credential Verification**:
     - Checks if the entered email exists in the database and if the password matches the hashed password stored during registration.
   - **Session or Token Generation**:
     - On successful login, generates a secure token (such as a JWT) or creates a session ID to keep the user logged in while interacting with the application.
   - **Access Control**:
     - The token or session ID grants access to protected areas of the application, like user profiles or settings.
   - **Error Handling**:
     - Provides user-friendly error messages for issues like "Incorrect password" or "Account does not exist."

### 3. Protected Routes
   - **Authorization**:
     - Certain routes in the application (e.g., profile or dashboard) are restricted to logged-in users only.
     - Tokens (JWT) or session IDs are required to access these routes, ensuring unauthorized users cannot view protected information.
   - **Token Validation**:
     - Each request to a protected route checks for a valid token. If the token is missing or expired, the user is redirected to the login page.

### 4. Security Measures
   - **Password Encryption**: Uses bcrypt or a similar library to hash and salt passwords before saving them, ensuring sensitive data is secure.
   - **Token-Based Authentication**: Generates JWTs (JSON Web Tokens) for each session to authenticate users across requests.
   - **Environment Variables**: Stores sensitive data (e.g., database URL, JWT secret) in environment variables to keep the system secure.

## Example Usage

This project provides API endpoints for **user registration** (signup) and **login**. Below are examples of how to use these endpoints.

### 1. User Signup (Registration)

**Endpoint**: `POST /signup`

**Description**: Registers a new user by collecting a username, email, and password.

**Request Example**:
```json
{
  "username": "jane_doe",
  "email": "janedoe@example.com",
  "password": "SecurePassword123!"
}
```

**Successful Response**:
```json
{
  "message": "User registered successfully!",
  "userId": "unique-user-id-5678"
}
```

**Error Response** (e.g., if the email is already in use):
```json
{
  "error": "Email is already registered. Please use a different email."
}
```

---

### 2. User Login

**Endpoint**: `POST /login`

**Description**: Authenticates an existing user by checking their email and password.

**Request Example**:
```json
{
  "email": "janedoe@example.com",
  "password": "SecurePassword123!"
}
```

**Successful Response**:
```json
{
  "message": "Login successful!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "userId": "unique-user-id-5678"
}
```
- **Note**: The `token` is used for accessing protected routes in the application.

**Error Response** (e.g., incorrect password):
```json
{
  "error": "Invalid email or password."
}
```

---

### 3. Accessing Protected Routes

Once logged in, users can access protected routes by including the token in their request headers.

**Example Protected Route**: `GET /profile`

**Headers**:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Successful Response**:
```json
{
  "username": "jane_doe",
  "email": "janedoe@example.com",
  "createdAt": "2024-10-11T10:23:45Z"
}
```

**Error Response** (e.g., if the token is missing or expired):
```json
{
  "error": "Unauthorized access. Please log in again."
}
```
## Tools and Technologies

### Frontend
- **HTML/CSS**: For structuring and styling the user interface.
- **JavaScript**: Adds interactivity to the pages.
- **Bootstrap**: CSS frameworks to create responsive, visually appealing layouts.

### Backend
- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: A web application framework for Node.js, used to handle routing and API requests.
  
### Database
- **MongoDB**: A NoSQL database to store user information (e.g., username, email, hashed passwords).
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, used to manage database interactions.

# Demo:
https://github.com/user-attachments/assets/deb6e1bb-afc7-4c34-82cc-ee7aa779426f

# Screenshots:
# Login Page
![Screenshot 1](https://drive.google.com/uc?export=view&id=1Qi-dIOTjmlYq-Y22HmrJ4CEb8WdmyzFR)    
# Validation If User Click on Login Button Without Enter Your Valid Data Username and Password  
![Screenshot 2](https://drive.google.com/uc?export=view&id=1XzFqsfN5xZYxmEHOVWSlPxkqIxxxEMMp)
# SignUP Page
![Screenshot 3](https://drive.google.com/uc?export=view&id=1eUll9sJo6tF-YhjuMdz4qPEqoqWz4ZmQ)
# Validation If User Click on SignUp Button Without Enter Your Valid Data Username, Email and Password , For Registration 
![Screenshot 4](https://drive.google.com/uc?export=view&id=1B5E6TOKp83zb0kOAUGhvqYXiBHzMZWIB)
# Enter Valid Data about User This The First Time Visit The Site , The User Must Register Data in Order to Create an Account to Login and Enter to Dashboard
![Screenshot 5](https://drive.google.com/uc?export=view&id=1Yx__5_gECQ3fjDdNGTWKgZFrxF1RMobg)
# Congratulations, Your Account Has Been Successfully Created, You Can Now Able To Login 
![Screenshot 6](https://drive.google.com/uc?export=view&id=1vVPP1KPjTtXvCzqwHjFZ_X2VlOMOZt1j)
# Enter User Data With Which The Account Was Registered (Sensitive Case), If Enter (memo) With The First Letter is "Small", When Click On Login Button ,Will Output Message is > "Invalid Username"
![Screenshot 7](https://drive.google.com/uc?export=view&id=1S12z-VfW1bmvcadzepHyigumYMBJsCJK)
# The Correct Username IS > (Memo) With The First Letter is "Capital"
![Screenshot 7](https://drive.google.com/uc?export=view&id=1qc_xUac3p2UVulfF5n86oN9jCdLpgyLJ)
# Finally, Login and You Can Now Click on Let's Start Button and Enter Our Dashboard System
![Screenshot 7](https://drive.google.com/uc?export=view&id=1J0r-i862cAGlwUnaTI7pcA8wfgYJw4aj)
