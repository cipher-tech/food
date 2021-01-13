import React, { useState } from 'react'
import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses)
        } catch (err){
            setErrorMessage("something went wrong")
        }
    }
    useEffect(() => {
        searchApi("pasta")
    }, [])
    
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={() => setTerm(term)}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen

