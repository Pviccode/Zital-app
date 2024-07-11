import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";
import FavouritesScreen from "../Screens/FavouritesScreen";
import AcctProfileScreen from "../Screens/AcctProfileScreen";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import TopTabNavigator from "./TopTabNavigator";

export default function BottomTabNavigator() {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? "red" : "black"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "cart" : "cart-outline"}
                size={30}
                color={focused ? "red" : "black"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ focused }) => {
            return (
              <AntDesign
                name={focused ? "heart" : "hearto"}
                size={24}
                color={focused ? "red" : "black"}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Account Profile"
        component={AcctProfileScreen}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome5
                name={focused ? "user-alt" : "user"}
                size={24}
                color={focused ? "red" : "black"}
              />
            );
          },
        }}
      />
      {/* <BottomTab.Screen name="General" component={TopTabNavigator}/> */}
    </BottomTab.Navigator>
  );
}

//the focused prop is provided to the tabBarIcon function when a tab is active or focused. This prop allows you to conditionally style the icon (and its label, if applicable) to indicate the active state visually.
