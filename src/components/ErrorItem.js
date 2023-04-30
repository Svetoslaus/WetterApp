import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons'


const ErrorItem = () => {
    return (
       <View style={styles.container}>
        <Text style={styles.text}>There is a problem.</Text>
        <Feather name={'frown'} size={100} color={'white'}/>
       </View>
    )
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
   },
   text: {
    fontSize: 29,
    color: 'white',
    textAlign: 'center',
    marginHorizontal: 10
   }
})

export default ErrorItem