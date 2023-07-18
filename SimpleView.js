import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {TextInput as PaperTextInput} from 'react-native-paper';

const SimpleView = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = text => {
    setInputText(text);
  };

  const handleButtonPress = () => {
    alert(`You entered: ${inputText}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Simple View</Text>

      {/* Using standard TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        onChangeText={handleInputChange}
        value={inputText}
      />

      {/* Using Material Design TextInput from react-native-paper */}
      {/* <PaperTextInput
        label="Enter text here"
        value={inputText}
        onChangeText={handleInputChange}
        style={styles.input}
      /> */}

      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});

export default SimpleView;
