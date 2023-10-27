import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Products from '../components/Products'
import CustomButton from '../components/CustomButton'
import axios from 'axios'
import { emptyCart } from '../store/actions'

const Cart = () => {

          const cartData = useSelector((state) => state.cart.items);
          const dispatch = useDispatch();

          const postData = async () => {
                    cartData.map(async (item) => {
                              try {
                                        const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                                                  title: item?.name,
                                                  body: item?.description,
                                                  userId: item?.id
                                        })
                                        console.info(response.data)
                              } catch (error) {
                                        console.error(error)
                              }
                    });
                    dispatch(emptyCart())
          }

          return (
                    <ScrollView contentContainerStyle={{ flexDirection: "column", justifyContent: 'space-between', flex: 1 }} >
                              {
                                        cartData?.length > 0 &&
                                        <FlatList
                                                  data={cartData}
                                                  renderItem={({ item }) => <Products product={item} />}
                                                  numColumns={2}
                                                  ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 0.5 }} ></View>}
                                                  keyExtractor={item => item.id.toString()}
                                        />
                              }   
                              {
                                        cartData?.length == 0 &&
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: 'center' }} >
                                                  <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: "#000" }} >Cart is empty</Text>
                                        </View>
                              }
                              {
                                        cartData?.length > 0 &&
                                        <CustomButton title={"Place Order"} callback={() => postData()} style={{ backgroundColor: "#000", marginHorizontal: 20, marginBottom: 20 }} />
                              }
                    </ScrollView>
          )
}

export default Cart

const styles = StyleSheet.create({})