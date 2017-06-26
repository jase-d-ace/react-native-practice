import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios'


export default class NavTest extends React.Component{

  constructor(){
    super();
    this.state = {
      thesaurus: 'thesaurus testing',
      results: 0
    }
  }

static navigationOptions = {
  title: 'Thesaurus'
}
render(){
  return (
    <Text style={styles.header}>
      {this.state.thesaurus}
    </Text>
    )
  }
}

const styles = StyleSheet.create({
  textField: {
    backgroundColor: 'rebeccapurple',
    width: '200%',
    height: '40%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 50,
    fontWeight: '900'
  }
});
