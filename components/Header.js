import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


// Component Definition
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.text}>
      Dad Joke Box
    </Text>
  </View>
);


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fafafa',
    paddingVertical: 48,
    paddingHorizontal: 32,
    shadowColor: '#000',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Header;
