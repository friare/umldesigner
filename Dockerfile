# Step 1: Use an official Node.js image to build the project
FROM node:16 AS build-stage

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the built files
FROM nginx:alpine AS production-stage

# Step 8: Copy the built files from the previous stage to the Nginx web root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Step 9: Expose the port that Nginx uses
EXPOSE 80

# Step 10: Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
