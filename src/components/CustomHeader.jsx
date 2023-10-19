import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { useSelector } from 'react-redux'

const CustomHeader = ({ navigation, title }) => {

          //get cart data from store
          const cartData = useSelector((state) => state.cart.items);

          console.log(cartData)

          return (
                    <View style={styles.container} >
                              <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                        <AntIcon name='left' size={20} />
                                        <Text style={{ ...styles.text, marginLeft: 20 }} >{title}</Text>
                              </View>
                              <TouchableOpacity style={{position : 'relative'}} onPress={()=>navigation.push("Cart")} >
                                        <EntypoIcon name="shopping-cart" size={20} />
                                        <View style={styles.badgeContainer} >
                                                  <Text style={[styles.badge]} >{cartData?.length}</Text>
                                        </View>
                              </TouchableOpacity>
                    </View>
          )
}

export default CustomHeader

const styles = StyleSheet.create({
          container: {
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'tomato',
                    paddingHorizontal: 20,
                    paddingVertical: 15,
          },
          text: {
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white'
          },
          badge : {
                    color : 'tomato',
                    fontSize : 12
          },
          badgeContainer : {
                    position : 'absolute',
                    left : '50%',
                    bottom : '50%',
                    width : 20,
                    height : 20,
                    borderRadius : 10,
                    backgroundColor : '#fff',
                    alignItems : 'center',
                    justifyContent : 'center'
          }
})