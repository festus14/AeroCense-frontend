/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {LIGHT_GREY, MAIN_COLOR} from '../../utility/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utility/constants';
import {sendRequest} from '../../utility/helpers';
import * as Progress from 'react-native-progress';

const HomeScreen = ({route, navigation}) => {
  let fetch = route?.params?.fetch ?? false;

  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const [latestReading, setLatestReading] = useState({});

  const animate = () => {
    let oldP = progress;
    let id = setInterval(() => {
      console.log(oldP);
      if (+oldP >= 1) {
        clearInterval(id);
        setProgress(0);
      } else {
        oldP = oldP + 0.1;
        setProgress(oldP);
      }
    }, 100);
  };

  const getLatestReadings = async () => {
    setIsLoading(true);
    try {
      let res = await sendRequest(
        'https://aerocense.netlify.app/.netlify/functions/server/air-quality-readings',
        'GET',
        {},
        {},
      );
      let resJson = await res.json();

      if (resJson) {
        setLatestReading(resJson.latest);
        setIsLoading(false);
        navigation.navigate('ScanResultScreen', {...resJson.latest});
      }

      console.log('ResJson...', resJson);

      return null;
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return null;
    }
  };

  useEffect(() => {
    if (fetch && navigation.isFocused) {
      animate();
      getLatestReadings();
    }
  }, [fetch, navigation]);

  return (
    <>
      <Header
        title="AeroCense"
        rightIcon="ios-information-circle-outline"
        rightColor={LIGHT_GREY}
        size={25}
      />
      <View style={styles.container}>
        {isLoading ? (
          <Progress.Circle
            style={styles.progress}
            progress={+progress}
            size={80}
            showsText
            color={MAIN_COLOR}
          />
        ) : (
          <>
            <Image
              style={styles.image}
              source={require('../../assets/images/home-baloon.png')}
            />

            <Text style={styles.text}>Tap the Scan button to read the air</Text>
          </>
        )}
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
  image: {width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.45},
  text: {
    color: MAIN_COLOR,
    marginTop: 40,
    fontSize: 16,
  },
});

export default HomeScreen;
