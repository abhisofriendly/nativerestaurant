import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen =()=>{
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const searchAPi = async ()=>{
        try{

            const response = await yelp.get();
            console.log(response);
        }catch(error){
            console.log(error)
        }
    }


    return(
        <View>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={()=>console.log('term submitted')} />
            <Text>Search screen in action</Text>
            <Text>{results.length} results</Text>
            <Button title="hello click" onPress={()=>searchAPi()} />
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen;