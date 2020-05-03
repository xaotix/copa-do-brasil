import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import axios from 'axios'
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { Ionicons } from '@expo/vector-icons';

export default function Inicio(props) {
    const { navigation } = props
    const [dados, setDados] = useState([])
    const getDados = () => {
        axios.get('https://api.api-futebol.com.br/v1/campeonatos', { 'headers': { 'Authorization': 'Bearer test_68c6740ee54d5b79f6e4bc96221129' } })
            .then((retorno) => {
                var arr = [];
                Object.keys(retorno.data).forEach((fase, index) => {
                    arr.push(retorno.data[fase])
                })
                console.log(arr);
                setDados(arr)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }

    useEffect(
        () => {
            getDados()

        }, []
    )

    return (
        <View  style={{flex: 1,  backgroundColor: '#4287f5'}}>
            <FlatList
                data={dados}
                renderItem={
                    ({ item }) =>
                        <ListItem
                            onPress={() =>
                                navigation.navigate("Resultado", { item })
                            }
                            bottomDivider
                            key={item.campeonato_id}
                            title={item.edicao_atual.nome}
                            leftAvatar={{ source: require('./imagens/bola.png') }}
                            Component={TouchableScale}
                            friction={90}
                            tension={100}
                            activeScale={0.95}
                            linearGradientProps={{
                                colors: ['#001ddb', '#4287f5'],
                                start: { x: 1.5, y: 0 },
                                end: { x: 0.5, y: 0 },
                            }}
                            titleStyle={{ color: 'white', fontWeight: 'bold' }}
                            subtitleStyle={{ color: 'white' }}
                            chevron={{ color: 'white' }}
                        >
                        </ListItem>
                }
                keyExtractor={(item) => item.campeonato_id.toString()}
            />

        </View>
    );
}

const styles = StyleSheet.create({
});
