FROM node:18-alpine
ENV APP_ROOT /usr/src/expressapp
RUN mkdir -p $APP_ROOT
WORKDIR $APP_ROOT
COPY package.json $APP_ROOT
RUN npm install --force
ADD . .
EXPOSE ${PORT}
CMD [ "npm", "run", "server:watch" ]