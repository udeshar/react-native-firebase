import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contacts = () => {
  return (
    <View stye={styles.main} >
      <Text>Contacts</Text>
    </View>
  )
}

export default Contacts

const styles = StyleSheet.create({
          main : {
                    flex : 1,
                    justifyContent : 'center',
                    alignItems : 'center'
          }
})