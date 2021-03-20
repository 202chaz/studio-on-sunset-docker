# base image
FROM node:15

# set working directory

WORKDIR /usr/src/app/frontend

COPY package*.json ./

RUN npm install -g @angular/cli @angular-devkit/build-angular && npm install

# add app
COPY . .

EXPOSE 4200

CMD ["npm", "run", "start"]
