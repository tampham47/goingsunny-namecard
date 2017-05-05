import React from 'react';
import { View, Text } from 'react-sketchapp';

import styles from './styles';

const App = () => (
  <View style={styles.container} name="Wrapper">
    <Text style={styles.text}>Goingsunny</Text>
    <Text style={styles.text}>Let's speak english!</Text>
  </View>
);

export default App;
