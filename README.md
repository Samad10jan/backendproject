# Practice Project: YouTube-like Backend Project

<p align="center">

<a href="https://nodejs.org">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
</a>

<a href="https://expressjs.com">
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
</a>

<a href="https://www.mongodb.com">
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
</a>

<a href="https://mongoosejs.com">
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" />
</a>

<a href="https://www.typescriptlang.org">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</a>

<a href="https://jwt.io">
  <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white" />
</a>

<a href="https://cloudinary.com">
  <img src="https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white" />
</a>

<a href="https://github.com/expressjs/multer">
  <img src="https://img.shields.io/badge/Multer-FF6B35?style=for-the-badge&logo=files&logoColor=white" />
</a>

<a href="https://www.npmjs.com/package/cors">
  <img src="https://img.shields.io/badge/CORS-00599C?style=for-the-badge" />
</a>

<a href="https://github.com/motdotla/dotenv">
  <img src="https://img.shields.io/badge/Dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black" />
</a>

<a href="https://nodemon.io">
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />
</a>

<a href="https://prettier.io">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black" />
</a>

<a href="https://www.postman.com">
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
</a>

</p>

<h2 align="center">📚 API Documentation</h2>

<p align="center">
  <a href="https://documenter.getpostman.com/view/48752494/2sBXwqqVoU">
    <img src="https://img.shields.io/badge/View-Postman_Docs-FF6C37?style=for-the-badge&logo=postman&logoColor=white" />
  </a>
</p>


## 📚 Project Overview

This is a **comprehensive, production-ready backend API** built with **Express.js** and **MongoDB (Mongoose)**. It implements a full-featured video streaming platform similar to YouTube, complete with user authentication, video uploads, comments, likes, playlists, and subscriptions.

**Perfect for learning:** Modern Node.js development, REST API design, database modeling, authentication systems, and best practices in backend engineering.

---

## 📚 Documentation Structure

```
🚀 QUICK START
    ↓
GETTING_STARTED.md ◄─── 5-minute setup + troubleshooting
    ↓
README.md ◄────────────── Project overview (you are here)
    ↓
Pick a Learning Path:
├─ API_DOCS           ◄────────────── Api documentation with POSTMAN Collection link  
├─ EXPRESS_GUIDE.md   ◄────────────── Complete Express.js tutorial
├─ MONGOOSE_GUIDE.md  ◄────────────── Database & schema guide  
├─ PACKAGES.md        ◄────────────── All dependencies explained
└─ Notes.txt          ◄────────────── Original learning notes
```



---

## 🎯 Learning Objectives

```
┌─────────────────────────────────────────────────────────────┐
│               WHAT YOU'LL LEARN IN THIS PROJECT             │
└─────────────────────────────────────────────────────────────┘

  🌐 WEB FRAMEWORK          🗄️ DATABASE DESIGN
  ├─ Routing & Handlers     ├─ Schema Definition
  ├─ Middleware Pipeline    ├─ Data Relationships
  ├─ Request/Response       ├─ Validation Rules
  └─ Error Handling         └─ Query Optimization

  🔐 AUTHENTICATION         📡 API DEVELOPMENT
  ├─ JWT Tokens             ├─ RESTful Principles
  ├─ Password Hashing       ├─ Status Codes
  ├─ Auth Middleware        └─ Error Responses
  └─ User Sessions

  📁 FILE MANAGEMENT        🏗️ ARCHITECTURE
  ├─ File Uploads           ├─ Project Structure
  ├─ Cloud Storage          ├─ Separation of Concerns
  └─ File Deletion          └─ Scalable Design

  🎁 ADVANCED CONCEPTS
  ├─ Aggregation Pipelines
  ├─ Pagination
  ├─ Caching Strategies
  └─ Security Best Practices
```

---

## 🏗️ Project Structure

