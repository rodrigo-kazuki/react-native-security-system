import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import styles from "./Style"
import { Logo } from "../../components/Logo/Logo"
import { InputButton } from "../../components/InputButton/InputButton";
export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo />
            </View>
            <View style={styles.inputContainer}>
                <InputButton></InputButton>
            </View>
            <StatusBar style="light" />
        </View>
    )
}
