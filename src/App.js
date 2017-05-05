/**
 * Author Tampham47
 */

import React from 'react';
import { View, Text, Image } from 'react-sketchapp';

import styles from './styles';

const App = () => (
  <View style={styles.artboard}>
    <View style={styles.container} name="Front">
      <Image resizeMode='contain'
        source="https://dummyimage.com/400x400.png"
        style={{
          height: 250, width: 250,
          borderRadius: 250,
          marginBottom: 20,
        }}
      />
      <Text style={styles.title}>Goingsunny</Text>
      <Text style={styles.text}>Let's speak english!</Text>
    </View>

    <View style={styles.containerBack} name="Back">
      <Text style={styles.textBack}>Fake it `til you make it!</Text>
      <Text style={styles.textBack}>Học tiếng anh mỗi ngày</Text>
      <Text style={styles.textBack}>guide: https://bit.ly/gosunny</Text>
    </View>
  </View>
);

export default App;
