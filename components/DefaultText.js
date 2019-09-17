import React from 'react';
import { Text } from 'react-native';

const DefaultText = (props) => (
  <Text {...props} style={[props.style, { fontFamily: 'open-sans' }]} />
);

export default DefaultText;
