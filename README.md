## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm (v8+)

### Clone Repository

- git clone https://github.com/Arpit-1106/Blog-Site

- cd blogging-platform

#### 1. Backend Setup (CMD)

- cd backend
- npm install

- Set up MongoDB
- Go to MongoDB Atlas and create a free account

- Create a free cluster

- Get your connection URI (it will look like mongodb+srv://...)


#### 1.1 Create a .env file in the backend folder and insert your connection URI:

- MONGODB_URI = mongodb+srv:// your connection URI

#### 1.2 Start the server (CMD):

- node server.js

#### 2. Frontend Setup (CMD):

- cd ../frontend
- npm install

#### 2.2 Start the development server (CMD):

- npm run dev