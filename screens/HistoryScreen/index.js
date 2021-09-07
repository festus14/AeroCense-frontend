import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from '../../components/Header';
import {MAIN_COLOR} from '../../utility/colors';

const HistoryScreen = () => {
  return (
    <>
      <Header
        title="History"
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
        <Text>History!</Text>
      </View>
    </>
  );
};

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

export default HistoryScreen;
