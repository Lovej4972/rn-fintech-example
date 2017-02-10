# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###
if you dont have mongodb installed
`brew install mongodb`

go to /path/apolloServer 
run `yarn`
run `mongod` to start the db
run `node app.js` to start the server
go to `http://localhost:8080/graphiql`

try to run a query for the example schema:
`query {
  president(name: "George Washington") {
    name
    term
    party
  }
}`

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact