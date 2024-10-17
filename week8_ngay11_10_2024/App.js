import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import API_Screen01 from './screens/API_Screen01';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='API_Screen01'>
        <Stack.Screen name="API_Screen01" component={API_Screen01} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

