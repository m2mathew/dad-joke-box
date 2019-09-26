// External Dependencies
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Component Definition
const About = () => (
  <View style={styles.header}>
    <Text style={styles.text}>
      About
    </Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 32,
    paddingVertical: 48,
    shadowColor: '#000',
  },
  text: {
    fontSize: 32,
    fontWeight: '500',
    textAlign: 'center',
    color: 'indigo',
  },
});

export default About;
