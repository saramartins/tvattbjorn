import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Footer } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Footer style={styles.footer}>Test</Footer>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    backgroundColor: '#000',
  }
});
