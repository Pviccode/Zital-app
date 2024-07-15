import { StyleSheet, View, StatusBar} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useCallback, useState } from "react";
import * as Font from 'expo-font';
import { Pacifico_400Regular } from '@expo-google-fonts/pacifico';
import { Manrope_500Medium } from '@expo-google-fonts/manrope';
import { Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium, 
Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic, Poppins_700Bold ,Poppins_700Bold_Italic } from '@expo-google-fonts/poppins';
import IntroScreens from "./IntroScreens";

// // Keep the splash screen visible while we wait for the app resources to load
SplashScreen.preventAutoHideAsync();

export default function Splashscreen() {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepareApp() {
            try {
                // Load fonts asynchronously
                await Font.loadAsync({Pacifico_400Regular});
                await Font.loadAsync({Manrope_500Medium});
                await Font.loadAsync({
                    Poppins_400Regular, Poppins_400Regular_Italic, Poppins_500Medium, 
                    Poppins_500Medium_Italic, Poppins_600SemiBold, Poppins_600SemiBold_Italic,
                    Poppins_700Bold, Poppins_700Bold_Italic
                });
                await new Promise(resolve => setTimeout(resolve, 3000))          //delay for extra three seconds
            } catch (error) {
               console.warn(error)
            } finally {
               setAppIsReady(true);           //tell the application content to render
            }
        }
        prepareApp();
    }, [])

    useEffect(() => {
        if (appIsReady) {
            async function hideSplashScreen() {
                await SplashScreen.hideAsync();        //This tells the splash screen to hide once appIsReady is set to true
                console.log('why')
            }
            hideSplashScreen();
        }

    }, [appIsReady])

    if (!appIsReady) {
        return null;             // Render nothing until fonts are loaded and app is ready
    }
    
  return (
    <View style={styles.container}>
      <IntroScreens />
      <StatusBar style="auto" barStyle={'dark-content'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  },
});














//         // Hide splash screen after three seconds once app loads
//         const splashScreenTime = setTimeout(() => {
//             SplashScreen.hideAsync()
//         }, 3000)

//         return () => {
//             clearTimeout(splashScreenTime);
//         }