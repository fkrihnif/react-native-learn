import React from 'react';
import {View, StyleSheet} from 'react-native';
import SimpleView from './SimpleView';

const App = () => {
  return (
    <View style={styles.container}>
      <SimpleView />
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
