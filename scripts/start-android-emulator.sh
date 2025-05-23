#!/bin/bash

# List available Android emulators
emulator_name=$(emulator -list-avds | head -n 1)

if [ -z "$emulator_name" ]; then
    echo "No Android emulators found."
    exit 1
fi

echo "Starting emulator: $emulator_name"
emulator -avd "$emulator_name"
