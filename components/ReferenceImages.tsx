import React from 'react';
import { Image } from 'expo-image';
import { ImageStyle, StyleProp } from 'react-native';

type Props = {
  imgSource: string;
  style?: StyleProp<ImageStyle>; // Make style prop optional and of the correct type
};

export default function ImageComponent({ imgSource, style }: Props) {
  const defaultImageStyle: ImageStyle = {
    width: '112.5%',
    height: 150,
    resizeMode: 'stretch', // 'cover' is a valid ImageResizeMode
  };

  return <Image source={imgSource} style={[defaultImageStyle, style]} />;
}