import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import SimpleView from './SimpleView';
import LoginView from './LoginView';
import Hyperlink from './Hyperlink';
import Connect from './Connect';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginView />
      <Hyperlink />
      <Connect />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
