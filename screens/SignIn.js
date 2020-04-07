import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SignIn = ({ navigation }) => {

  return (
    <View style={styles.signInWrapper}>
      <Text style={styles.signInText}>Sign In Screen</Text>
      <TouchableOpacity style={styles.signInButton} title='Sign In' onPress={() => alert('to do')}>
      <Text style={styles.signInButton}>Sign In Button</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} title='Create Account' onPress={() => navigation.push('CreateAccount')}>
      <Text style={styles.signInButton}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
  SignInWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  signInText: {
    fontSize: 30
  },
signInButton: {
    height: 50,
    width: 100,
    backgroundColor: 'firebrick',
    marginTop: 20,
    color: 'white',
    fontSize: 20
  },
});

export default SignIn
