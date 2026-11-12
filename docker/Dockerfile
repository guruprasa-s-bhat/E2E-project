FROM node:22-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY app/package*.json ./
RUN npm install --omit=dev
COPY app/ ./
USER node
EXPOSE 3000
CMD ["node", "server.js"]
