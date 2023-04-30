import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import RowText from "../components/RowText";
import { weatherType } from "../utilities/weatherType";
import { Feather } from '@expo/vector-icons'

const CurrentWeather = ({ weatherData }) => {

  const { 
    wrapper,
    container,
    tempStyles,
    feels,
    highLow,
    highLowWrapper,
    bodyWrapper,
    description,
    message,
   } = styles

  const { 
    main: { temp, feels_like, temp_max, temp_min},
    weather
  } = weatherData

  const weatherCondition = weather[0].main
  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor}
    ]}
    >
    <View style={ container }> 
      <Feather
       name={weatherType[weatherCondition].icon}
       size={100}
       color="white"
      />
      <Text style={ tempStyles }>{temp}</Text>
      <Text style={ feels }>{`Feels like ${feels_like}`}</Text>
      <RowText 
      message1={`High: ${temp_max}`} 
      message2={`Low: ${temp_min}`}
      containerStyles={highLowWrapper} 
      message1Styles={highLow}
      message2Styles={highLow}
      />
      </View>
      <RowText 
      message1={weather[0].description} 
      message2={weatherType[weatherCondition].message} 
      containerStyles={bodyWrapper}
      message1Styles={description}
      message2Styles={message}      
      />
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
  tempStyles: {
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