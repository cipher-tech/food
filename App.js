import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/searchScreen';
import ResultShowScreen from './src/screens/ResultShowScreen';
function DetailsScreen() {
	return (
	  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		<Text>Details Screen</Text>
	  </View>
	);
  }
  const Stack = createStackNavigator();
  
  function App() {
	return (
	  <NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
		  <Stack.Screen name="Home" component={SearchScreen} />
		  <Stack.Screen name="Details" component={DetailsScreen} />
		  <Stack.Screen name="ResultShow" component={ResultShowScreen} />
		</Stack.Navigator>
	  </NavigationContainer>
	);
  }
  export default App;