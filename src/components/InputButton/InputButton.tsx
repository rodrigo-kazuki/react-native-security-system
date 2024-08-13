import React, {useState} from 'react';
import {Text, Button, View ,Pressable} from 'react-native';
import { styles } from './InputButtonStyle';
import { SecurityTextInput } from '../TextInput/SecurityTextInput';
import * as Clipboard from 'expo-clipboard';
import generatePass from '../../services/passwordServ';
export function InputButton() {
    const [pass, setPass] = useState('password')
    function handleGenerateButton(){
        let generateToken = generatePass()
        setPass(generateToken)
    }
    function handleCopyButton(){
        Clipboard.setStringAsync(pass);
    }
  return (
    <>
        <SecurityTextInput pass={pass}/>
        <Pressable
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>Copy</Text>
        </Pressable>
    </>
  );
}

