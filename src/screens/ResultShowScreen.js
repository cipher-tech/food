import React from 'react'
import { useEffect,useState } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import yelp from '../api/yelp'

const ResultShowScreen = ({route, navigation}) => {
    const [result, setResult] = useState(null)
    const {id} = route.params

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
        // console.log(response.data);
    };
    useEffect(() => {
        getResult(id)
    }, [])

    if(!result){
        return null
    }
    return (
        <View>
            <Text>{result.name} </Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => (
                    <Image style={styles.image} source={{uri: item}} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})

export default ResultShowScreen
