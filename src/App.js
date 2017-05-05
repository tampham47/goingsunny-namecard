/**
 * Author Tampham47
 */

import React from 'react';
import { View, Text, Image } from 'react-sketchapp';

import styles from './styles';

const App = () => (
  <View style={styles.container} name="Wrapper">
    <Image resizeMode='contain'
      source="https://dummyimage.com/400x400.png"
      style={{
        height: 250, width: 250,
        borderRadius: 250,
        marginBottom: 20,
      }}
    />
    <Text style={styles.title}>Goingsunny</Text>
    <Text style={styles.text}>Fake it `til you make it!</Text>
    <Text style={styles.text}>Let's speak english!</Text>
  </View>
);

export default App;
