import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import axios from 'axios'
import { Button, ListItem, Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';

const Fase = (props) => {
  const { navigation } = props
  const { route } = props
  const { item: fase } = route.params
  const { campeonado_id } = route.params
  const { campeonato } = route.params
  const { fase_id } = fase.fase_id
  const [dados, setDados] = useState([])
  const getDados = () => {
    console.log(fase)
    axios.get('https://api.api-futebol.com.br/v1/campeonatos/' + campeonado_id + '/fases/' + fase_id, { 'headers': { 'Authorization': 'Bearer test_68c6740ee54d5b79f6e4bc96221129' } })
      .then((retorno) => {
        var arr = [];
        Object.keys(retorno.data.chaves).forEach((chave, index) => {
          Object.keys(retorno.data.chaves[chave].ida).forEach((i, index) => {
            arr.push(retorno.data.chaves[chave].ida[i])
          })
        })
        Object.keys(retorno.data.chaves).forEach((chave, index) => {
          Object.keys(retorno.data.chaves[chave].volta).forEach((i, index) => {
            arr.push(retorno.data.chaves[chave].volta[i])
          })
        })
        console.log(arr)
        setDados(arr)
        navigation.setOptions({ title: fase.nome })
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
    <View style={{ flex: 1, backgroundColor: '#4287f5' }}>
      <FlatList
        data={dados}
        renderItem={
          ({ item: jogo }) =>
            <ListItem
              onPress={() => {
                const campeonato_id = campeonato.campeonato_id
                navigation.navigate("Jogo", { item: jogo, campeonato_id, campeonato })
              }
              }
              bottomDivider
              chevron
              key={jogo.partida_id}
              title={jogo.placar}
              subtitle={jogo.data_realizacao != null ? (jogo.data_realizacao + ' ' + jogo.hora_realizacao) : ""}
              leftAvatar={{ source: require('./imagens/jogo.png') }}
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
        keyExtractor={(item) => item.partida_id.toString()}
      />
    </View>
  )
}

export default Fase
const styles = StyleSheet.create({

});
