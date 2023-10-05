import React from 'react'
import { TouchableHighlight, Text } from 'react-native'

const CustomButton = ({callback, title, style}) => {
          return (
                    <TouchableHighlight onPress={()=>callback()} >
                              <Text style={{...style, color : '#fff', borderRadius : 10, padding : 15, textAlign : 'center'}} onPress={callback} >{title}</Text>
                    </TouchableHighlight>
          )
}

export default CustomButton