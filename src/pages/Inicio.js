import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView } from 'react-native'
import { round } from 'react-native-reanimated'

const Inicio = (props) => {

    const [Litros, setLitros] = useState('56')
    const [Kilometros, setKilometros] = useState('480')
    const [msg, setMsg] = useState("Digite os dados de consumo:")

    const { navigation } = props

    const calcular = () => {
        navigation.navigate("Resultado", { litros: Litros, kilometros: Kilometros, media: Number((parseInt(Kilometros) / parseInt(Litros)).toFixed(1)) })

    }

    return (
        <View style={styles.container}>
            <Image source={require('./imagens/inmetro-logo.png')} style={styles.imagem} />
            <Text style={styles.Texto}>{msg}</Text>
            <TextInput
                style={styles.caixaTexto}
                keyboardType={'numeric'}
                placeholder="Litros"
                onChangeText={(valor) => setLitros(valor)}
                value={Litros}
            />
            <TextInput
                style={styles.caixaTexto}
                placeholder="Kilômetros Rodados"
                keyboardType={'numeric'}
                onChangeText={(valor) => setKilometros(valor)}
                value={Kilometros}
            />
            <View style={styles.botaoDefault}>
                <Button
                    title="Calcular"
                    onPress={() => calcular()}
                />
            </View>
            <Text style={styles.footer}>Daniel Lins Maciel - 2020</Text>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    caixaTexto: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        textAlign: "center",
        borderWidth: 1,
        borderColor: 'gray',
        width: "90%",
        padding: 5,
        marginTop: 5
    },
    Texto: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: "Roboto",
        textAlign: "center",
        padding: 5,
        marginTop: 5
    },
    botaoDefault: {
        marginTop: 15
    },
    footer:
    {
        position: 'absolute',
        bottom: 5
    }
});
