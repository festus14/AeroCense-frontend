import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {MAIN_COLOR, GREY} from '../utility/colors';
import SettingsScreen from '../screens/SettingsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import HomeStackNavigator from './HomeStackNavigator';
import {StyleSheet, Pressable} from 'react-native';

const Tab = createBottomTabNavigator();

export default function HomeBottomNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'HomeStackNavigator':
              iconName = focused ? 'ios-scan' : 'ios-home';
              break;

            case 'SettingsScreen':
              iconName = focused ? 'ios-settings' : 'ios-settings-outline';
              break;
            case 'HistoryScreen':
              iconName = focused ? 'ios-pie-chart' : 'ios-pie-chart-outline';
              break;

            default:
              break;
          }

          // You can return any component that you like here!
          if (route.name === 'HomeStackNavigator') {
            let scanHomeComponent = (
              <Pressable
                onPress={() =>
                  navigation.navigate('HomeScreen', {fetch: false})
                }
                style={styles.scanBtn}>
                <Ionicons name={iconName} color="#fff" size={40} />
              </Pressable>
            );

            if (navigation.isFocused()) {
              scanHomeComponent = (
                <Pressable
                  onPress={() =>
                    navigation.navigate('HomeScreen', {fetch: true})
                  }
                  style={styles.scanBtn}>
                  <Ionicons name={iconName} color="#fff" size={40} />
                </Pressable>
              );
            }
            return scanHomeComponent;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: MAIN_COLOR,
        inactiveTintColor: GREY,
      }}>
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{title: 'History'}}
      />
      <Tab.Screen
        name="HomeStackNavigator"
        component={HomeStackNavigator}
        options={{title: ''}}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  scanBtn: {
    position: 'absolute',
    bottom: 0, // space from bottombar
    height: 60,
    width: 60,
    borderRadius: 68,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
  },
});
