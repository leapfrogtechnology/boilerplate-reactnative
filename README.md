# React Native Boilerplate

## Requirements
* [Node.js](https://nodejs.org/en/) >= 6.5.0
* [NPM](https://www.npmjs.com/) >= 3.10.0
* [React Native CLI](https://www.npmjs.com/package/react-native-cli) >= 2.0.1
* [Android SDK](https://developer.android.com/studio/index.html) = 6.0 (Marshmallow)

## Installation
* First install all react native dependencies. [Follow these steps here](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies).
* Clone the repository from [https://github.com/leapfrogtechnology/boilerplate-reactnative](https://github.com/leapfrogtechnology/boilerplate-reactnative):

          $ git clone git@github.com:leapfrogtechnology/boilerplate-reactnative.git
* Navigate to the directory `cd boilerplate-reactnative` and install all dependencies listed in [package.json](package.json) using npm:

          $ npm install

## Usage

* For Development:

    > If you want to run your app in device, first you need to [setup your device](https://facebook.github.io/react-native/docs/running-on-device.html#setting-up-an-android-device).
    
    Start react native development server:
 
         $ react-native start

    Install android app in emulator / phone:
    
         $ react-native run-android

* For Production:
    Follow [these](https://facebook.github.io/react-native/docs/signed-apk-android.html) steps for generating signed apk for android app.

## Lint (For Development)

[ESLint](https://eslint.org/) is being used for style checking. It is recommended to run the linter before committing anything:

    $ npm run lint

Fix common linter issues using:

    $ npm run lint:fix

## License

Copyright © 2017 [Leapfrog Technology](http://lftechnology.com/)
