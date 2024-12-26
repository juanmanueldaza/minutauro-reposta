# README.md
This project implements authentication using a GitLab API token. It utilizes the `node-gitlab` library to interact with the GitLab API.

## Dependencies
The project requires the following dependencies:
- `node-gitlab`
- `express`

## Installation
To install the required dependencies, run the following command in your terminal:
```bash
npm install node-gitlab express
```

## Usage
To start the server, navigate to the project root directory and run:
```bash
node filename.js
```
Alternatively, you can add a script to `package.json` with the following line:
```json
"start": "node filename.js"
```
Then, you can start the server using:
```bash
npm start
```

## API Endpoints
The project includes an endpoint at `/test` that uses the `GitlabClient` instance to fetch data from the repository.

## GitLab Client
The `gitlab.js` file contains a class named `GitLabClient` that handles interactions with the GitLab API. It has a method called `getIssues()` that retrieves issues from a specified project.

## Server File
The server file, located at `filename.js`, sets up an Express app and defines routes for handling requests. It includes error handling to catch and log any errors that occur during request handling or server startup.