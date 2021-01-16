import { useNavigation } from "@react-navigation/native"
import React from "react"
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import ResultDetail from "./resultDetail"

const ResultsList = ({ title, results }) => {
    const navigation = useNavigation()
    if (!results.length) {
        return null
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={(results) => results.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("ResultShow", {id: item.id})}>
                        <ResultDetail result={item} />
                    </TouchableOpacity>
                )}
            />
            
        </View>
    )
}

export default ResultsList

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    }
})
