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
        source="https://image.ibb.co/eAxngQ/goingsunny_icon.png"
        style={{
          height: 250, width: 250,
          borderRadius: 250,
          marginBottom: 20,
        }}
      />
      <Text style={styles.title}>Goingsunny</Text>
      <Text style={styles.text}>Fake it `til you make it !</Text>
    </View>

    <View style={styles.containerBack} name="Back">
      <Text style={styles.textBack}>* Học tiếng anh mỗi ngày bằng các đoạn hội thoại.</Text>
      <Text style={styles.textBack}>* Luyện tập giao tiếp với hot gơ, trai đẹp.</Text>
      <Text style={styles.textBack}>* Học trên máy tính hay điện thoại đều được.</Text>
      <Text style={styles.textBack}>* Tự tin giao tiếp với người bạn địa.</Text>
      <Text style={styles.textBack}>* Đi du lịch nước ngoài, tại sao không?</Text>
      <Text style={styles.textBack}>* Có tính phí nhưng hiện tại thì chưa.</Text>
      <Text style={styles.textBack}>* LET GO - bit.ly/gsn4</Text>
    </View>
  </View>
);

export default App;
