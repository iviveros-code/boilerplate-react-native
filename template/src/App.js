import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigation} from '@navigation';

import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({duration: 250});
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
