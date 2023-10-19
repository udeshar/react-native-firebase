import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products'

const Cart = () => {

          const cartData = useSelector((state) => state.cart.items);

          return (
                    <ScrollView>
                              <Text>Cart</Text>
                              <FlatList 
                                        data={cartData}
                                        renderItem={({item}) => <Products product={item} />}
                                        numColumns={2}
                                        ItemSeparatorComponent={() => <View style={{borderBottomWidth : 0.5}} ></View>}
                                        keyExtractor={item => item.id.toString()}
                              />
                    </ScrollView>
          )
}

export default Cart

const styles = StyleSheet.create({})