#!/bin/bash
set -e

# Stop and remove any existing container with the same name
if [ "$(docker ps -aq -f name=android-container)" ]; then
    docker stop android-container || true
    docker rm android-container || true
fi

# Pull the latest image
docker pull budtmo/docker-android:emulator_13.0
docker run -d -p 6080:6080 -p 4723:4723 -e EMULATOR_DEVICE="Samsung Galaxy S10" -e WEB_VNC=true -e APPIUM=true --device /dev/kvm --name android-container budtmo/docker-android:emulator_13.0 
