import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Landing from '../pages/Landing';
import Study from '../pages/Study';
import GiveClasses from '../pages/GiveClasses';

const { Navigator, Screen } = createStackNavigator();

const AppStack = () => {
	return (
		<NavigationContainer>
			<Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Screen name='Landing' component={Landing} />
				<Screen name='Study' component={Study} />
				<Screen name='GiveClasses' component={GiveClasses} />
			</Navigator>
		</NavigationContainer>
	);
};

export default AppStack;
