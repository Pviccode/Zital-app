// import { StyleSheet, View, StatusBar, Text } from "react-native";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";

// // Keep the splash screen visible while we wait for the app resources to load
// SplashScreen.preventAutoHideAsync();

// export default function Splashscreen() {
//     useEffect(() => {
//         // Hide splash screen after three seconds once app loads
//         const splashScreenTime = setTimeout(() => {
//             SplashScreen.hideAsync()
//         }, 3000)

//         return () => {
//             clearTimeout(splashScreenTime);
//         }
//     }, [])

//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" barStyle={'light-content'}/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
// });
