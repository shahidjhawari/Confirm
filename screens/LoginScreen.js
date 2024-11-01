import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
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
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Google_Plus_logo_2015.png' }} style={styles.socialIcon} />
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png' }} style={styles.socialIcon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
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
    backgroundColor: '#4caf50',
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
  },
});

export default LoginScreen;
