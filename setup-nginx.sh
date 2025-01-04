# !/bin/bash

nginx_home="/usr/share/nginx/html/"
proj_name="seqte"
proj_repo="..."

if [ -d F ]; then
    cp -r ./set

sudo rm -rf "./$proj_name" 

git clone "https://github.com/endotic/seqte.git ./$proj_name"

sudo cp -r "${proj_name}/*" "${nginx_home}"