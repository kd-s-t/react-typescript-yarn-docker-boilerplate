# Setup without docker  
yarn  
yarn run dev  
  
# docker local  
docker-compose -f ops/local/docker-compose-local.yml build   
docker-compose -f ops/local/docker-compose-local.yml up   
  
# docker production  
docker-compose ops/prod/docker-compose.yml up -d  
  
# Ref:  
### Setup react with webpack and babel  
https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9#aa06  

### Dockerize ReactJs App  
https://learn2torials.com/a/dockerize-reactjs-app  

### Webpack building and livereload in Docker container  
https://www.youtube.com/watch?v=3xDAU5cvi5E (obsolete)  
https://blog.logrocket.com/complete-guide-full-stack-live-reload/  

# Tech stack:  
Reactjs  
Webpack  
Babel  
Mui5  
ElementUI  
ReactFlow   
Typescript  
Yarn  

~ developed by kenn  
