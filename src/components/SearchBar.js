import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from "@expo/vector-icons"
const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                onChangeText={(value) => onTermChange(value)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={onTermSubmit}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 10,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    }
})

export default SearchBar

