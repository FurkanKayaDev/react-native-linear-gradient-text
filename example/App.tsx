import {StyleSheet, View} from 'react-native';
import React from 'react';
import TextGradient from '@furkankaya/react-native-linear-text-gradient';
const App = () => {
  return (
    <View>
      <TextGradient
        style={{fontSize: 50, fontWeight: 'bold'}}
        colors={['red', 'blue']}
        locations={[0, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        text="TEXT GRADIENT"
      />
    </View>
  );
};
export default App;
