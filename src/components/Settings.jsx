import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Settings = () => {
  return (
    <View style={styles.main} >
      <Text>Settings</Text>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
          main : {
                    flex : 1,
                    justifyContent : 'center',
                    alignItems : 'center'
          }
})