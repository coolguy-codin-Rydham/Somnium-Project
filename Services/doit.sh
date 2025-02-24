#!/bin/bash

# List of folders
folders=("Admin-Service" "Auth-Service" "Course-Service" "Misc-Service" "Payment-Service")

# Loop through each folder and run commands
for folder in "${folders[@]}"; do
    echo "Processing: $folder"
    
    # Navigate to the folder
    cd "$folder" || { echo "Failed to enter $folder"; exit 1; }

    # Run your commands here
    # pnpm install express mongoose cors dotenv lodash 
    # pnpm install cookie-parser
    # pnpm install nodemon -D
    # mkdir models/ routes/ middlewares/
    touch models/index.js

    # Return to the original directory
    cd ../ || exit 1

done

echo "All folders processed."