```
PracticeProject/
│
├── 📄 Node Configuration Files
│   ├── package.json              ← Dependencies & scripts
│   ├── .env                      ← Secrets (not in git)
│   ├── .gitignore               ← Ignore node_modules
│   ├── .prettierrc              ← Code formatting rules
│   └── .prettierignore          ← Prettier ignore rules
│
├── 📚 Documentation
│   ├── README.md                 ← You are here
│   ├── EXPRESS_GUIDE.md          ← Complete Express.js tutorial
│   ├── MONGOOSE_GUIDE.md         ← Database & schema guide
│   ├── PACKAGES.md               ← All npm packages explained
│   └── Notes.txt                 ← Original learning notes
│
├── 🔧 Source Code (src/)
│   │
│   ├── index.js                  ← Server entry point
│   ├── app.js                    ← Express app setup
│   ├── constants.js              ← App constants
│   │
│   ├── 🗄️ db/
│   │   └── db.js                 ← MongoDB connection
│   │
│   ├── 📋 models/                ← Mongoose schemas
│   │   ├── user.model.js         ← User schema & methods
│   │   ├── video.model.js        ← Video content schema
│   │   ├── comment.model.js      ← Comments schema
│   │   ├── like.model.js         ← Likes schema
│   │   ├── playlist.model.js     ← Playlists schema
│   │   └── subscription.model.js ← Subscriptions schema
│   │
│   ├── 🎮 controllers/           ← Business logic
│   │   ├── user.controller.js    ← User operations (register, login)
│   │   ├── video.controller.js   ← Video operations (upload, stream)
│   │   ├── comment.controller.js ← Comment operations
│   │   ├── like.controller.js    ← Like operations
│   │   ├── playlist.controller.js ← Playlist operations
│   │   ├── subscription.controller.js ← Subscription operations
│   │   └── dashboard.controller.js ← Analytics & stats
│   │
│   ├── 🛣️ routes/                ← API routes
│   │   ├── user.routes.js        ← /api/v1/users
│   │   ├── video.routes.js       ← /api/v1/videos
│   │   ├── comment.routes.js     ← /api/v1/comments
│   │   ├── like.routes.js        ← /api/v1/likes
│   │   ├── playlist.routes.js    ← /api/v1/playlists
│   │   ├── subscription.routes.js ← /api/v1/subscriptions
│   │   └── dashboard.routes.js   ← /api/v1/dashboard
│   │
│   ├── ⚙️ middlewares/           ← Custom middleware
│   │   ├── auth.middleware.js    ← JWT verification
│   │   └── multer.middleware.js  ← File upload handling
│   │
│   └── 🛠️ utils/                 ← Utility functions
│       ├── asyncHandler.js       ← Async error wrapper
│       ├── ApiError.js           ← Custom error class
│       ├── ApiResponse.js        ← Response standardization
│       └── cloudinary.js         ← Cloud storage upload/delete
│
└── 📦 public/                    ← Static files & uploads
    └── temp/                     ← Temporary file storage
```

### 📊 Data Flow Visualization

```
       ┌─────────────┐
       │   Client    │ (Browser/Mobile/Postman)
       └──────┬──────┘
              │ HTTP Request
              │ (GET /api/v1/users)
              ↓
┌────────────────────────────────────┐
│        Express.js (app.js)         │
│     • Parse request                │
│     • Apply middleware             │
└────────────┬───────────────────────┘
             │
             ↓
    ┌─────────────────────┐
    │   Routes (*.routes) │
    │ Match URL pattern   │
    └────────────┬────────┘
                 │
                 ↓
    ┌─────────────────────────────┐
    │  Middleware (auth, etc)     │
    │  Verify JWT token           │
    │  Validate user permissions  │
    └────────────┬────────────────┘
                 │
                 ↓
    ┌─────────────────────────────┐
    │  Controller (*.controller)  │
    │  • Process business logic   │
    │  • Validate input           │
    │  • Call database            │
    └────────────┬────────────────┘
                 │
                 ↓
    ┌─────────────────────────────┐
    │   Model (*.model)           │
    │  • Define data schema       │
    │  • Validate data            │
    │  • Run middleware hooks     │
    └────────────┬────────────────┘
                 │
                 ↓
    ┌─────────────────────────────┐
    │ MongoDB (Database)          │
    │  • Store/Retrieve data      │
    │  • Return results           │
    └────────────┬────────────────┘
                 │
                 ↓
    ┌─────────────────────────────┐
    │  Controller (continued)     │
    │  • Prepare response         │
    │  • Handle errors            │
    └────────────┬────────────────┘
                 │
                 ↓
┌────────────────────────────────────┐
│      Express.js Response           │
│  • Set status code                 │
│  • Set headers                     │
│  • Send JSON/data                  │
└────────────┬───────────────────────┘
             │
             ↓ HTTP Response
        ┌─────────────┐
        │   Client    │
        └─────────────┘
```


