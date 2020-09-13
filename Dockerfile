FROM alpine:3
COPY . /hangman
RUN apk add npm; npm install -g @angular/cli
EXPOSE 4200
WORKDIR /hangman
CMD ng serve --host 0.0.0.0

# Note (building image): docker build -t <image_name> .
# Note (running container): docker run --rm -it -p 4200:4200 <image_name>