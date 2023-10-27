import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { useCameraPermission, useCameraDevice } from 'react-native-vision-camera'
import { useIsFocused } from '@react-navigation/native'
import { useAppState } from '@react-native-community/hooks'
import { Camera } from 'react-native-vision-camera'
import { CameraRoll } from '@react-native-camera-roll/camera-roll'

const About = () => {

      const { hasPermission, requestPermission } = useCameraPermission()
      const isFocused = useIsFocused()
      const appState = useAppState()
      const isActive = isFocused && appState === "active"

      const camera = useRef(null)

      const device = useCameraDevice('back')

      if (hasPermission === false) {
            //request permission
            requestPermission()
      }

      const takePhoto = async () => {
            if (device == null) return
            const photo = await camera.current.takePhoto()
            console.info(photo)
            await CameraRoll.save(`file://${photo.path}`, {
                  type: 'photo',
            })
      }

      // useEffect(() => {
      //       fetchPhoto()
      // }, [])

      // const fetchPhoto = async () => {
      //       const result = await fetch(`file:///data/user/0/com.udeshproject/cache/*.jpg`)
      //       // const data = await result.blob();
      //       console.log(result)
      // }


      if (device == null) return <View><Text>No Camera Found</Text></View>
      return (
            <View style={styles.main} >
                  <Text>About</Text>
                  <Camera
                        style={StyleSheet.absoluteFill}
                        device={device}
                        isActive={isActive}
                        ref={camera}
                        photo={true}
                  />
                  <TouchableOpacity
                        style={{ width: 80, height: 80, borderRadius: 40, borderWidth: 8, borderColor: "#fff", position: 'absolute', bottom: 20 }}
                        onPress={() => takePhoto()}
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