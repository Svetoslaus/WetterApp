import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import RowText from "../components/RowText";

const CurrentWeather = () => {

  const { 
    wrapper,
    container,
    temp,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
   } = styles
  return (
    <SafeAreaView style={wrapper}>
    <View style={ container }> 
      <FontAwesome name="sun-o" size={100} color="black" />
      <Text style={ temp }>6</Text>
      <Text style={ feels }>Feels like 5</Text>

      <RowText 
      message1={'High: 8'} 
      message2={'Low: 6'} c
      containerStyles={highLowWrapper} 
      message1Styles={highLow}
      message2Styles={highLow}
      />


      <RowText 
      message1={'It is sunny'} 
      message2={'It is perfect to wear your t-shirt'} 
      containerStyles={bodyWrapper}
      message1Styles={description}
      message2Styles={message}      
      />

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
   
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    color: 'black',
    fontSize: 48
  },
  highLow: {
    color: 'black',
    fontSize: 30
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 45
  },
  message: {
    fontSize: 30
  }
})

export default CurrentWeather