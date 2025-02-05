#!/bin/bash

nginx_home="/usr/share/nginx/html/"
proj_name="seqte"
proj_repo="https://github.com/endotic/seqte.git"

if [ -d F ]; then
    cp -r "${proj_name}" "_${proj_name}"
fi

sudo rm -rf "./$proj_name" 

git clone "${proj_repo}"

sudo cp -r "${proj_name}/" "${nginx_home}"

echo "Done."