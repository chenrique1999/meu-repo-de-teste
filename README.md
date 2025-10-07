# meu-repo-de-teste

Instruções de uso:

1. Instalar dependências:

   npm install

2. Iniciar o servidor:

   npm start

   O servidor escuta na porta 3000 por padrão (use PORT para alterar).

3. Rotas disponíveis:

   GET /health   -> retorna status de saúde
   GET /version  -> retorna versão da aplicação

4. Parar o servidor:

   Envie SIGINT (Ctrl+C) ou SIGTERM; se o processo estiver em background, mate-o pelo PID.