## 📦 Installation & Setup

### ⚡ Quick Start (5 minutes)
```bash
npm install
npm run dev
# Server runs on http://localhost:8000
```

### 📖 Detailed Setup Guide
**For complete step-by-step instructions, see [GETTING_STARTED.md](GETTING_STARTED.md)**


### Quick Reference

#### 1. Clone or Setup Project

#### 2. Install Dependencies

**Package breakdown:** See [PACKAGES.md](PACKAGES.md) for details on each one.

#### 3. Create Environment Variables

Create a `.env` file in the root directory with your configuration:

```env
# Server
PORT=8000
NODE_ENV=development

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net
DB_NAME=youtube_clone

# JWT
JWT_SECRET=your-secret-key-here
JWT_EXPIRE=7d
REFRESH_TOKEN_SECRET=refresh-secret
REFRESH_TOKEN_EXPIRY=30d

# Cloudinary (Image/Video Upload)
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# CORS
CORS_ORIGIN=http://localhost:3000
```

#### 4. MongoDB Setup

**Easiest Option: MongoDB Atlas (Cloud)**

1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create cluster
4. Network Access → Add IP `0.0.0.0/0` (allow all for dev)
5. Database Access → Create user with username/password
6. Click Connect → Copy connection string
7. Add to `.env`: `MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net`


#### 5. Run the Application

```bash
# Development mode (auto-reload on file changes)
npm run dev

# Production mode
npm start
```

Expected output:
```
Server is running on port: 8000
MongoDB Connected Successfully!
```

#### 6. Test API

```bash
# Using curl
curl http://localhost:8000/api/v1/users

# Using Postman:
# 1. New Request
# 2. GET http://localhost:8000/api/v1/users
# 3. Send
```

---

## 🎓 Understanding Key Concepts

### A. Express.js Configuration (app.js)

The `app.js` file sets up the Express application with essential middleware:

```javascript
// CORS - Allow requests from different origins
app.use(cors({ origin: "*", credentials: true }))

// JSON body parser with size limit
app.use(express.json({ limit: "16kb" }))

// URL-encoded data parser (handles special characters)
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// Serve static files from 'public' folder
app.use(express.static("public"))

// Cookie parser - enables cookie operations
app.use(cookiesParser())
```

**Why these configurations?**
- **CORS**: Enable requests from frontend (React, Vue, etc.)
- **Size Limits**: Prevent large payload attacks
- **URL Encoding**: Handle form-submitted data with special characters
- **Static Files**: Serve images, favicons, etc. directly from server
- **Cookies**: Used for session management and authentication

### B. Database Connection (db/db.js)

**Approach Used in this project:**

```javascript
// Separate database connection in db/db.js
// Benefits: Clean separation of concerns, reusable connection function

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${process.env.DB_NAME}`
        );
        console.log("MongoDB connected successfully");
        return connectionInstance;
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1);
    }
}
```

**Approach 1 - IIFE (commented in index.js):**

```javascript
// Inline database connection using IIFE
// Less common, not recommended for larger projects
```

### C. Error Handling Pattern

**Custom ApiError Class** (`utils/ApiError.js`):

```javascript
class ApiError extends Error {
    constructor(statusCode, message, errors = [], stack = "") {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
        
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Usage in controllers:
if (!user) {
    throw new ApiError(404, "User not found", []);
}
```

### D. Async Handler Wrapper

**Purpose:** Eliminate repetitive try-catch blocks in controllers

```javascript
// asyncHandler.js
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next))
            .catch((err) => next(err))  // Pass errors to Express error handler
    }
}

