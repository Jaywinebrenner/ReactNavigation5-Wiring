import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Details = () => {

  return (
    <View style={styles.aboutWrapper}>
      <Text style={styles.createAccountText}>Details</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  aboutWrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

export default Details
