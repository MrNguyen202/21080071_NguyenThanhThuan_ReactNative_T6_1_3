import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import GetStarted from './screens/GetStarted';
import DashBoard from './screens/DashBoard';
import AddToCard from './screens/AddToCard';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='GetStarted'>
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }}/>
      <Stack.Screen name="DashBoard" component={DashBoard} options={{ headerShown: false }}/>
      <Stack.Screen name="AddToCard" component={AddToCard} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