// Usage in controllers:
const loginUser = asyncHandler(async (req, res) => {
    // No try-catch needed! Errors are automatically caught
    const user = await User.findById(req.user._id);
    // ... rest of logic
})
```

### E. Request/Response Standardization

**ApiResponse Class** (`utils/ApiResponse.js`):

```javascript
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

// Standardized response:
res.status(200).json(
    new ApiResponse(200, user, "User logged in successfully")
)
```

### F. Mongoose Schema Relationships

**User Model Example:**

```javascript
const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true  // Faster queries
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"  // Reference to Video collection
        }
    ]
}, { timestamps: true })  // Auto-adds createdAt and updatedAt
```

### G. Password Hashing with Mongoose Hooks

```javascript
userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    
    this.password = await bcrypt.hash(this.password, 10);
})

// Verify password method
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password);
}
```

### H. JWT Token Generation

```javascript
userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        { _id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
    )
}
```

---

## 🔐 Authentication Flow

### 1. User Registration
```
POST /api/v1/users/register
→ Validate input
→ Check if user exists
→ Hash password
→ Save to MongoDB
→ Return success response
```

### 2. User Login
```
POST /api/v1/users/login
→ Validate credentials
→ Check if user exists
→ Compare passwords using bcrypt
→ Generate JWT token
→ Set token in secure cookie
→ Return user data + token
```

### 3. Protected Routes
```
GET /api/v1/users/profile
→ Auth middleware verifies JWT
→ Extract user ID from token
→ Fetch user data
→ Return user profile
```

---

## 📡 API Routes Overview

### User Routes (`/api/v1/users`)
- `POST /register` - Create new user
- `POST /login` - User login
- `POST /logout` - User logout
- `GET /profile` - Get current user profile
- `PATCH /update` - Update user details
- `POST /change-password` - Change password
- `GET /refresh-token` - Refresh access token

### Video Routes (`/api/v1/videos`)
- `POST /` - Upload new video
- `GET /` - Get all videos with pagination
- `GET /:videoId` - Get single video
- `PATCH /:videoId` - Update video details
- `DELETE /:videoId` - Delete video
- `PATCH /:videoId/publish` - Toggle publish status
- `GET /:videoId/views` - Get view count

### Comment Routes (`/api/v1/comments`)
- `POST /:videoId` - Add comment to video
- `GET /:videoId` - Get all comments on video
- `PATCH /:commentId` - Update comment
- `DELETE /:commentId` - Delete comment

### Like Routes (`/api/v1/likes`)
- `POST /video/:videoId` - Like/unlike video
- `POST /comment/:commentId` - Like/unlike comment
- `GET /video/:videoId` - Get video likes count
- `GET /comment/:commentId` - Get comment likes count

### Playlist Routes (`/api/v1/playlists`)
- `POST /` - Create playlist
- `GET /` - Get user's playlists
- `GET /:playlistId` - Get playlist details
- `PATCH /:playlistId` - Update playlist
- `DELETE /:playlistId` - Delete playlist
- `PATCH /:playlistId/:videoId` - Add video to playlist
- `DELETE /:playlistId/:videoId` - Remove video from playlist

### Subscription Routes (`/api/v1/subscriptions`)
- `POST /:channelId` - Subscribe to channel
- `DELETE /:channelId` - Unsubscribe from channel
- `GET /subscribers/:channelId` - Get channel subscribers
- `GET /channels/:userId` - Get user's subscriptions

### Dashboard Routes (`/api/v1/dashboard`)
- `GET /stats` - Get channel statistics
- `GET /videos` - Get channel videos with analytics

---

## 🛠️ Development Best Practices

### 1. Code Formatting with Prettier

Configuration (`.prettierrc`):
```json
{
  "singleQuote": true,
  "bracketSpacing": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "semi": true
}
```

Run formatting:
```bash
npx prettier --write src/
```



### 2. Hot Reloading with Nodemon

Nodemon automatically restarts the server when files change. Configured in `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
  }
}
```

### 3. Project Structure

- **Separation of Concerns:** Each folder handles one responsibility
- **Reusable Utilities:** Common functions in utils/
- **Consistent Naming:** Controllers end with `.controller.js`, routes with `.routes.js`
- **Scalability:** Easy to add new features without modifying existing code

### 4. Error Handling Strategy

```javascript
// ✅ Good - Using asyncHandler and ApiError
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, user, "User fetched"));
})

