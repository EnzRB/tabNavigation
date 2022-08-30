import { useNavigation } from '@react-navigation/core';
import React from 'react'

import { StyleSheet, Text, View, Button } from 'react-native';




export default function Home(){

    const navigation = useNavigation();

    function navegaDetalhes(){

            navigation.navigate('detalhes', {nome : 'Doni',email:"teste@teste"})

    }

return(

    <View>

    <Text> ESSA É PAGINA INICIAL </Text>

    <Button title = 'detalhes' onPress={navegaDetalhes}></Button>

    </View>


);


}