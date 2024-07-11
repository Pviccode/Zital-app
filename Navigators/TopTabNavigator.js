import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import HomeScreen from '../Screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

export default function TopTabNavigator() {
    const TopTab = createMaterialTopTabNavigator();
  return (
    <TopTab.Navigator>
        <TopTab.Screen name='Explore' component={HomeScreen}/>
        <TopTab.Screen name='Furniture' component={HomeScreen}/>
        <TopTab.Screen name='Electronics' component={HomeScreen}/>
        <TopTab.Screen name='Sports' component={HomeScreen}/>
        <TopTab.Screen name='Beauty & Health' component={HomeScreen}/>
        <TopTab.Screen name='Toys & Hobbies' component={HomeScreen}/>
        <TopTab.Screen name='Kiddies Wears' component={HomeScreen}/>
        <TopTab.Screen name='Fashion' component={HomeScreen}/>
    </TopTab.Navigator>
  )
}