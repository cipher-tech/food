import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import yelp from '../api/yelp'

const ResultShowScreen = ({ route, navigation }) => {
    const [result, setResult] = useState(null)
    const { id } = route.params

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
        // console.log(response.data);
    };
    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }
    return (
        <>
            <Image style={styles.HeaderImage} source={{ uri: result.image_url }} />
            <View style={styles.contentContainer}>

                <View>
                    <Text style={styles.title}>{result.name}  </Text>
                    <FlatList
                        style={{
                            borderWidth: 3,
                            borderColor: "black",
                            paddingLeft: 15,
                            alignItems: 'center'
                        }}
                        horizontal
                        data={result.photos}
                        keyExtractor={(photo) => photo}
                        renderItem={({ item }) => (
                            <Image style={styles.image} source={{ uri: item }} />
                        )}
                    />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 100,
        marginLeft: -10,
        borderWidth: 3,
        borderColor: "white",
    },
    contentContainer: {
        marginTop: -50,
        flex: 1,
        zIndex: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "white",
        padding: 15,
        // paddingHorizontal: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: 27,
        marginVertical: 10,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
        // fontFamily: "Montserrat"
    },
    HeaderImage: {
        width: "100%",
        height: 250,
        zIndex: -1
    }
})

export default ResultShowScreen
