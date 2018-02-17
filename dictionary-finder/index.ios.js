import React from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation'
import axios from 'axios';
import Result from './Result';
import NoData from './NoDataYet';
import NoResult from './NoResult';
import NavTest from './NavTest';
import Styles from './Style';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      wordlist: '',
      results: 0
    }
  }

  static navigationOptions = {
    title: 'Wordlists'
  }

  //next steps:
  //find some way to expand this into thesaurus functionality
  //eventually, expand into dictionary stuff
    //but that's gonna be WAY further down the line
    //after i figure out how to account for plurals n shit

  hitApi(){
    //generate a variable that eventually gets passed into state
    let resultArray;
    //query cleaning: checking for invalid characters
    if (this.state.wordlist.search(/[' ']*/) === -1 || (this.state.wordlist.search(/[' ']/) === this.state.wordlist.length - 1 || -1) && this.state.wordlist.search(/[^a-zA-Z]/) === -1){
      //use a post request to send the search parameters to the back end
      axios.post('http://localhost:3000/api', {
        word: this.state.wordlist
      }).then((data) =>{
        resultArray = data.data
        console.log('got this back:', resultArray)
        this.setState({
        results: resultArray
        })
      }).catch((error) =>{
        console.log('axios error:', error)
      })
    } else {
      alert('please do not add spaces or numbers')
    }
  }

  renderInfo(){
    //initial state should show nothing
    if (this.state.results === 0) {
      return <NoData />
    } else if (!this.state.results.length){
      //feedback for searching something that comes back empty
      return <NoResult />
    } else {
      return this.state.results.map((result, index) =>{
        return <Result result={result} key={index} />
      })
    }
  }

  setStateToThis(text){
    this.setState({
      wordlist: text
    })
  }

  render() {
    //add in navigate prop to enable navigation between screens
    const { navigate } = this.props.navigation
    return (
      <View style={Styles.container}>
        <Text style={Styles.header}>Wordlist Search</Text>
        <Text>You searched for: {this.state.wordlist}</Text>
        <Text>
        <TextInput style={Styles.textField} placeholder='what is happening' onChangeText={(text) => this.setStateToThis(text)} />
        </Text>
        <ScrollView>
        {this.renderInfo()}
      </ScrollView>
        <Button onPress={()=>this.hitApi()} title='Search Oxford dictionary!' />
        <Button onPress={()=>navigate('Test')} title={'go somewhere else'} />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const dictionaryfinder = StackNavigator({
  Home: { screen: App },
  Test: { screen: NavTest }
})



AppRegistry.registerComponent('dictionaryfinder', () => dictionaryfinder);
