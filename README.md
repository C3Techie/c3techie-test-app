# HNG Test Application - TypeScript/Node.js

Production-ready Express app built with TypeScript for testing automated deployment.

## Tech Stack
- Node.js 20
- TypeScript 5.3
- Express 4.18
- Multi-stage Docker build

## Endpoints
- `GET /` - Homepage with deployment info
- `GET /health` - Health check endpoint
- `GET /api/info` - System information

## Port
Runs on port 3000

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start