import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  const handleGoToDetails = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screens</Text>
      <Button title="Go to Details" onPress={handleGoToDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default HomeScreen;
