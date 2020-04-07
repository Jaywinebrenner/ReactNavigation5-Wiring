import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreateAccount = () => {

  return (
    <View style={styles.aboutWrapper}>
      <Text style={styles.createAccountText}>Create Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  aboutWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
  createAccountText: {
    fontSize: 40
  }
});

export default CreateAccount
