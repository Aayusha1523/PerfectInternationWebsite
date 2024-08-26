# Step 1: Build the application
FROM node:18-alpine as build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files from the current directory to the container's /app directory
COPY . .

# Build the React Vite application
# !RUN npm run build

# Step 2: Serve the build with a static server
# !FROM nginx:alpine

# Copy the build output from the previous step
#! COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to serve the application
EXPOSE 5173 

# Start nginx
#! CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "dev", "--", "--host"]
