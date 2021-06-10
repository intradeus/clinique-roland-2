

# Build for docker :

    docker build . -t registry.loutre.me/clinique-roland-2:<version>

# Run local on docker 

    docker run -d --name clinique-roland -p 5000:5000 registry.loutre.me/clinique-roland-2:<version>

# push to registry :
    docker push registry.loutre.me/clinique-roland-2:<version>

# pull from registry 
    docker pull registry.loutre.me/clinique-roland-2:<version>