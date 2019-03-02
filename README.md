## Zalora TwitSplit Assignment

## Stack

- Vue (I like React but choose Vue for faster develop)
- Vue Router (no need switch router here, but it's fine)
- Vuetify (quick & powerful UI create)
- Jest (testing)
- Docker (quick run)

# Why

- Because this project is small, I would like to use Vue to quick create the project structure and focus to code.

# Run

## Docker

Clone repo and switch to root dir context, build image:

```
docker build -t twitsplit .
```

Run Docker container at port 3000:

```
docker run -d --name twitsplit -p 3000:80 twitsplit:latest
```

## Node.js

Install Node.js running environment with `yarn`:

```
npm install yarn --global
```

Serve project:

```
yarn serve
```

Build project:

```
yarn build
```

Run unit test:

```
yarn test:unit
```
