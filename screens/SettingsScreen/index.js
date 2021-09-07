import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {MAIN_COLOR} from '../../utility/colors';

export default function SettingsScreen() {
  return (
    <>
      <Header
        title="Settings"
        leftComponent={
          <Image
            source={require('../../assets/images/color-logo.png')}
            style={styles.image}
          />
        }
        leftStyle={styles.leftStyle}
        titleStyle={styles.titleStyle}
        details={styles.details}
      />
      <View style={styles.container}>
        <Text>Settings!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  leftComponent: {
    width: '100%',
    fontSize: 18,
    color: MAIN_COLOR,
  },
  leftStyle: {
    width: '25%',
    alignItems: 'center',
  },
  details: {
    justifyContent: 'flex-start',
  },
  image: {height: 20, width: 100},
});
