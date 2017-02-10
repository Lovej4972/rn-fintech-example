# rn-fintech-example

gif demo: http://recordit.co/EDlomi63FE

## client - Mobile app

### Install
requirements:
 * `brew install node`

 * `brew install watchman`

 * `npm install -g react-native-cli`

 install dependencies run `npm insatll`

 * run the application `react-native run-ios`

 * note the server is deployed on heroku https://rnfintechex.herokuapp.com/ if you want to run it locally in order for the client application to work correctly. follow the instructions to install and run the server: https://github.com/shyaniv7/rn-fintech-example/tree/master/server

### Description
  This mobile app will help you manage you finances by adding cash, investment and debt accounts and view your networth
  The app will allow you to modify and remove accounts.

  Design considerations:
  As requested i have used oop concepts for demonstration purposes with that being said when using it in combinations with redux, redux     was able to provide me with the same level of organization without creating and extending classes.
  When designing a react native mobile application it is important to to allow the design to be ui driven to increase performance and       reduce the ammount of data processing for the sake of ui display.
  In order to provide smooth workflow i chose to implement navigation using the react-native Navigator object, this allowed me to move between pages and separate the ui and workflow into separate 'pages' it also allows me to add additional pages and functionality in the future without the complexity of hiding or showing content on the page.

  performing CRUD actions on the user's accounts will also trigger a server request which at the moment will post to the server and alert a server response on the client side to demonstrate client and server integration (per the requirements)

  Reducers:
  The accounts reducer will contain a map of users and their accounts

  `{ john.smith@gmail: [{ account1, account2 ... }], ... }`
  the idea being that it is much easier to access the map using the current user email and retrieve the accounts which is also how i would    store such data in a nosql database such as firebase.

  reference: https://hackernoon.com/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a#.jedaa62he

  The user reducer is only used to set the user data in the app state for easy access later on throughout the app workflow.

  The selected reducer maintains the index of the selected account from the list of user accounts displayed in the summary page. ideally      each accounts will have an id (key) and instead of a list of accounts we would use a map by key and a list of keys in the reducer for     performace and simplicity and to avoid iterating through an array each time we perform an action on the accounts list.

## Structure:

### App.js -
  displays user info, account summary, calculates the user's networth and provides the ability to add an account by navigating to    the accountform page.

### AccountForm.js -
  displays the add form and a button group with types of accounts to choose from and allows a user to add an account of a certain type.

### Account.js -
  displays the selected account information and allows a user the ability to update and/or remove an account.

### dataTypes/ -
  contains the User class.
  Account base class, CashAccount, DebtAccount, and InvestmentAccounts which all extend Account.

  note: I did not leverage the oop setters/getters of the objects when manipulating the classed due to redux immutability being a lot easier and allowed me stay consistant with the design. (oop was used for the purpose of the code sample requirement)

## User Interface
 https://github.com/react-native-community/react-native-elements

 was used as a 'bootstrap' like library for prototyping purposes

## Known Issues
  * The ability to add additional holdings for an investment account is not working as expected instaed it only counts the last holding added in the form.
  * Input validation on numeric fields (when using a device the keyboard type would be numeric therefore validation is not needed when on an actual device)


# server - Node express server
  https://github.com/shyaniv7/rn-fintech-example/tree/master/server
