/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 // External Dependencies
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
import axios from 'axios';

// Internal helpers
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

// Local Dependencies
import Header from './components/Header';


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

const sectionRootStyles = {
  alignItems: 'center',
  borderBottomColor: 'grey',
  borderBottomWidth: StyleSheet.hairlineWidth,
  borderTopColor: 'grey',
  borderTopWidth: StyleSheet.hairlineWidth,
  flex: 1,
  height: '100%',
  paddingVertical: 32,
};


// Component Definition
const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentJoke, setCurrentJoke] = useState('');

  function handleSetIsLoading() {
    if (isLoading) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }

  function handleSetCurrentJoke(joke) {
    setCurrentJoke(joke);
  }

  const getDadJokes = () => {
    handleSetIsLoading()
    axios({
      method: 'get',
      url: 'https://icanhazdadjoke.com/',
      responseType: 'json',
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        console.log('res.data.joke', res.data.joke);
        handleSetCurrentJoke(res.data.joke);
      });
  };

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
              onPress={getDadJokes}
              style={isLoading ? styles.loadingBox : styles.box}
            >
              <Text style={styles.buttonText}>
                {!currentJoke ? 'START' : 'NEXT'}
              </Text>
            </TouchableOpacity>
          </View>
          {currentJoke !== '' && (
            <View style={styles.jokeSection}>
              <Text style={styles.jokeText}>
                {currentJoke}
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  section: sectionRootStyles,
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
  jokeSection: {
    ...sectionRootStyles,
    backgroundColor: 'lavender',
    paddingHorizontal: 36,
    paddingVertical: 64,
  },
  jokeText: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
