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

# Push to registry :
    docker push registry.loutre.me/clinique-roland-2:latest


# ON THE SERVER :
# pull from registry 
    docker pull registry.loutre.me/clinique-roland-2:latest
# Stop current container
    docker stop clinique-rolnad
# Remove current container
    docker rm clinique-roland
# Launch new version
    cd /home/ubuntu/nextcloud-container 
    docker-compose up -d