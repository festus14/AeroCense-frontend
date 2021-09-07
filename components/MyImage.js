import React from 'react';
import FastImage from 'react-native-fast-image';

const MyImage = ({uri}) => (
  <FastImage
    style={{width: 200, height: 200}}
    source={require('../assets/images/home-baloon.png')}
    resizeMode={FastImage.resizeMode.contain}
  />
);

export default MyImage;
