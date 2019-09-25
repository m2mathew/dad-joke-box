/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
  useState,
} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Internal helpers
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Header from './components/Header';
import { grey } from 'ansi-colors';

// Local Variables
const boxRootStyles = {
  backgroundColor: 'aliceblue',
  borderColor: 'darkblue',
  borderRadius: 4,
  borderWidth: 2,
  height: 150,
  shadowColor: 'grey',
  shadowOffset: { width: 3, height: 3, },
  shadowOpacity: 0.5,
  width: 150,
  justifyContent: 'center',
};


// Component Definition
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
            <TouchableOpacity
              disabled={isLoading}
              onPress={() => console.log('button pressed')}
              style={isLoading ? styles.loadingBox : styles.box}
            >
              <Text style={styles.buttonText}>
                START
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    alignItems: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'grey',
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    height: '100%',
    paddingVertical: 32,
  },
  box: boxRootStyles,
  loadingBox: {
    ...boxRootStyles,
    backgroundColor: '#ddd',
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
  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default App;
