# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ../../package.json /frontend

# install yarn dependencies
RUN yarn

# copy other project files
COPY . .

# build the folder
RUN yarn run build

# Handle Nginx
FROM nginx
COPY --from=builder /frontend/build /usr/share/nginx/html
COPY ../docker/nginx/default.conf /etc/nginx/conf.d/default.conf