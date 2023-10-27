import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';

const Todos = () => {

          const [searchQuery, setSearchQuery] = React.useState('');

          const onChangeSearch = query => setSearchQuery(query);

          return (
                    <View>
                              <Searchbar
                                        placeholder="Search"
                                        onChangeText={onChangeSearch}
                                        value={searchQuery}
                                        mode='view'
                                        style={{backgroundColor: 'tomato', borderBottomWidth : 0, elevation: 0, color : 'white', marginBottom : 20}}
                                        showDivider = {false}
                                        theme={{ colors: { primary: 'white', text: 'white', placeholder: 'white' } }}
                              />
                              <Text style={{color : '#000', marginTop : `20`}} >Add Todo</Text>
                    </View>
          )
}

export default Todos

const styles = StyleSheet.create({})