import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {

          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [errorText, setErrortext] = useState('');

          const login = async () => {
                    setErrortext('');
                    if (!email || !password) {
                              alert("Please fill all the fields")
                    } else {
                              auth()
                                        .signInWithEmailAndPassword(email, password)
                                        .then((user) => {
                                                  console.log(user);
                                                  // If server response message same as Data Matched
                                                  if (user) navigation.replace("Menu");
                                        })
                                        .catch((error) => {
                                                  console.log(error);
                                                  if (error.code === "auth/invalid-email")
                                                            setErrortext(error.message);
                                                  else if (error.code === "auth/user-not-found")
                                                            setErrortext("No User Found");
                                                  else {
                                                            setErrortext(
                                                                      "Please check your email id or password"
                                                            );
                                                  }
                                        });
                    }
          }

          return (
                    <ScrollView contentContainerStyle={styles.main} >
                              <Text style={styles.heading} >Login</Text>
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
                                                  password={true}
                                                  placeholder={"Enter your password"}
                                                  value={password}
                                                  setValue={setPassword}
                                        />
                              </View>
                              {
                                        ( errorText != '' && errorText != null ) ?
                                        <Text style={{color : 'red', marginVertical : 10}} >{errorText}</Text> :
                                        null
                              }
                              <View style={{ marginTop: 40 }} >
                                        <CustomButton
                                                  title={"Login"}
                                                  callback={() => login()}
                                                  style={{ backgroundColor: 'black' }}
                                        />
                              </View>
                              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                                        <Text style={styles.normal} >not yet registered? sign up here</Text>
                              </TouchableOpacity>
                    </ScrollView>
          )
}

export default Login

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