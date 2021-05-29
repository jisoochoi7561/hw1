import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CityList from './CityList';

// after `expo install react-native-safe-area-context`.
import { SafeAreaView } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <CityList/>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
