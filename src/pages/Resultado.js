import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList} from 'react-native'
import axios from 'axios'
import { ListItem } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale';
import { Ionicons } from '@expo/vector-icons';

const Resultado = (props) => {
  const { navigation } = props
  const { route } = props
  const { item: campeonato } = route.params
  const [dados, setDados] = useState([])

  const getDados = () => {
    console.log(campeonato)
    axios.get('https://api.api-futebol.com.br/v1/campeonatos/' + campeonato.campeonado_id, { 'headers': { 'Authorization': 'Bearer test_68c6740ee54d5b79f6e4bc96221129' } })
      .then((retorno) => {
        console.log(retorno.data.fases)
        setDados(retorno.data.fases)
        navigation.setOptions({ title:  campeonato.nome})
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

  
  return campeonato.edicao_atual.temporada != undefined ?

<View  style={{flex: 1,  backgroundColor: '#4287f5'}}>
          <FlatList
            data={dados}
            renderItem={
              ({ item }) =>
                <ListItem
                  onPress={() => {
                    const campeonato_id = campeonato.campeonato_id
                    navigation.navigate("Fase", { item, campeonato_id, campeonato })
                  }
                  }
                  bottomDivider
                  chevron
                  key={item.campeonado_id}
                  title={item.nome}
                  leftAvatar={{ source: require('./imagens/fase.png') }}
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
            keyExtractor={(item) => item.fase_id.toString()}
          />
</View>
  :null
}
export default Resultado
const styles = StyleSheet.create({
full:{
flex:1
}
});
