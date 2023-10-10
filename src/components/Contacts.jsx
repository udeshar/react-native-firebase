import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';

const Contacts = () => {

      const [hasPermission, setHasPermission] = useState(true);

      const reuestStoragePermission = async () => {
            // react-native-permissions for read_external_storage
            request(PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE)
            .then((result) => {
                  switch (result) {
                        case RESULTS.UNAVAILABLE:
                              console.log('This feature is not available (on this device / in this context)');
                              setHasPermission(false);
                              break;
                        case RESULTS.DENIED:
                              console.log('The permission has not been requested / is denied but requestable');
                              setHasPermission(false);
                              break;
                        case RESULTS.GRANTED:
                              console.log('The permission is granted');
                              break;
                        case RESULTS.BLOCKED:
                              console.log('The permission is denied and not requestable anymore');
                               setHasPermission(false);
                              break;
                        case RESULTS.LIMITED:
                              console.log('The permission is limited: some actions are possible');
                              break;
                  }
            })
      }

      useEffect(() => {
            reuestStoragePermission();
      }, [])
      
      if(!hasPermission) return (
            <View style={styles.main}>
                  <Text>Permission not granted</Text>
            </View>
      )

      return (
            <View stye={styles.main} >
                  <Text>Contacts me</Text>
            </View>
      )
}

export default Contacts

const styles = StyleSheet.create({
      main: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
      }
})