import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeBottomNavigator from './HomeBottomNavigator';
import SplashScreen from '../components/SplashScreen';

export default function MainAppNavigator() {
  const [isSplash, setIsSplash] = useState(true);
  const [isSecondSplash, setSecondIsSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsSplash(false);
    }, 2000);
    setTimeout(() => {
      setSecondIsSplash(false);
    }, 4000);
  }, []);
  return (
    <NavigationContainer>
      {isSplash ? (
        <SplashScreen first />
      ) : isSecondSplash ? (
        <SplashScreen />
      ) : (
        <HomeBottomNavigator />
      )}
    </NavigationContainer>
  );
}
