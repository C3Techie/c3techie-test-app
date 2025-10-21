import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HNG Stage 1 DevOps</title>
        <style>
          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 50px;
            margin: 0;
          }
          .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            max-width: 600px;
            margin: 0 auto;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }
          h1 { font-size: 2.5em; margin: 0 0 10px 0; }
          h2 { font-size: 1.5em; margin: 10px 0; color: #ffd700; }
          p { font-size: 1.1em; line-height: 1.6; }
          .badge {
            display: inline-block;
            background: #4CAF50;
            padding: 10px 20px;
            border-radius: 25px;
            margin-top: 20px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🚀 HNG Stage 1 DevOps</h1>
          <h2>Automated Deployment Success!</h2>
          <p>This TypeScript/Node.js app was deployed using a production-grade Bash script.</p>
          <p><strong>Tech Stack:</strong> Node.js + TypeScript + Express + Docker + Nginx</p>
          <p><strong>Server:</strong> ${process.env.HOSTNAME || 'Remote Linux Server'}</p>
          <div class="badge">✅ Deployment Verified</div>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    app: 'hng-test-app',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.get('/api/info', (req: Request, res: Response) => {
  res.json({
    name: 'HNG DevOps Stage 1',
    version: '1.0.0',
    node: process.version,
    platform: process.platform,
    memory: process.memoryUsage()
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});