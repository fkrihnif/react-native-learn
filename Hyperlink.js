import React from 'react';
import {View, Text, TouchableOpacity, Linking, StyleSheet} from 'react-native';

const Hyperlink = () => {
  const handleLinkPress = () => {
    // Replace the URL with the desired website URL
    const url = 'https://www.instagram.com';
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Click this link:</Text>
      <TouchableOpacity onPress={handleLinkPress}>
        <Text style={styles.link}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
});

export default Hyperlink;
