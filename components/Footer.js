 // External Dependencies
import React from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Component Definition
const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerIcon}>😝</Text>
    <Text
      onPress={() => Linking.openURL('https://icanhazdadjoke.com/')}
      style={styles.text}
    >
      icanhazdadjoke.com
    </Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    flex: 1,
    backgroundColor: '#fafafa',
    paddingHorizontal: 16,
    paddingVertical: 24,
    shadowColor: '#000',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerIcon: {
    marginRight: 4,
  },
  text: {
    fontSize: 13,
    textAlign: 'center',
    color: '#E91E63',
    textDecorationLine: 'underline',
  },
});

export default Footer;
