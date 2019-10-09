import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Button, ActivityIndicator } from 'react-native';
import { Images } from '../Themes';


export default class Bottom extends React.Component {

  constructor(props){
    super(props);

    //See what props our StarWarsCard renders with
    console.log(JSON.stringify(props));
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableOpacity style={styles.circle} >
          <Image
            source={Images.rewind}
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigCircle} >
          <Image
            source={Images.nope}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} >
          <Image
            source={Images.boost}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.bigCircle} >
          <Image
            source={Images.like}
            style={{width: 40, height: 40}}
            resizeMode="contain"
          />

        </TouchableOpacity>

        <TouchableOpacity style={styles.circle} >
          <Image
            source={Images.superLike}
            style={{width: 20, height: 20}}
            resizeMode="contain"
          />

        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '80%',
    flexDirection: 'row',
    justifyContent:'space-around'
  },
  circle: {
    borderRadius: 50,
    backgroundColor: '#ffffff',
    padding:10
  },
  bigCircle: {
    borderRadius: 100,
    backgroundColor: '#ffffff',
    padding:10
  },
});
