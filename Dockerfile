FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./ 

# Install dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Expose the port the app runs on
EXPOSE 5000

# Start the application using shell form
CMD npm start