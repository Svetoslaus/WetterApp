import React from 'react'
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground } from 'react-native'
import ListItem from '../components/ListItem'

const DATA = [
    { 
     dt_text: "2023-04-24 12:00:00",
     main: {
        temp_max: 8.55,
        temp_min: 7.55
     },
     weather: [
        {
            main: 'clear'
        }
     ]
    },
    {
        dt_text: "2023-04-24 15:00:00",
     main: {
        temp_max: 8.55,
        temp_min: 7.55
     },
     weather: [
        {
            main: 'clouds'
        }
     ]
    },
    {
        dt_text: "2023-04-24 19:00:00",
     main: {
        temp_max: 8.55,
        temp_min: 7.55
     },
     weather: [
        {
            main: 'rain'
        }
     ]
    }
]

const Item = (props) => {
   const { dt_text, min, max, condition } = props
    return (
      <View style={styles.item}>
         <Feather name={'sun'} size={50} color={'white'}/>
         <Text style={styles.text}>{dt_text}</Text>
         <Text style={styles.temp}>{min}</Text>
         <Text style={styles.temp}>{max}</Text>
        
      </View>
   )
}

const UpcomingWeather = () => {
    const renderItem = ({ item }) => (
        <ListItem 
        condition={item.weather[0].main}
        dt_text={item.dt_text} 
        min={item.main.temp_min}
        max={item.main.temp_max}
        />
    )

    const { container, image } = styles

    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/upcoming-background.jpg')} 
            style={image}
            >
            <Text>Upcoming Weather</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item)=> item.dt_text }
                
            />
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
  
})

export default UpcomingWeather