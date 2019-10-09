import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
// import ChatIcon from '@material-ui/icons/Chat';
// import SettingsIcon from '@material-ui/icons/Settings';
import { Images } from '../Themes';


export default class Navigation extends React.Component {

  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.setting}>
          <Image
            source={Images.gear}
            resizeMode="contain"
            style={{width: 100, height: 40, tintColor: '#C5C5C5'}}
          />
        </View>

        <View style={styles.logo}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={{width: 100, height: 40}}
          />
        </View>

        <View style={styles.chat}>
          <Image
            source={Images.chat}
            resizeMode="contain"
            style={{width: 100, height: 40, tintColor: '#C5C5C5',}}
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 44,
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#C5C5C5',
    justifyContent: 'space-between'
  },
  setting: {
  },
  logo: {
    alignItems: 'center',
  },
  chat: {
  },
});
