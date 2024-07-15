import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNavigator from './BottomTabNavigator';
import HomeScreenCustomHeader from '../Components/HomeScreenCustomHeader';
import IntroScreens from '../Screens/IntroScreens';
import Splashscreen from '../Screens/SplashScreen';

export default function MainScreenNavigator() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name='Splash Screen' component={Splashscreen} options={{headerShown: false}}/>
      <Stack.Screen name='Bottom Tab' component={BottomTabNavigator} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
