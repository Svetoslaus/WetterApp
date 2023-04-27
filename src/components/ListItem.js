import React from "react"
import { Text, View, StyleSheet } from "react-native"
import { Feather} from '@expo/vector-icons'


const ListItem = (props) => {
   const { dt_text, min, max, condition } = props
   const {item, text, temp } = styles


    return (
    <View style={item}>

        <Feather name={'sun'} size={50} color={'white'}/>
        <Text style={text}>{dt_text}</Text>
        <Text style={temp}>{min}</Text>
        <Text style={temp}>{max}</Text>
        
    </View>
   )
}

const styles = StyleSheet.create ({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'pink',
        borderWidth: 5
    },
    temp: {
    color: 'white',
    fontSize: 20

    },
    text: {
        color: 'white',
        fontSize: 15
    },
})

export default ListItem