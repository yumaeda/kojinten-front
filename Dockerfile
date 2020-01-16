FROM node:alpine as build

WORKDIR /app
COPY . /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install --silent
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
