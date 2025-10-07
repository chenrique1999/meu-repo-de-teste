const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Rota /status solicitada: retorna { ok: true }
app.get('/status', (req, res) => {
  res.status(200).json({ ok: true });
});

// Nova rota /version conforme solicitado anteriormente
app.get('/version', (req, res) => {
  res.status(200).json({ version: '1.0.0' });
});

const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});

process.on('SIGINT', () => {
  server.close(() => process.exit(0));
});
