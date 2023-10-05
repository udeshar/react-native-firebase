import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import auth from '@react-native-firebase/auth';

const Signup = ({ navigation }) => {

          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [conPassword, setConPassword] = useState('');
          const [errorText, setErrortext] = useState('');

          async function signupForm() {
                    setErrortext('')
                    if (!email || !password || !conPassword) {
                              alert("Please fill all the fields")
                              return
                    }
                    if (password != conPassword) {
                              alert("Password and confirm password must be same")
                              return
                    }
                    auth()
                              .createUserWithEmailAndPassword(email,  password)
                              .then(() => {
                                        console.log('User account created & signed in!');
                                        navigation.replace("Menu")
                              })
                              .catch(error => {
                                        if (error.code === 'auth/email-already-in-use') {
                                                  setErrortext('That email address is already in use!');
                                        }
                                        if (error.code === 'auth/invalid-email') {
                                                  setErrortext('That email address is invalid!');
                                        }
                              });
          }

          return (
                    <ScrollView contentContainerStyle={styles.main} >
                              <Text style={styles.heading} >Signup</Text>
                              <View style={styles.inputWrapper} >
                                        <CustomInput
                                                  title={"Email"}
                                                  type={"email-address"}
                                                  placeholder={"Enter your email"}
                                                  value={email}
                                                  setValue={setEmail}
                                        />
                              </View>
                              <View style={styles.inputWrapper}>
                                        <CustomInput
                                                  title={"Password"}
                                                  type={"default"}
                                                  placeholder={"Enter your password"}
                                                  value={password}
                                                  setValue={setPassword}
                                        />
                              </View>
                              <View style={styles.inputWrapper}>
                                        <CustomInput
                                                  title={"Confirm Password"}
                                                  type={"default"}
                                                  placeholder={"Enter your password again"}
                                                  value={conPassword}
                                                  setValue={setConPassword}
                                        />
                              </View>
                              {
                                        ( errorText != '' && errorText != null ) ?
                                        <Text style={{color : 'red', marginVertical : 10}} >{errorText}</Text> :
                                        null
                              }
                              <View style={{ marginTop: 40 }} >
                                        <CustomButton
                                                  title={"Signup"}
                                                  callback={() => signupForm()}
                                                  style={{ backgroundColor: 'black' }}
                                        />
                              </View>
                              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                                        <Text style={styles.normal} >Already registered? login here</Text>
                              </TouchableOpacity>
                    </ScrollView>
          )
}

export default Signup

const styles = StyleSheet.create({
          main: {
                    flex: 1, justifyContent: 'center', paddingHorizontal: 20
          },
          heading: {
                    fontSize: 40,
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: 20
          },
          inputWrapper: {
                    marginVertical: 5
          },
          normal: {
                    color: "#000",
                    fontSize: 18,
                    marginTop: 20
          }
})