## Setup Instructions

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- npm (v8+)

### Clone Repository

- git clone https://github.com/Arpit-1106/blogging-platform

- cd blogging-platform

#### 1. Backend Setup (CMD)

- cd backend
- npm install

#### 1.1 Create a .env file in the backend folder and insert given code:

- mongodb+srv://<username>:<password>@<cluster-address>/<database>?<options>

#### 1.2 Start the server (CMD):

- node server.js

#### 2. Frontend Setup (CMD):

- cd ../frontend
- npm install

#### 2.2 Start the development server (CMD):

- npm run dev