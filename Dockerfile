# Use the prebuilt Android emulator with Appium support as the base image
FROM budtmo/docker-android:emulator_13.0

WORKDIR /opt/code/app

COPY package*.json ./
RUN npm ci

COPY . .

# Expose required ports (VNC, Appium, etc.)
EXPOSE 6080 4723

CMD ["npm", "wdio"]
