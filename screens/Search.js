import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Profile = ({ navigation }) => {

  return (
    <View style={styles.signInWrapper}>
      <Text style={styles.signInText}>Search Screen</Text>

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

export default Profile
