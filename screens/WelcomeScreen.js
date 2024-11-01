import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/images/background_splash.png')} // Ensure this path is correct
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to the App</Text>
        <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the entire screen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: dark overlay for readability
  },
  welcomeText: {
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
  },
});

export default WelcomeScreen;
