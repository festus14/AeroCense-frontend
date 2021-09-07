// import React from 'react';

// const customTabBarStyle = {
//   activeTintColor: '#0091EA',
//   inactiveTintColor: 'gray',
//   style: {backgroundColor: 'white'},
// };
// return (
//   <Tab.Navigator
//     initialRouteName="Home"
//     activeColor="#fff"
//     tabBarOptions={customTabBarStyle}
//     shifting="false">
//     <Tab.Screen
//       name="Home"
//       options={{
//         tabBarLabel: '',
//         tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
//       }}
//       component={HomeScreen}
//     />
//     <Tab.Screen
//       name="Workout"
//       options={{
//         tabBarLabel: '',
//         tabBarIcon: ({color}) => (
//           <Icon name="fitness-center" color={color} size={26} />
//         ),
//       }}
//       component={WorkoutTabScreen}
//     />
//     <Tab.Screen
//       name="Add"
//       options={{
//         tabBarLabel: '',
//         tabBarIcon: ({color}) => (
//           <View
//             style={{
//               position: 'absolute',
//               bottom: 0, // space from bottombar
//               height: 68,
//               width: 68,
//               borderRadius: 68,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Icon name="add-circle-outline" color="grey" size={68} />
//           </View>
//         ),
//       }}
//       component={PayScreenComponent}
//     />
//     <Tab.Screen
//       name="Store"
//       options={{
//         tabBarLabel: '',
//         tabBarIcon: ({color}) => <Icon name="store" color={color} size={26} />,
//       }}
//       component={StoreLandingScreen}
//     />
//     <Tab.Screen
//       name="Profile"
//       options={{
//         tabBarLabel: '',
//         tabBarIcon: ({color}) => (
//           <Icon name="perm-identity" color={color} size={26} />
//         ),
//       }}
//       component={ProfileScreen}
//     />
//   </Tab.Navigator>
// );
