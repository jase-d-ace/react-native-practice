import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native';
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

hitThesaurus(){
  if (this.state.wordlist.search(/[' ']*/) === -1 || (this.state.wordlist.search(/[' ']/) === this.state.wordlist.length - 1 || -1) && this.state.wordlist.search(/[^a-zA-Z]/) === -1){
    axios.post('http://localhost:3000/api/synonyms', {
      match: this.state.thesaurus
    }).then((data)=>{
      //do stuff
    }).catch((error)=>{
      console.log('thesaurus error: ', error)
    })
  } else {
  alert('please do not add spaces or numbers')
  }
}

render(){
  return (
    <View style={styles.container}>
    <Text style={styles.header}>
      {this.state.thesaurus}
    </Text>
    <Text> This is some thesaurus stuff
    </Text>
    <Text>
    <TextInput style={styles.textField} placeholder='Thesaurus stuff here' />
    </Text>
    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </View>
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
    justifyContent: 'center'
  },
  header: {
    fontSize: 50,
    fontWeight: '900'
  }
});
