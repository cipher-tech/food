import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import useResults from '../components/hooks/useResults'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, errorMessage, searchApi] = useResults()
    // console.log(results);
    const filterResultsByPrice = (price) => {
        return results.filter(result => result.price === price)
    }
    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={() => setTerm(term)}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice("$")}
                    title="Cost Effective"
                />

                <ResultsList
                    results={filterResultsByPrice("$$")}
                    title="Big Pricer" />
                <ResultsList
                    results={filterResultsByPrice("$$$")}
                    title="Big Spender" />
                <ResultsList
                    results={filterResultsByPrice("$$$$")}
                    title="Bigger Spender" />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen

