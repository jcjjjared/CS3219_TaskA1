# Use a prebuilt node image
FROM node:9

# Set the working directory to /app
WORKDIR /app

# Copy the package.json file that contains all the dependencies to the container
COPY package.json /app

# Run yarn to retrieve all dependencies
RUN npm install

# Copy the rest of the project files in the container
COPY . .

# Expose port 8088 so that it can be accessed when the container runs
EXPOSE 8888

# Start the server
CMD ["npm", "start"]
