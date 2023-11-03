FROM node:16 as builder

# Create app directory
WORKDIR /app
COPY . .

# Install app dependencies
RUN apt update
RUN apt install -y npm
RUN npm install serve -g
RUN npm install
RUN npm run build

EXPOSE 80
ENTRYPOINT ["serve", "-s", "dist", "-p", "80"]



