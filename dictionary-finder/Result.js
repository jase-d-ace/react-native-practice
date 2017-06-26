import React from 'react';
import { Text, ScrollView } from 'react-native';

export default Result = (props) =>{
  return(
    <Text key={props.index}>
      {props.result.word}
    </Text>
  )
}
