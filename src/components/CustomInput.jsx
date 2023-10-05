import React from 'react'
import { TextInput, View, Text } from 'react-native'

const CustomInput = ({title, value, setValue, placeholder, type, password}) => {
          return (
                    <View style={{marginTop: 10}} >
                              <Text style={{color : 'black'}} >{title}</Text>
                              <TextInput 
                                        style={{color: 'black', fontSize: 16, borderRadius : 10, borderWidth : 1, marginTop : 5, paddingLeft : 15}}
                                        value={value}
                                        onChangeText={(e)=>{
                                                  setValue(e)
                                        }}
                                        placeholder={placeholder}
                                        placeholderTextColor={'grey'}
                                        keyboardType={type}
                                        secureTextEntry={password  ? true : false}
                              />
                    </View>
          )
}

export default CustomInput