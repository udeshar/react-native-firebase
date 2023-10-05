import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const User = (props) => {

          const {item, index} = props;

          return (
                    <View key={index} style={{ ...styles.flatlistItem, height: 100 }} >
                              <Text style={styles.text} >{item.id}</Text>
                              <Text style={styles.text}>{item.name}</Text>
                              <Text style={{ fontWeight: 'bold', ...styles.text }} >{item.email}</Text>
                    </View>
          )
}

export default User

const styles = StyleSheet.create({
          flatlistItem: {
                    padding: 20,
                    backgroundColor: 'lightgreen',
                    borderRadius: 10
          },
          text : {
                    color : '#000'
          }
})