/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// Internal helpers
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';

// Component Definition
const App = () => {
  console.log('hello world!!');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.section}>
            <View style={styles.box}/>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    paddingVertical: 32,
  },
  box: {
    backgroundColor: 'aliceblue',
    borderColor: 'darkblue',
    borderRadius: 4,
    borderWidth: 3,
    height: 150,
    width: 150,
    shadowOffset: { width: 3, height: 3, },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
