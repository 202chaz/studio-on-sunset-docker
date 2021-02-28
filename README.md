# studio-on-sunset

##### 1. Docker Desktop
1. Download Docker Desktop from the following [link](https://desktop.docker.com/mac/stable/Docker.dmg) (Mac)
2. Follow installation instructions to setup Docker Desktop

##### 2. App Platform
1. Navigate to the Studio on Sunset repository within the Terminal
2. Enter the following command in the Terminal
        - Note: Only needs to be run the first time during setup
 ```docker-compose build```
3. Wait for all services to be built
4. Run the following command to spin up all the services
 ```docker-compose up```

##### 4. Service URL's
- Frontend - Angular
 ```localhost:4200```
- Backend - Strapi
 ```localhost:1337```


#### 5. Prod build command
```docker-compose -f docker-compose.prod.yml build```
```docker-compose -f docker-compose.prod.yml up```
