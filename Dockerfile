# Use Node.js 20 on Alpine
FROM node:20-alpine

WORKDIR /app

# Install deps first (leverage cache)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy source
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["node", "server.js"]
