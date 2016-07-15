#!/bin/bash

if [[ $PORT == "" ]]
then
    PORT=4000
fi

export PORT

cd "$(dirname $0)/server"
npm i && node server.js
