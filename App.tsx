import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AppLoading } from 'expo';
import {
	Archivo_400Regular,
	Archivo_700Bold,
	useFonts,
} from '@expo-google-fonts/archivo';
import {
	Poppins_400Regular,
	Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';

export default function App() {
	let [fontsLoaded] = useFonts({
		Archivo_400Regular,
		Archivo_700Bold,
		Poppins_400Regular,
		Poppins_600SemiBold,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	} else {
		return (
			<View style={styles.container}>
				<Text>Hello World!</Text>
				<StatusBar style='auto' />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
