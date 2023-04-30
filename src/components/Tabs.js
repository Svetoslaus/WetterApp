import React from "react"
import CurrentWeather from '../screens/CurrentWeather'
import City from '../screens/City'
import UpcomingWeather from '../screens/UpcomingWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
   return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'grey',
      tabBarStyle: {
        backgroundColor: 'lightyellow'
      },
      headerStyle: {
        backgroundColor: 'lightyellow'
      },
      headerTitleStyle: {
        color: 'purple',
        fontSize: 25,
        fontWeight: 'bold'
      }
    }}
    >
      <Tab.Screen 
      name={'City'} 
      options={{
        tabBarIcon: ({focused}) => (
        <Feather
        name={'home'}
        size={25}
        color={focused ? 'purple' : 'black'}
        />
        )
      }}
      >
      {() => <City weatherData={weather.city}/>}  
      </Tab.Screen>
      <Tab.Screen 
      name={'Upcoming'} 
      component={UpcomingWeather}
      options={{
        tabBarIcon: ({focused}) => (
          <Feather
          name={'clock'}
          size={25}
          color={focused ? 'purple' : 'black'}
          />
        )
      }}
      >
        {() => <UpcomingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen 
      name={'Current'} 
      options={{
        tabBarIcon: ({focused}) => (
          <Feather
          name={'droplet'}
          size={25}
          color={focused ? 'purple' : 'black'}
          />
        )
      }}
    >
    {() => <CurrentWeather weatherData={weather.list[0]}/>}
    </Tab.Screen>
    </Tab.Navigator>
   )
}

export default Tabs















