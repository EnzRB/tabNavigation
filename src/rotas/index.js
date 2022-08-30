
import { StyleSheet, Text, View } from 'react-native';
import Home from '../paginas/home/index.js';
import Sobre from '../paginas/sobre/index.js';
import Contato from '../paginas/contato/index.js';
import StackHome from './stackRota';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();


export default function Rota() {
    return (
  
        <Tab.Navigator 
        initialRouteName='StackHome'
        screenOptions={{headerShown:false,
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:'blue',
        tabBarStyle:{
        backgroundColor:"black"
        
    }

    }}
    >
        
   <Tab.Screen name = "StackHome" component={StackHome} 
   options = 
   {{tabBarIcon: ({color,size}) => {

   return   <Ionicons name="home-sharp" size={size} color={color}/>
   } 
   
   }}/>
   <Tab.Screen name ="Contato" component ={Contato}
    options = 
    {{tabBarIcon: ({color,size}) => {

    return   <AntDesign name="contacts" size={size} color={color} />
    } }}
   
   ></Tab.Screen>
   <Tab.Screen name = "Sobre" component={Sobre}
   
   options =
   {{
     tabBarIcon:({color,size}) => {
       return <Ionicons name="information-circle-outline" size={size} color={color} />
     }
   }}
   
   ></Tab.Screen>



 </Tab.Navigator>

); 
}