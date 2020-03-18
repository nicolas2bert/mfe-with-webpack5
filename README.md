# mfe-with-webpack5

Webpack 5 Federation POC with one Shell App and two MFE React/Redux Apps

## Requirements

### [Node](http://nodejs.org/) and Yarn

```
$ node --version
v10.16.0

$ yarn --version
1.17.3
```


## Getting Started


### Clone project

```
git clone https://github.com/nicolas2bert/mfe-with-webpack5.git
```

### Install dependencies


Install shell app and the two MFEs dependencies

```
yarn --cwd shell install

yarn --cwd app1 install

yarn --cwd app2 install
```


## Running in development mode

Run shell app and the two MFEs

To make debugging easier, we will open up a new terminal window for each app:

**shell** runs on port *7000*
```
cd shell
yarn start
```

**app1** runs on port *7001*
```
cd shell
yarn start
```

**app2** runs on port *7002*
```
cd shell
yarn start
```
