import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

//作成したコンポーネントを読み込む
import Home from './Home';
import Contact from './Contact';

//Tab生成
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = "ios-home";
            if (route.name === "Contact") iconName = "ios-list";
            return <Ionicons name={iconName} size={size} color={color} />
          },
          "tabBarActiveTintColor": "blue",
          "tabBarInactiveTintColor": "gray",
          "tabBarStyle": [
            {
              "display": "flex"
            },
            null
          ]
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Contact" component={Contact} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}