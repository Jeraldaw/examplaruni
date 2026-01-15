/* ==========================================
   ShoreSquad Server (Node.js/Express)
   Run this file using: node server.js
   ========================================== */

const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Define the root folder where your HTML/CSS/JS files live
const root = path.join(__dirname);

// Serve static files (css, js, images) automatically
app.use(express.static(root, { extensions: ['html'] }));

// --- Routes ---

// 1. Home Page
app.get('/', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

// 2. n8n Bot Page
app.get('/indexn8nbot', (req, res) => {
  res.sendFile(path.join(root, 'indexn8nbot.html'));
});

// 3. Chatbot Page
app.get('/chatbot', (req, res) => {
  res.sendFile(path.join(root, 'chatbot.html'));
});


app.get('/resume_for_university', (req, res) => {
  res.sendFile(path.join(root, 'resume_for_university.html'));
});
// Start the Server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
  console.log(`   - Home:    http://localhost:${port}/`);
  console.log(`   - Chatbot: http://localhost:${port}/chatbot`);
  console.log(`   - Resume:  http://localhost:${port}/indexn8nbot`);
  console.log(`   - Resume for University:  http://localhost:${port}/resume_for_university`);
});
