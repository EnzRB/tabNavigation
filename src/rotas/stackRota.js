import { createStackNavigator } from "@react-navigation/stack";
import Home from '../paginas/home'
import Detalhes from "../paginas/detalhes";

const Stack = createStackNavigator();

export default function StackRota(){

    return(
        <Stack.Navigator>

        <Stack.Screen name = 'home' component = {Home} ></Stack.Screen>
        <Stack.Screen name='detalhes' component={Detalhes}></Stack.Screen>
        
        

        </Stack.Navigator>
      
    );

}