// ❌ Bad - Repetitive try-catch
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            res.status(404).json({ error: "Not found" });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
```

### 5. Database Indexing

Indexes speed up queries:

```javascript
// Indexed fields for faster queries
userName: { type: String, index: true },
email: { type: String, unique: true },  // unique is also an index
```

---

## 📚 Learning Path

### Week 1: Fundamentals
1. ✅ Node.js and ES6+ modules
2. ✅ Express.js basics (routing, middleware, request/response)
3. ✅ Project structure and organization
4. ✅ Environment variables with dotenv

### Week 2: MongoDB & Mongoose
1. ✅ MongoDB Atlas setup and connection
2. ✅ Schema design and validation
3. ✅ CRUD operations
4. ✅ Relationships (references vs embedded documents)

### Week 3: Authentication & Security
1. ✅ Password hashing with bcrypt
2. ✅ JWT token generation and verification
3. ✅ Authentication middleware
4. ✅ Protected routes and authorization

### Week 4: File Handling & Advanced Features
1. ✅ File upload with Multer
2. ✅ Cloud storage with Cloudinary
3. ✅ Aggregation pipelines
4. ✅ Pagination and filtering

### Week 5: API Development
1. ✅ RESTful API principles
2. ✅ Request validation
3. ✅ Error handling
4. ✅ API testing with Postman

### Week 6: Deployment & Production
1. ✅ Environment configuration
2. ✅ Error logging and monitoring
3. ✅ Performance optimization
4. ✅ Deploying to cloud platforms

---

## 🔑 Key Files Explained

### `src/index.js`
- Server entry point
- Connects to MongoDB before starting Express server
- Uses promise-based approach for clean error handling

### `src/app.js`
- Configures Express middleware
- Imports and registers routes
- Handles request processing pipeline

### `src/db/db.js`
- Establishes MongoDB connection
- Handles connection errors
- Can be imported and called from any file

### `src/middlewares/auth.middleware.js`
- Verifies JWT tokens
- Extracts user information from token
- Restricts access to protected routes

### `src/middlewares/multer.middleware.js`
- Configures file upload handling
- Sets file size limits
- Defines allowed file types
- Stores files in `public/temp/` before cloud upload

### `src/utils/asyncHandler.js`
- Wrapper for async route handlers
- Catches errors without try-catch blocks
- Passes errors to Express error middleware

### `src/utils/ApiError.js`
- Custom error class extending Error
- Standardizes error responses
- Captures stack traces

### `src/utils/ApiResponse.js`
- Standardizes success responses
- Ensures consistent API response format
- Sets appropriate status codes

---

## 🚀 Running the Project

### Development
```bash
npm run dev
# Server runs with auto-reload on file changes
# Listens on http://localhost:8000
```

### Production
```bash
npm start
```

### Testing API Endpoints

Use **Postman** or **cURL**:

```bash
# Register User
curl -X POST http://localhost:8000/api/v1/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "userName": "johndoe",
    "email": "john@example.com",
    "fullName": "John Doe",
    "password": "password123"
  }'

