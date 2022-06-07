# Setup without docker  
yarn  
yarn run dev  
  
# docker local  
docker-compose -f ops/local/docker-compose-local.yml up -d -v $$(pwd)/frontend:/app frontend/app  
docker-compose -f ops/local/docker-compose-local.yml build
  
# docker production  
docker-compose ops/prod/docker-compose.yml up -d  
  
# Ref:  
### Setup react with webpack and babel  
https://medium.com/age-of-awareness/setup-react-with-webpack-and-babel-5114a14a47e9#aa06  

### Dockerize ReactJs App 
https://learn2torials.com/a/dockerize-reactjs-app

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
