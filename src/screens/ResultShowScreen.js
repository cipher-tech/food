import React from 'react'
import { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { FontAwesome } from "@expo/vector-icons"
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

                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{result.name}  </Text>
                </View>
                <View style={{
                    // flex: 1,
                    display: 'flex',
                    flexDirection: "row",
                    paddingLeft: 2,
                    overflow: 'visible',
                    width: "100%",
                    alignSelf: "flex-start",
                    alignItems: "flex-start",
                    justifyItems: "space-between",
                    justifyContent: "space-between"
                }} >
                    <Text style={{
                        flex: 1,
                        width: "90%",
                        alignSelf: 'center',
                        alignContent: 'center'
                    }}>
                        <FontAwesome name="star" style={styles.iconStyle} />
                        <FontAwesome name="star" style={styles.iconStyle} />
                        <FontAwesome name="star" style={styles.iconStyle} />
                        <FontAwesome name="star" style={styles.iconStyle} />
                        <FontAwesome name="star" style={styles.iconStyle} />
                    </Text>
                    <FlatList
                        style={{
                            borderWidth: 1,
                            width: 20,
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
        height: 35,
        width: 35,
        borderRadius: 100,
        marginLeft: -5,
        borderWidth: 2,
        borderColor: "white",
    },
    contentContainer: {
        marginTop: -50,
        // flex: 1,
        zIndex: 20,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: "white",
        padding: 15,
    },
    iconStyle: {
        color: 'black',
        fontSize: 22,
    },
    titleContainer: {
        flexDirection: 'row',
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
