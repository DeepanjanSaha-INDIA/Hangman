FROM alpine:3
COPY . /hangman
RUN apk add npm; npm install -g @angular/cli
EXPOSE 4200
WORKDIR /hangman
CMD ng serve --host 0.0.0.0