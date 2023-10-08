import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'
import { useAppState } from '@react-native-community/hooks'
import { Camera } from 'react-native-vision-camera'

const About = () => {

      const { hasPermission, requestPermission } = useCameraPermission()
      const isFocused = useIsFocused()
      const appState = useAppState()
      const isActive = isFocused && appState === "active"

      const device = useCameraDevice('back')

      if (hasPermission === false) {
            //request permission
            requestPermission()
      }

      if (device == null) return <View><Text>No Camera Found</Text></View>
      return (
            <View style={styles.main} >
                  <Text>About</Text>
                  <Camera
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={isActive}
                  />
            </View>
      )
}

export default About

const styles = StyleSheet.create({
      main: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
      }
})