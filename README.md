#! /usr/bin/bash   // your bash

 npx kill-port 3000 3001 3002 3003 // kill port if already run

 current_directory=$(pwd) //your current directory

 directories=("project-one" "project-two" "project-three" "project-four")
for ((i=0; i<${#directories[@]}; i++)); do
  dir="${directories[i]}"
  full_path="$current_directory/$dir"
  echo "Starting server in $dir"

gnome-terminal --tab --title="$dir"  --working-directory="$full_path" --command="bash -c 'nodemon app; exec bash'"
gsettings --tab-position="bottom"
done
