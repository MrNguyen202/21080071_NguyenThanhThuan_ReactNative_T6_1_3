import React, { useState } from 'react';
import { View } from 'react-native';
import ScreenHome from './screen/home';
import Screen2c from './screen/Screen2c';

const App = () => {
  const [manHinh, setManHinh] = useState('home');

  const navigateTo = (screen) => {
    setManHinh(screen);
  }

  return (
    <View style={{ flex: 1 }}>
      {manHinh === 'home' && <ScreenHome natigation={navigateTo} />}
      {manHinh === '2c' && <Screen2c natigation={navigateTo} />}
    </View>
  );
};

export default App;