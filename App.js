import React from 'react';
import { SafeAreaView,StyleSheet, Text, View } from 'react-native';
import { Images, Profiles } from './App/Themes';
import Navigation from './App/Components/Navigation';
import Card from './App/Components/Card';
import Bottom from './App/Components/Bottom';




export default class App extends React.Component {
  constructor() {
    super();

    var haroldProfile = Profiles.harold;

    this.state = {
      profileImage: haroldProfile.image,
      name: haroldProfile.name,
      age: haroldProfile.age,
      occupation: haroldProfile.occupation
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Navigation/>
        <Card/>
        <Bottom/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
