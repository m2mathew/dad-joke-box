// External Dependencies
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationNativeContainer } from '@react-navigation/native';


// Internal Dependencies
import About from './components/About';
import Home from './components/Home';

// Local Variables
const Stack = createStackNavigator();

// Component Definition
function App() {
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} options={{ title: 'Overview' }}/>
        {/* <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}

export default App;
