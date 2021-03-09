# _{Mentor$chip App Beta V1}_

#### _{Mentor Side Mentor$chip Web App Beta Version}, {3/8/2021}_

#### By _**William Donovan-Seid**_

## Description

_This is the basic Mentor$chip web app for Mentors to use in the upcoming beta test. A user will be able to navigate through the app, create a profile, create a scholarship application and have them be sent to Firestore._

_Further Updates will include:_
* _Look at your created Profile_
* _Look at your submitted Scholarships_

## Setup/Installation Requirements

1. Git Clone or Download Zip file from https://github.com/wdonovanseid/reactjs-mentorschip-betaV1 (make sure to unzip)
2. Download Git Bash, Node.js, Visual Studio Code
3. Open reactjs-mentorschip-betaV1 (otherwise known as the root directory) in Visual Studio Code
4. Create a .env file in the root directory
5. Put the following code block inside the file and save.

```
REACT_APP_FIREBASE_API_KEY = "YOUR OWN KEYS"
REACT_APP_FIREBASE_AUTH_DOMAIN = "YOUR OWN KEYS"
REACT_APP_FIREBASE_DATABASE_URL = "YOUR OWN KEYS"
REACT_APP_FIREBASE_PROJECT_ID = "YOUR OWN KEYS"
REACT_APP_FIREBASE_STORAGE_BUCKET = "YOUR OWN KEYS"
REACT_APP_FIREBASE_MESSAGING_SENDER_ID = "YOUR OWN KEYS"
REACT_APP_FIREBASE_APP_ID = "YOUR OWN KEYS"
```

6. Open git bash and navigate to the root directory
7. Type and execute "npm install"
8. Type and execute "npm run start"
9. Your default browser should show the application running at http://localhost:3000/

## Firestore:
Currently the application only works if your firestore rules are set to 

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

This will later be changed for security purposes.

## Known Bugs

_There are is a problem with the max attribute on scholarshipAwardLimitNumber not being set, but everything else should work as intended._

## Support and contact details

_To find out more about Mentor$chip go here:_ https://mentorschip.com/

_If there are any questions or concerns about the program itself, feel free to contact me at wdstwo@live.com._

## Technologies Used

_HTML_
_JavaScript_
_ReactJS_
_ReactRedux_
_Firestore_
_NodeJS_

### License

This software is licensed under the MIT license.

Copyright (c) 2021 **_William Donovan-Seid_**