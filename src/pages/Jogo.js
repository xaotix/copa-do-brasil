import React, { useState, useLayoutEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import axios from 'axios'
import { ListItem, Card } from 'react-native-elements';
import { Tab, Tabs, TabHeading, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const Jogo = (props) => {
  const { navigation } = props
  const { route } = props
  const { item: jogo } = route.params
  const [dados, setDados] = useState([])



  const getDados = () => {

    axios.get('https://api.api-futebol.com.br/v1/partidas/' + jogo.partida_id, { 'headers': { 'Authorization': 'Bearer test_68c6740ee54d5b79f6e4bc96221129' } })
      .then((retorno) => {
        console.log('===========Jogo=======================')
        console.log(retorno.data)
        setDados(retorno.data)
        navigation.setOptions({ title: dados.placar })
        const st = retorno.data;
        setState({ nameList: st });
      })
      .catch((erro) => {
        console.log(erro)
      })

  }


  useLayoutEffect(
    () => {
      getDados()
    }, []
  )



  return dados.estadio != undefined ?




    <View  style={{flex: 1,  backgroundColor: '#4287f5'}}>
      <Tabs initialPage={0}>
        <Tab  heading={ <TabHeading><Ionicons name="md-football" size={32}  color='white'/><Text> Resumo </Text></TabHeading>}>
          <View style={{ flex: 1 }}>

          <Card style={{ flex: 1 }} title={dados.placar}>
            <Text style={styles.texto}>Data: {dados.data_realizacao} </Text>
            <Text style={styles.texto}>Fase: {dados.fase.nome} </Text>
            <Text style={styles.texto}>Estádio: {dados.estadio.nome_popular} </Text>
            </Card>
            <Card style={{ flex: 2 }} title={dados.time_mandante.nome_popular}>
            <Text style={styles.texto}> Técnico: {dados.escalacoes.mandante.tecnico.nome_popular} </Text>
            <Text style={styles.texto}> Esquema Tático: {dados.escalacoes.mandante.esquema_tatico} </Text>
            </Card>
            <Card style={{ flex: 3 }} title={dados.time_visitante.nome_popular}>
            <Text style={styles.texto}> Técnico: {dados.escalacoes.visitante.tecnico.nome_popular} </Text>
            <Text style={styles.texto}> Esquema Tático: {dados.escalacoes.visitante.esquema_tatico} </Text>
            </Card>
          </View>
        </Tab>

        <Tab heading={ <TabHeading><Ionicons name="md-home" size={32} color='white'/><Text>  {dados.time_mandante.nome_popular} </Text></TabHeading>}>
          <FlatList
            data={dados.escalacoes.mandante.titulares}
            renderItem={
              ({ item: jogador }) =>
                <ListItem
                  bottomDivider
                  key={jogo.campeonato_id}
                  title={jogador.atleta.nome_popular}
                  subtitle={jogador.posicao.nome + ", Camisa: " + jogador.camisa}
                  leftAvatar={{ source: require('./imagens/jogador.png') }}
                  onPress={() => {
                  }
                  }
                >
                </ListItem>
            }
            keyExtractor={(item) => item.atleta.atleta_id.toString()}
          />
        </Tab>
        <Tab heading={ <TabHeading><Ionicons name="md-globe" size={32} color='white'/><Text>  {dados.time_visitante.nome_popular} </Text></TabHeading>}>
          <FlatList
            data={dados.escalacoes.visitante.titulares}
            renderItem={
              ({ item: jogador }) =>
                <ListItem
                  bottomDivider
                  key={jogo.campeonato_id}
                  title={jogador.atleta.nome_popular}
                  subtitle={jogador.posicao.nome + ", Camisa: " + jogador.camisa}
                  leftAvatar={{ source: require('./imagens/jogador.png') }}
                  onPress={() => {
                  }
                  }
                >
                </ListItem>
            }
            keyExtractor={(item) => item.atleta.atleta_id.toString()}
          />

        </Tab>
      </Tabs>

    </View>





    : null;
}




export default Jogo

const styles = StyleSheet.create({


});
