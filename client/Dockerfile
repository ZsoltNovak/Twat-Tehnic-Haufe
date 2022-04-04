# pull official base image
FROM node:16.14-alpine

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH
ENV PATH="client/node_modules/.bin:$PATH"

# add app
COPY . .

# run build
RUN npm run build

# start app
CMD ["npm", "start"]