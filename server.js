const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Rota /status (mantida para compatibilidade)
app.get('/status', (req, res) => {
  res.status(200).json({ ok: true });
});

// Rota /version - lê dinamicamente do package.json em tempo de execução
app.get('/version', (req, res) => {
  const { version } = require('./package.json');
  res.status(200).json({ version });
});

// Inicia o servidor apenas quando este arquivo é o principal (não em testes)
if (require.main === module) {
  const server = app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });

  process.on('SIGTERM', () => {
    server.close(() => process.exit(0));
  });

  process.on('SIGINT', () => {
    server.close(() => process.exit(0));
  });
}

module.exports = app;
