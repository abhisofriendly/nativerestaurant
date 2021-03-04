import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen =()=>{
    const [term, setTerm] = useState('');
    const [searchAPi, results, errorMessage ] = useResults();

    const filterResultByPrice = (price)=>{
        return results.filter((result)=>{
            return result.price === price;
        })
    }

    return(
        <>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)}
                onTermSubmit={()=>searchAPi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            {/* <Text>{results.length} results</Text> */}

            <ScrollView>
                <ResultsList result={filterResultByPrice('$')} title="Cost Effective" />
                <ResultsList result={filterResultByPrice('$$')} title="Bit Pricer" />
                <ResultsList result={filterResultByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    
})

export default SearchScreen;