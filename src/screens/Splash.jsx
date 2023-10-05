import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect, useState} from 'react'
import auth from '@react-native-firebase/auth';

const Splash = ({navigation}) => {

      const [flag, setFlag] = useState(0);

      function onAuthStateChanged(userr) {
            if(!userr){
                  console.log("user not found")
                  redirect("Login")
            }
            else{
                  setFlag(flag+1);
            }
      }

      useEffect(() => {
            console.log(flag)
            if(flag == 1){
                  redirect("Menu")
            }
      }, [flag])

      useEffect(() => {
            const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
            return subscriber; // unsubscribe on unmount
      }, []);

      function redirect(name){
            setTimeout(() => {
                  navigation.replace(name)
            }, 3000);
      }
      

      return (
            <View style={styles.main} >
                  <Text style={{color : "#000", fontSize : 30, fontWeight : 'bold'}} >Splash</Text>
            </View>
      )
}

export default Splash

const styles = StyleSheet.create({
      main : {
            flex : 1,
            alignItems : 'center',
            justifyContent : 'center',
            backgroundColor : '#fff',
      }
})