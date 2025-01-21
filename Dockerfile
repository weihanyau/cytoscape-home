# Repository Link: https://github.com/weihanyau/cytoscape-home
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev", "--", "--host", "--port", "5000"]