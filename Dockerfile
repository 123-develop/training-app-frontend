#!/bin/bash
FROM --platform=linux/amd64 nginx:1.21.4-alpine

WORKDIR /app

COPY ./dist /usr/share/nginx

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/nginx.conf

# Make port 80 available to the world outside this container
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]