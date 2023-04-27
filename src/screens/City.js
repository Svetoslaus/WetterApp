
import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ImageBackground, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons'

const City = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground source={require('../../assets/hamburg-city.jpg')} style={styles.imageLayout}>
       <Text style={[styles.cityName, styles.cityText]}>Hamburg</Text>
       <Text style={[styles.countryName, styles.cityText]}>DE</Text>
       <View style={styles.populationWrapper}>
        <Feather name={'user'} size={50} color={'red'}/>
        <Text style={styles.populationText}>2000000</Text>
       </View>
       <View style={styles.riseSetWrapper}>
        <Feather name={'sunrise'} size={50} color={'white'}/>
        <Text style={styles.riseSetText}>06:43:42am</Text>
        <Feather name={'sunset'} size={50} color={'white'}/>
        <Text style={styles.riseSetWrapper}>18:30:22pm</Text>
       </View>
       </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({ 
    container: {
        flex:1,
        marginTop: StatusBar.currentHeight || 0
    },
    imageLayout: {
        flex: 1
    },
    cityName: {
        fontSize: 40
    },
    countryName: {
        fontSize: 30
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white' 
    },
    populationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
        fontWeight: 'bold'    
    },
    riseSetWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 30
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
})

export default City