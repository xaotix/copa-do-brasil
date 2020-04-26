import React from 'react'
import { StyleSheet, Text, View, Button, Image, SafeAreaView, ScrollView } from 'react-native'
import RNSpeedometer from 'react-native-speedometer'


const Resultado = (props) => {
  const { navigation } = props
  const { route } = props
  const { litros } = route.params
  const { kilometros } = route.params
  const { media } = route.params


  return (


    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.cabecalho}>
      <Image source={require('./imagens/inmetro-logo.png')} style={styles.imagem} />
          <Text style={styles.texto}>Litros: {litros} </Text>
          <Text style={styles.texto}>Kilômetros rodados: {kilometros} </Text>
          <Text style={styles.texto}>Consumo médio: {media} Km/L</Text>
        </View>



        <View style={styles.grafico}>
          <SafeAreaView>
            <RNSpeedometer value={media}
              maxValue={25}
            
              labels={[
                {
                  name: 'Categoria E - Terrível',
                  activeBarColor: '#ff2900',
                  maxValue:4,
                  
                  
                },
                {
                  name: 'Categoria D - Ruim',
                  activeBarColor: '#ff5400',
                  maxValue: 8,
                },
                {
                  name: 'Categoria C - Ok',
                  activeBarColor: '#f4ab44',
                  maxValue: 10,
                },
                {
                  name: 'Categoria B - Bom',
                  activeBarColor: '#f2cf1f',
                  maxValue:12,
                },
                {
                  name: 'Categoria A - Ótimo',
                  activeBarColor: '#14eb6e',
                  maxValue:18,
                },
                {
                  name: 'Categoria A+ - Excelente',
                  activeBarColor: '#00ff6b',
                },
              ]
              }

            />

          </SafeAreaView>
        </View>


        <View style={styles.botaoDefault}>
          <Button title="Voltar" onPress={() => navigation.replace("Inicio")} />
        </View>


      </ScrollView>
      <Text style={styles.bottom}>Daniel Lins Maciel - 2020</Text>
    </SafeAreaView>

  )
}

export default Resultado

const styles = StyleSheet.create({
  botaoDefault: {
    marginTop: 75,
    marginBottom: 10
  },
  cabecalho: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: "Roboto",
    marginBottom: 2,
  },
  grafico: {

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
  imagem:
  {
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  scrollView: {
    marginHorizontal: 10,
  },
  footer:
  {
      position: 'absolute',
      bottom: 5
  }

});
