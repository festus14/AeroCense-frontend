import React from 'react';
import {Text, View, TouchableOpacity, Platform, StatusBar} from 'react-native';
import {ALMOST_BLACK, MAIN_COLOR} from '../utility/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {STATUS_BAR_HEIGHT} from '../utility/constants';
import {isEmpty} from '../utility/helpers';

const Header = ({
  style = {},
  leftColor = '#fff',
  size = 30,
  titleStyle = {},
  rightColor = '#fff',
  rightIcon,
  leftIcon,
  title = '',
  component,
  onLeftPress,
  onRightPress,
  details,
  leftComponent,
  leftStyle,
}) => {
  return (
    <View style={[styles.header, style]}>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#fff"
        translucent={true}
      />
      {Platform.OS !== 'android' && <View style={styles.status} />}
      <View style={[styles.details, details]}>
        <View style={[styles.iconContainer, leftStyle]}>
          {leftIcon ? (
            <TouchableOpacity onPress={onLeftPress} style={styles.icon}>
              <Icon name={leftIcon} color={leftColor} size={size} />
            </TouchableOpacity>
          ) : (
            leftComponent && leftComponent
          )}
        </View>
        {component ?? component}
        {!isEmpty(title) && (
          <View style={[styles.textContainer, titleStyle]}>
            <Text style={styles.text}>{title || ''}</Text>
          </View>
        )}
        <View style={styles.iconContainer}>
          {rightIcon && (
            <TouchableOpacity onPress={onRightPress} style={styles.icon}>
              <Icon name={rightIcon} color={rightColor} size={size} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = {
  header: {
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: 'rgb(190, 190, 190)',
        shadowOpacity: 0.6,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 5,
      },
    }),
    width: '100%',
    height: '23%',
    ...Platform.select({
      android: {
        height: '10%',
      },
    }),
    justifyContent: 'center',
    paddingTop: 20,
  },
  status: {
    height: STATUS_BAR_HEIGHT,
  },
  details: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
    color: ALMOST_BLACK,
  },
  iconContainer: {
    width: '10%',
  },
};
