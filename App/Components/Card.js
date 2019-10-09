import React from 'react';
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
// import ChatIcon from '@material-ui/icons/Chat';
// import SettingsIcon from '@material-ui/icons/Settings';
import { Images } from '../Themes';


export default class Card extends React.Component {

  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.pic}>
          <Image source={Images.harold}/>
        </View>

        <View style={styles.description}>
          <View>
            <Text style={ { fontSize: 40, fontWeight: 'bold' } }>Harold,<Text style={ { fontWeight: '200' } }>65</Text></Text>
            <Text style={ { fontSize: 20, color: '#C5C5C5'}}>Intenet meme</Text>
          </View>

          <View>

          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    borderWidth: 0.5,
    borderColor: '#C5C5C5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  pic: {
    justifyContent: 'flex-start'
  },
  description: {

  },
});