# Login
curl -X POST http://localhost:8000/api/v1/users/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'

# Get Protected Route (requires token in header)
curl -X GET http://localhost:8000/api/v1/users/profile \
  -H "Authorization: Bearer <your_jwt_token>"
```

---

## 📖 Learning Resources & Guides

### 🚀 Start Here

```
Your First Day?
    ↓
1. Read this README.md (overview)
2. Run npm install
3. Setup MongoDB connection
4. Run npm run dev
    ↓
Congratulations! Server is running!
```

### 📚 Learning Paths by Interest

#### 🌐 Want to Master Express.js?
→ **Read: [EXPRESS_GUIDE.md](EXPRESS_GUIDE.md)**
- Server setup and configuration
- Routing system and parameters
- Middleware pipeline
- Error handling patterns
- Authentication & security
- Request/response handling
- +Complete code examples

#### 🗄️ Want to Master Database Design?
→ **Read: [MONGOOSE_GUIDE.md](MONGOOSE_GUIDE.md)**
- Schema definition and validation
- Creating models and documents
- CRUD operations
- Data relationships (one-to-many, many-to-many)
- Middleware hooks (pre/post)
- Aggregation pipelines
- Pagination strategies
- +Real project examples

#### 📦 Want to Understand Dependencies?
→ **Read: [PACKAGES.md](PACKAGES.md)**
- What each package does
- Why it's used in this project
- How to install and configure
- Usage examples
- Common errors and solutions
- Package comparison table

#### 📝 Original Notes?
→ **See: [Notes.txt](Notes.txt)**
- Original learning notes
- Setup process documentation
- Important concepts
- Quick reference tips

---

## 🎓 Complete Learning Path (6 Weeks)

```
Week 1️⃣ - FUNDAMENTALS
├─ Node.js & ES6+ modules
├─ Express.js basics
└─ Project structure
   📖 Resource: EXPRESS_GUIDE.md

Week 2️⃣ - DATABASE
├─ MongoDB Atlas setup
├─ Mongoose schemas & models
└─ CRUD operations
   📖 Resource: MONGOOSE_GUIDE.md

Week 3️⃣ - AUTHENTICATION
├─ Password hashing (bcrypt)
├─ JWT tokens
└─ Auth middleware
   📖 Resource: EXPRESS_GUIDE.md → Authentication section

Week 4️⃣ - ADVANCED FEATURES
├─ File uploads (Multer)
├─ Cloud storage (Cloudinary)
└─ Aggregation pipelines
   📖 Resource: MONGOOSE_GUIDE.md → Advanced Features

Week 5️⃣ - API DEVELOPMENT
├─ RESTful principles
├─ Validation & error handling
└─ Response standardization
   📖 Resource: README.md → API Routes Overview

Week 6️⃣ - DEPLOYMENT
├─ Production setup
├─ Environment configuration
└─ Cloud deployment
   📖 Resource: README.md → Installation & Setup
```

### Express.js
- [Express.js Official Documentation](https://expressjs.com/)
- [Express Middleware Guide](https://expressjs.com/en/guide/using-middleware.html)
- [Request Object](https://expressjs.com/en/api/request.html)
- [Response Object](https://expressjs.com/en/api/response.html)

### MongoDB & Mongoose
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Official Documentation](https://mongoosejs.com/)
- [Schema Validation](https://mongoosejs.com/docs/validation.html)
- [Aggregation Pipeline](https://mongoosejs.com/docs/api/aggregation.html)

### Authentication
- [JWT (JSON Web Tokens)](https://jwt.io/)
- [bcrypt Documentation](https://github.com/kelektiv/node.bcrypt.js)
- [CORS Guide](https://enable-cors.org/)

### Tools
- [Nodemon Documentation](https://nodemon.io/)
- [Prettier Code Formatter](https://prettier.io/)
- [Postman API Testing](https://www.postman.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Cloudinary Docs](https://cloudinary.com/documentation)

### Best Practices
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [RESTful API Design](https://restfulapi.net/)
- [12-Factor App Methodology](https://12factor.net/)

---

## 🎯 Common Issues & Solutions

### Issue: "MongoDB connection failed"
**Solution:**
- Verify connection string in `.env`
- Check if password contains special characters (URL encode them)
- Ensure IP address is whitelisted in MongoDB Atlas
- Verify MongoDB cluster is running

### Issue: "Cannot find module" error
**Solution:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# On Windows, use:
rmdir /s /q node_modules
npm install
```

