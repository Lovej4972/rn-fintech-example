# README #

Node express server to demonstrate add/update/remove account actions

This server is using post methods to accept email and account parameters and
returns a successful message in return to the client app.

The server is deployed on heroku https://rnfintechex.herokuapp.com/ and configured in the client ajax.js file
please follow local install if you want to run it locally

POST actions:

- `/addAccount`
- `/updateAccount`
- `/removeAccount`

#local install (already deployed on heroku)
requirements:
yarn https://yarnpkg.com/en/docs/install

go to /path/rnFintechExample/src/ajax.js
update serverRequest() to use LOCALHOST instead of HOST

go to /path/server

run `yarn`

run `npm start` to start the server

localhost: `http://localhost:8080/`
