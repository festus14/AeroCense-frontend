import React from 'react';
import {Image, StatusBar, View, Platform} from 'react-native';
import {ALMOST_WHITE, MAIN_COLOR} from '../utility/colors';

function SplashScreen({first}) {
  return (
    <>
      <StatusBar
        barStyle={!first ? 'dark-content' : 'light-content'}
        backgroundColor={first ? MAIN_COLOR : ALMOST_WHITE}
      />
      <View
        style={{
          ...styles.container,
          backgroundColor: first ? MAIN_COLOR : ALMOST_WHITE,
        }}>
        <View style={styles.center}>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={
              first
                ? require('../assets/images/logo.png')
                : require('../assets/images/color-logo.png')
            }
          />
        </View>
      </View>
    </>
  );
}

export default SplashScreen;

const styles = {
  container: {
    backgroundColor: MAIN_COLOR,
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  logo: {
    height: '50%',
    width: '40%',
  },
  center: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
