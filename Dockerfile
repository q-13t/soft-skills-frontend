FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:stable-alpine AS production
# Copy the build output from the 'build' stage to the Nginx static file directory
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port 80 (default Nginx port)
EXPOSE 80
# The default CMD of Nginx in this image serves the files
CMD ["nginx", "-g", "daemon off;"]
