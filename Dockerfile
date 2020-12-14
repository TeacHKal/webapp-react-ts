FROM node:alpine as builder
# Set image metadata
LABEL version="1.0"
LABEL description="react-app"
# Create app directory
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
# install dependencies
COPY package.json /usr/src/app/package.json
RUN npm cache clean --force && npm install
RUN npm install react-scripts@3.3.0 -g --silent
# copy app source to image _after_ npm install so that
# application code changes don’t bust the docker cache of
# npm install step
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


