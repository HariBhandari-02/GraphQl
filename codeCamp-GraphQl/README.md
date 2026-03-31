## Practicing GraphQl from (codecamporg) from youtube

# Setup process for graphql server

```bash
- To make file directory with name -> codeCamp-GraphQl
mkdir codeCamp-GraphQl

- to change directory path to codeCamp-Graphql
cd codeCamp-Graphql

- Initialize a new node.js project
 npm init --yes && npm pkg set type="module"
```

- Installing Depenencies

```bash
  yarn add @apollo/server graphql
```

- create index.js file

# Installing nodemon

- So to run file live using nodemon
- We can also use nodemod index.js to run live server OR we can define inside scripts.

```bash
yarn global add nodemon

yarn add --dev nodemon


"scripts": {
    "start": "nodemon index.js",
   },

```
