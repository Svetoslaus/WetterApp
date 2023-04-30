import React, { useState, useEffect } from "react"
import * as Location from 'expo-location'

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [weather, setWeather] = useState([])
    const [lat, setLat] = useState([])
    const [lon, setLon] = useState([])
    
    // fetch data
    const fetchWeatherData = async () => {
        //error
          try {
            const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WETTER_API_KEY}&units=metric`)
            //get JSON Data
              const data = await response.json()
              setWeather(data)
          } catch(error) {
            setError('Could not fetch weather')
          } finally {
            setLoading(false)
          }
        }
      
      
        useEffect(() => {
          (async() => {
            let { status } = await Location.requestForegroundPermissionsAsync()
            if (status !== 'granted') {
              setError('permission to access location is denied')
              return
            }
            let location = await Location.getCurrentPositionAsync({})
            setLat(location.coords.latitude)
            setLon(location.coords.longitude)
            await fetchWeatherData()
          })
        }, [lat, lon])
        return [loading, error, weather]
}