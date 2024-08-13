import React from 'react';
import { View,Text,Image} from 'react-native';

import { styles } from './LogoStyle';
import LogoImg from "../../../assets/bat-logo.png"
export function Logo() {
  return (
    <View>
        <Text style={styles.title}>
            Pass Generator
        </Text>
        <Image 
            source={LogoImg}
            style={{
                resizeMode:'contain',
                height:180
            }}
            />

    </View>
  );
}