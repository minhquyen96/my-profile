# build stage
FROM node:13-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN ls -l /app/dist

# production stage
FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
