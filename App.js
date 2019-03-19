import {Navigation} from 'react-native-navigation';

 import AuthScreen from './src/screens/Auth/Auth';

 // Register Screens
Navigation.registerComponent('AwesomePlaces.AuthScreen', ()=> AuthScreen);

 // Start a App 

   
        // Navigation.startSingleScreenApp({

        //     screen:{
        //         screen: "AwesomePlaces.AuthScreen",
        //         title:"Login"
        //     }

        // });

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            component: {
                name: 'navigation.playground.WelcomeScreen'
            }
        }
    });
});
