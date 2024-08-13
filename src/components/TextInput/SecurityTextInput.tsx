import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './SecurityTextInputStyle';
interface BatTextInputProps{
  pass:string
}
export function SecurityTextInput(props:BatTextInputProps) {
  return (
    <TextInput
      style={styles.inputer}
      placeholder='pass'
      value={props.pass}
    />
  );
}