#lightweight nginx image for the web server
FROM nginx:alpine

# Copy only the necessary files (excluding SCSS)
COPY src/index.html src/css/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command to run nginx in the foreground 
CMD ["nginx", "-g", "daemon off;"]