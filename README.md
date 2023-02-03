##
# Installation
##

# install dependencies
    npm install

# Run project :
    npm run dev

# Build project :
    npm run build

# Start project in prod
    npm run start


##
# Docker
##

# ON LOCAL COMPUTER
# Build project :
    npm run build
# Build for docker :
    docker build . -t registry.loutre.me/clinique-roland-2:latest
# (Optional) Test run on local 
    docker run -d --name clinique-roland -p 5000:5000 registry.loutre.me/clinique-roland-2:latest
# (Optional) Login to registry
    docker login registry.loutre.me
# Push to registry :
    docker push registry.loutre.me/clinique-roland-2:latest


# ON THE SERVER :
# Launch new version 
    docker-compose pull && docker-compose up -d