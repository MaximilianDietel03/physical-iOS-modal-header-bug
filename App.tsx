import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Test"
          options={({ navigation }) => ({ presentation: 'containedModal', headerRight: () => <Button title='hello' onPress={() => navigation.navigate('Home')} /> })}
          component={TestScreen}
          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Button title="Go to TestScreen" onPress={() => navigation.navigate('Test')} />
    </View>
  )
}

const TestScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>TestScreen</Text>
    </View>
  )
}

export default App;
