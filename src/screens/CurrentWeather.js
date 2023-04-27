import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
    <View style={ styles.container }> 
      <FontAwesome name="sun-o" size={100} color="black" />
      <Text style={ styles.temp }>6</Text>
      <Text style={ styles.feels }>Feels like 5</Text>
      <View style={styles.highLowWrapper}>
           <Text style={ styles.highLow}>High: 8 </Text>
           <Text style={ styles.highLow}>Low: 6 </Text>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It's sunny</Text>
        <Text style={styles.message}>It's perfect t-shirt weather</Text>
      </View>
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