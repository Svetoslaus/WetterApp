import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

const Counter = () => {
   const [ count, setCount ] = useState(0)
   const [ newCount, setNewCount ] = useState(0)

   useEffect(() => {
    console.log(`Our result is: `)
    return () => {
        console.log('useEffect CleanUp')
    }
   }, [count])
   return (
    <View style={styles.container}>
        <Text style={styles.text}>{`count: ${count}`}</Text>
        <Button
        color={'red'}
        title={'Increase'}
        onPress={() => {
            setCount(count+1)
        }}
        />
        <Button
        color={'green'}
        title={'Decrease'}
        onPress={() => {
            setCount(count-1)
        }}
        />


        <Button
        color={'red'}
        title={'Increase'}
        onPress={() => {
            setNewCount(count+1)
        }}
        />
        <Button
        color={'green'}
        title={'Decrease'}
        onPress={() => {
            setNewCount(count-1)
        }}
        />
    </View>
   )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange'
    },
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginTop: 25
    }
})

export default Counter