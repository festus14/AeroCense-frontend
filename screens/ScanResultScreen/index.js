/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from '../../components/Header';
import {
  LIGHT_GREY,
  MAIN_COLOR,
  NAVY_BROWN,
  ORANGE,
  YELLOW,
  BRICK_RED,
  PURPLE,
} from '../../utility/colors';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../utility/constants';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ScanResultScreen = ({route, navigation}) => {
  let pmObject = route?.params?.pm_object ?? {};
  console.log(route?.params);

  const pmTwoFiveInfoHandler = (val) => {
    switch (true) {
      case val <= 12:
        return {
          color: MAIN_COLOR,
          info: 'Good',
          implications:
            'Air quality is considered satisfactory, and air pollution poses little or no risk',
          cautionaryStatement: 'None',
          value: val,
        };
      case val <= 35.5:
        return {
          color: YELLOW,
          info: 'Moderate',
          implications:
            'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
          value: val,
        };
      case val <= 55.5:
        return {
          color: ORANGE,
          info: 'Unhealthy for Sensitive Groups',
          implications:
            'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
          value: val,
        };
      case val <= 150.5:
        return {
          color: BRICK_RED,
          info: 'Unhealthy',
          implications:
            'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion',
          value: val,
        };
      case val <= 250.5:
        return {
          color: PURPLE,
          info: 'Very Unhealthy',
          implications:
            'Health warnings of emergency conditions. The entire population is more likely to be affected.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
          value: val,
        };
      case val > 250.5:
        return {
          color: NAVY_BROWN,
          info: 'Hazardous',
          implications:
            'Health alert: everyone may experience more serious health effects',
          cautionaryStatement: 'Everyone should avoid all outdoor exertion',
          value: val,
        };

      default:
        break;
    }
  };

  const pmTenInfoHandler = (val) => {
    switch (true) {
      case val <= 55:
        return {
          color: MAIN_COLOR,
          info: 'Good',
          implications:
            'Air quality is considered satisfactory, and air pollution poses little or no risk',
          cautionaryStatement: 'None',
          value: val,
        };
      case val <= 155:
        return {
          color: YELLOW,
          info: 'Moderate',
          implications:
            'Air quality is acceptable; however, for some pollutants there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
          value: val,
        };
      case val <= 255:
        return {
          color: ORANGE,
          info: 'Unhealthy for Sensitive Groups',
          implications:
            'Members of sensitive groups may experience health effects. The general public is not likely to be affected.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.',
          value: val,
        };
      case val <= 355:
        return {
          color: BRICK_RED,
          info: 'Unhealthy',
          implications:
            'Everyone may begin to experience health effects; members of sensitive groups may experience more serious health effects',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should avoid prolonged outdoor exertion; everyone else, especially children, should limit prolonged outdoor exertion',
          value: val,
        };
      case val <= 425:
        return {
          color: PURPLE,
          info: 'Very Unhealthy',
          implications:
            'Health warnings of emergency conditions. The entire population is more likely to be affected.',
          cautionaryStatement:
            'Active children and adults, and people with respiratory disease, such as asthma, should avoid all outdoor exertion; everyone else, especially children, should limit outdoor exertion.',
          value: val,
        };
      case val > 425:
        return {
          color: NAVY_BROWN,
          info: 'Hazardous',
          implications:
            'Health alert: everyone may experience more serious health effects',
          cautionaryStatement: 'Everyone should avoid all outdoor exertion',
          value: val,
        };

      default:
        break;
    }
  };

  return (
    <>
      <Header
        title="AeroCense"
        rightIcon="ios-information-circle-outline"
        rightColor={LIGHT_GREY}
        size={25}
      />
      <View style={styles.container}>
        <View style={styles.reading}>
          <View style={styles.left}>
            <Ionicons name="ios-flag-sharp" color={NAVY_BROWN} size={16} />
            <Text style={styles.title}> PM2.5 AQI Level:</Text>
          </View>
          <View style={styles.right}>
            <Text
              style={[
                styles.value,
                {color: pmTwoFiveInfoHandler(pmObject.pmtwofive).color},
              ]}>
              {pmTwoFiveInfoHandler(pmObject.pmtwofive).value}
            </Text>
            <Text
              style={[
                styles.status,
                {color: pmTwoFiveInfoHandler(pmObject.pmtwofive).color},
              ]}>
              {' '}
              {pmTwoFiveInfoHandler(pmObject.pmtwofive).info}
            </Text>
          </View>
        </View>

        <View style={styles.implications}>
          <Text>Health Implications:</Text>
          <Text>{pmTwoFiveInfoHandler(pmObject.pmtwofive).implications}</Text>
        </View>

        <View style={styles.reading}>
          <View style={styles.left}>
            <Ionicons name="ios-flag-sharp" color={NAVY_BROWN} size={16} />
            <Text style={styles.title}> PM10 AQI Level:</Text>
          </View>
          <View style={styles.right}>
            <Text
              style={[
                styles.value,
                {color: pmTenInfoHandler(pmObject.pmten).color},
              ]}>
              {pmTenInfoHandler(pmObject.pmten).value}
            </Text>
            <Text
              style={[
                styles.status,
                {color: pmTenInfoHandler(pmObject.pmten).color},
              ]}>
              {' '}
              {pmTenInfoHandler(pmObject.pmten).info}
            </Text>
          </View>
        </View>

        <View style={styles.implications}>
          <Text>Health Implications:</Text>
          <Text>{pmTenInfoHandler(pmObject.pmtwofive).implications}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  image: {width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.45},
  text: {
    color: MAIN_COLOR,
    marginTop: 40,
    fontSize: 16,
  },
  reading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    color: '#003049',
    fontSize: 16,
  },
  value: {
    color: NAVY_BROWN,
    fontSize: 24,
  },
  status: {
    fontSize: 16,
    color: NAVY_BROWN,
    textAlignVertical: 'bottom',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  implications: {
    marginBottom: 30,
  },
});

export default ScanResultScreen;
