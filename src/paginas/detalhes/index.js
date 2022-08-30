import React from 'react'
import { useRoute } from '@react-navigation/core';

import {View,Text} from 'react-native'




export default function Detalhes(){

    const routes = useRoute();
    
return(

    <View>

    <Text> Essa é a página de detalhes </Text>
    <Text>{routes.params.nome}</Text>
    <Text>{routes.params.email}</Text>

    </View>


);


}