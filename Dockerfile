# base image
FROM node:14.15.5-alpine

WORKDIR /usr/src/app

# installing packages
COPY package*.json ./
RUN npm install

# adding code 
COPY . .

# exposing port
EXPOSE 4000