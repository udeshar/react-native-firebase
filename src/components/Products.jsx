import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/actions'

const Products = ({ product }) => {
          const { id, name, description, image, category, price } = product;
          const dispatch = useDispatch();

          const AddToCart = () => {
                    dispatch(addToCart(product))
          }

          return (
                    <View style={styles.container} >
                              <View>
                                        <Image
                                                  source={{ uri: product.image }}
                                                  style={styles.image}
                                        />
                                        <Text style={styles.text}>{name}</Text>
                                        <Text style={styles.text}>{description}</Text>
                                        <Text style={styles.text}>{category}</Text>
                                        <Text style={styles.text}>{price}</Text>
                              </View>
                              <View style={{marginTop : 20}} >
                                        <Button title='Add to cart' onPress={()=> AddToCart()} />
                              </View>
                    </View>
          )
}

export default Products

const styles = StyleSheet.create({
          container: {
                    flex: 1,
                    padding: 25,
                    justifyContent : 'space-between',
                    borderRightWidth : 0.5,
          },
          text: {
                    color: 'black',
                    fontSize: 16
          },
          image: {
                    width: '100%',
                    height: 100,
                    backgroundColor: 'grey'
          }
})