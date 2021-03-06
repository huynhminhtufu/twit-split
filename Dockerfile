FROM node:10.15.0 as builder

# Create working directory
RUN mkdir -p /root/src/app
WORKDIR /root/src/app
ENV PATH /root/src/app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json
COPY . .

# Fetch dependencies, run script optimize images, build
RUN yarn
RUN npm run build

# Copy files to machine
FROM nginx:alpine

WORKDIR /root/src/app

COPY --from=builder /root/src/app/dist/ /usr/share/nginx/html