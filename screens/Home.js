import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Home = ({ navigation }) => {

  return (
    <View style={styles.signInWrapper}>

      <TouchableOpacity style={styles.signInButton} title='React Native by Example' onPress={() => navigation.push('Details')}>
      <Text style={styles.signInButton}>React Native by Example</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton} title='Create Account' onPress={() => alert('to do')}>
      <Text style={styles.signInButton}>React Native by School</Text>
      </TouchableOpacity>
      <Button title="Drawer" onPress={()=> alert('do itt')}/>
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

export default Home
