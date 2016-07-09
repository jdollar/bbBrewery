# bbBrewery
Programming exercise for BlackBaud. Pulls in data from brewerydb and displays it using their sky ux framework

- - -

##Prerequisites

* npm
* node
* grunt-cli (through npm global install)

## Build

To setup the local environment run the following:

```
npm install
grunt init
```

After running 'npm init' it will create a user specific config.json file under config/USERNAME.config.json. The placeholder values in that config.json file will need to be updated. In particular the build directory and the app key that you will be using with the proxy server.

After setting up the config.json run the following to deploy the clientside angular app and start the express server:

```
npm start
```

At which point a proxy server should be running at localhost:3000 and you should be able to access your angular instance through the build directory specified in the USERNAME.config.json
