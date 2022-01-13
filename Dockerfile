FROM node:14.18 AS build-stage
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --verbose

FROM node:14.18
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY --from=build-stage /usr/src/app/dist ./dist
EXPOSE 3000
CMD npm start