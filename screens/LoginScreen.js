import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';

const LoginScreen = () => {
  return (
    <ImageBackground 
      source={require('../assets/images/background_splash.jpg')}  // Adjust the path if needed
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Welcome back</Text>
        <TextInput style={styles.input} placeholder="Your email" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />
        <Text style={styles.forgotPassword}>Forgot password</Text>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>Or</Text>
        <View style={styles.socialContainer}>
          <Image source={require('../assets/images/google_logo.png')} style={styles.socialIcon} />
          <Image source={require('../assets/images/facebook_logo.png')} style={styles.socialIcon} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Ensures the image covers the screen
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Optional: adds a dark overlay for better readability
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#333',
    borderRadius: 8,
    color: '#fff',
  },
  forgotPassword: {
    color: '#4caf50',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#091057',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginVertical: 10,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  orText: {
    color: '#ccc',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  },
  socialIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});

export default LoginScreen;
