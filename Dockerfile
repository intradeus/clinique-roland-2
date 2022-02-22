FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install server dependencies
RUN npm install express@4.17.1

# Bundle app source
COPY . .

EXPOSE 5000
CMD [ "node", "server.js" ]
