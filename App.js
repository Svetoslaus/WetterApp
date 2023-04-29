import React from "react"
import CurrentWeather from './src/screens/CurrentWeather'
import City from './src/screens/City'
import UpcomingWeather from './src/screens/UpcomingWeather'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const App = () => {
  
  return (
  <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: 'purple',
      tabBarInactiveTintColor: 'grey'
    }}
    >
      <Tab.Screen 
      name={'City'} 
      component={City}
      options={{
        tabBarIcon: ({focused}) => (
        <Feather
        name={'home'}
        size={25}
        color={focused ? 'purple' : 'black'}
        />
        )
      }}/>
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
      />
      <Tab.Screen 
      name={'Current'} 
      component={CurrentWeather}
      options={{
        tabBarIcon: ({focused}) => (
          <Feather
          name={'droplet'}
          size={25}
          color={focused ? 'purple' : 'black'}
          />
        )
      }}
      />
   
    </Tab.Navigator>
  </NavigationContainer>
  )
}



export default App