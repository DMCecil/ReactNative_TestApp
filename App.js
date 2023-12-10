import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Button,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonPress = () => {
    setShowMessage(!showMessage);
  };

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleImagePress = () => {
    // Handle action on image press
  };

  const fetchData = () => {
    // Simulate fetching data with a delay
    setIsLoading(true);
    setTimeout(() => {
      // Process fetched data
      setIsLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Button title="Show Message" onPress={handleButtonPress} />
      {showMessage ? <Text>Hello World!</Text> : null}

      <TextInput
        style={styles.input}
        onChangeText={handleInputChange}
        value={inputText}
        placeholder="Enter text"
      />

      <TouchableOpacity style={styles.button} onPress={fetchData}>
        <Text>Fetch Data</Text>
      </TouchableOpacity>

      <ScrollView style={styles.scrollView}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }}
          style={styles.image}
          onPress={handleImagePress}
        />
        {/* Other content */}
      </ScrollView>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 10,
    width: '80%',
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  scrollView: {
    margin: 10,
    width: '90%',
    maxHeight: 200,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
});

export default App;