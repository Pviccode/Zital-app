import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Splashscreen from './Screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './Navigators/BottomTabNavigator';
// import TopTabNavigator from './Navigators/TopTabNavigator';


export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      {/* <Splashscreen /> */}
      <BottomTabNavigator />
      {/* <TopTabNavigator /> */}
      <StatusBar style="auto"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#097c80',
  },
});