### Issue: "Port already in use"
**Solution:**
```bash
# Change port in .env
PORT=8001

# Or kill process using port 8000
# On Windows:
netstat -ano | findstr :8000
taskkill /PID <PID> /F
```

### Issue: "req.user is undefined in protected routes"
**Solution:**
- Ensure auth middleware is applied before the route handler
- Verify JWT token is passed in request headers
- Check token hasn't expired

### Issue: "Prettier formatting not working"
**Solution:**
```bash
# Install prettier as dev dependency
npm install -D prettier

# Format files manually
npx prettier --write src/
```

---

## 📝 Notes on Architecture Decisions

### Why Separate Controllers, Routes, and Models?
- **Maintainability:** Each file has a single responsibility
- **Testability:** Easy to unit test individual components
- **Scalability:** Add new features without touching existing code
- **Collaboration:** Team members can work on different features independently

### Why Use Async Handler Pattern?
- **DRY Principle:** Avoid repetitive try-catch blocks
- **Consistency:** All errors handled the same way
- **Cleaner Code:** Focus on business logic, not error handling boilerplate

### Why Use Custom Error and Response Classes?
- **Standardization:** All API responses follow same format
- **Consistency:** Clients know what to expect
- **Debugging:** Easy to identify what went wrong
- **Type Safety:** Can be extended with TypeScript later

---

## 🤝 Contributing Guidelines

1. Follow the existing code structure
2. Use Prettier for code formatting
3. Add comments for complex logic
4. Test API endpoints before committing
5. Update this README when adding new features

---

## 📞 Contact & Support

**Project Author:** Abdul Samad

For questions or improvements, refer to the learning notes in `Notes.txt` and expand your understanding through the Express.js and Mongoose documentation.

---


## 📋 Documentation Checklist

- [x] **README.md** - Main overview (you are here)
- [x] **EXPRESS_GUIDE.md** - Complete Express.js tutorial
- [x] **MONGOOSE_GUIDE.md** - Database design guide
- [x] **PACKAGES.md** - All dependencies explained
- [x] **Notes.txt** - Original learning notes

#### Quick Links to Sections:
- [Installation & Setup](#-installation--setup) - Get started
- [Project Structure](#-project-structure) - Understand layout
- [API Routes](#-api-routes-overview) - All endpoints
- [Key Concepts](#-understanding-key-concepts) - Deep dives
- [Best Practices](#-development-best-practices) - Do's & Don'ts
- [Common Issues](#-common-issues--solutions) - Troubleshooting


---

## 🔍 Project Features

| Feature | Status | Location |
|---------|--------|----------|
| **User Registration** | ✅ | `user.controller.js` |
| **User Login** | ✅ | `user.controller.js` |
| **JWT Authentication** | ✅ | `auth.middleware.js` |
| **Video Upload** | ✅ | `video.controller.js` |
| **Video Streaming** | ✅ | `video.routes.js` |
| **Comments System** | ✅ | `comment.controller.js` |
| **Like/Unlike System** | ✅ | `like.controller.js` |
| **Playlists** | ✅ | `playlist.controller.js` |
| **Subscriptions** | ✅ | `subscription.controller.js` |
| **Dashboard Stats** | ✅ | `dashboard.controller.js` |
| **Error Handling** | ✅ | `utils/ApiError.js` |
| **Response Standardization** | ✅ | `utils/ApiResponse.js` |

---

**Happy Learning! 🚀 Keep building, keep learning! 💻**
