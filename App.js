/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructure/theme';
import {RestaurantScreen} from './src/features/restaurants/screens/restaurants_screen';
import {MapScreen} from './src/features/restaurants/screens/map_screen';
import {SettingsScreen} from './src/features/restaurants/screens/settings_screen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantContextProvider} from './src/services/restaurants/restaurants.context';
import {LocationContextProvider} from './src/services/location/location.context';
const Tab = createBottomTabNavigator();
const TAB_ICON = {
  Restaurant: 'restaurant',
  Map: 'map',
  Settings: 'settings',
};

const createScreenOptions = ({route}) => {
  const iconName = TAB_ICON[route.name];

  return {
    tabBarIcon: ({size, color}) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

function Mytabs() {
  return (
    <Tab.Navigator screenOptions={createScreenOptions}>
      <Tab.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LocationContextProvider>
          <RestaurantContextProvider>
            <NavigationContainer>
              <Mytabs />
            </NavigationContainer>
          </RestaurantContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
    </>
  );
}
