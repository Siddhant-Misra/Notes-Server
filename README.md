# Notes App Server

This is the server side of the Notes App, built with Node.js, Express.js, and Mongoose. It provides endpoints for CRUD operations on the notes app that you can find at https://chic-crepe-230602.netlify.app/ and includes Swagger for API documentation.

## Installation
1. **Install Dependencies**: Run `npm install` to install the required dependencies.
2. **Generate Swagger Documentation**: Run `npx tsoa routes` and `npx tsoa swagger` to generate routes and Swagger documentation.
3. **Start the Development Server**: Run `npm start` to start the development server.

## Key Components

### Express Application
The server is built with Express.js, a minimalist web framework for Node.js. It handles routing, middleware, and HTTP methods.

- **Middleware**:
  - `cors`: Enables Cross-Origin Resource Sharing.
  - `express.json()`: Parses incoming JSON requests.

### Mongoose Models
Mongoose is used for defining the schema and interacting with the MongoDB database.

- **Note Model**: Defines the structure of the note documents in the database, including fields for title and content.

### Routes
Routes are defined using TSOA (TypeScript OpenAPI), which automatically generates Swagger documentation.

- **GET /notes**: Retrieves all notes.
- **POST /notes**: Creates a new note.
- **PUT /notes/:id**: Updates an existing note by ID.
- **DELETE /notes/:id**: Deletes a note by ID.

### Swagger Documentation
Swagger UI is integrated into the server to provide interactive API documentation. It allows users to test endpoints directly from the documentation interface.

### Error Handling
The server includes basic error handling to manage issues such as invalid requests or server errors, returning appropriate HTTP status codes and messages.

## Hosting
The server is hosted on Render.com, a cloud platform for deploying web applications. 

## Usage
- **GET /notes**: Fetch all notes.
- **POST /notes**: Create a new note.
- **PUT /notes/:id**: Update a note by its ID.
- **DELETE /notes/:id**: Delete a note by its ID.

## Configuration
- **Environment Variables**:
  - `MONGODB_URI`: The connection string for MongoDB.
  - `PORT`: The port on which the server runs.

Ensure these environment variables are set correctly before running the server.

## API Documentation
Access the Swagger UI for API documentation at `/api-docs` after starting the server.
