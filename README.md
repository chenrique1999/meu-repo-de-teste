# meu-repo-de-teste

Aplicação Node.js simples com Express, configurada com ESLint, Prettier, Jest, Docker e CI via GitHub Actions.

## Pré-requisitos

- Node.js 18+ (recomendado 20)
- npm

## Instalação

```
npm install
```

## Executar em produção

```
npm start
```

O servidor escuta em `PORT` (padrão 3000).

## Desenvolvimento

```
npm run dev
```

Isso usa nodemon para recarregar automaticamente.

## Testes

```
npm test
npm run test:watch
```

## Lint e Format

```
npm run lint
npm run format
```

## Rotas

- GET /health -> retorna `{"status":"ok"}`
- GET /version -> retorna `{"version":"1.0.0"}`

## cURL Exemplos

```
curl -s http://localhost:3000/health
curl -s http://localhost:3000/version
```

## Docker

Dockerfile e docker-compose.yml inclusos.

Build e rodar com Docker:

```
docker build -t meu-repo-de-teste .
docker run --rm -p 3000:3000 -e PORT=3000 meu-repo-de-teste
```

Com docker-compose:

```
docker compose up --build
```

## CI

Pipeline em `.github/workflows/ci.yml` que roda `npm ci` e `npm test` em push/pull_request.
