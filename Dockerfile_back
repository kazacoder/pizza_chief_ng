FROM node:16-alpine
WORKDIR /frontend
RUN npm install -g @angular/cli@14
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4200
CMD echo "N" | ng serve --host 0.0.0.0 --port 4200
