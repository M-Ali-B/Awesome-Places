# Important #

1. This is the continuity of AwesomeApp that failed becasue I use ```expo-cli``` and then ```ejected``` .
2. This project is done by ```react-native-cli```  and the app is running smooth .
3. I have worked for atleast 48 hours for debugging and finding the solutions .


## Commands to run ##
1. react-native run-android
2. react-native run-ios
3. yarn add <dependency-name>
4. Remember to *bundle* the files when you add new dependency :
i. when you have index.android.js file as starting screen for android
```react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/```
ii.when you want a single index file
```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/```



### Changes in Package.json library

1. "react-native-navigation": "^2.13.1" is changed to "react-native-navigation": "^1.1.277" because of some functionality and tutorials use of that specific code.

 