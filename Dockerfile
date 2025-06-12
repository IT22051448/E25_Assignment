FROM nginx:alpine

# Copy only the necessary files (excluding SCSS)
COPY src/index.html src/css/ /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]