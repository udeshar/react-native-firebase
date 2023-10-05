import { StyleSheet, Text, View, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const Assignment2 = () => {

          const [email, setEmail] = useState('')
          const [password, setPassword] = useState('')
          const [customPassword, setCustomPassword] = useState('')
          const [isFormSubmitted, setIsFormSubmitted] = useState(false)

          const onSubmit = () => {
                    if (email === '' || password === '' || customPassword === '') {
                              alert('Please fill all the fields')
                              return
                    } else if (password !== customPassword) {
                              alert('Password and custom password must be same')
                              return
                    } else {
                              setIsFormSubmitted(true)
                    }
          }

          return (
                    <SafeAreaView style={styles.main} >
                              <View style={{ ...styles.halfScreen }} >
                                        <ScrollView>
                                                  <KeyboardAvoidingView>
                                                            <Text style={{ ...styles.text, ...styles.heading }} >Student Registration</Text>
                                                            <CustomInput
                                                                      placeholder={'Enter your email'}
                                                                      title={'Email'}
                                                                      type={'email-address'}
                                                                      value={email}
                                                                      setValue={setEmail}
                                                            />
                                                            <CustomInput
                                                                      placeholder={'Enter your password'}
                                                                      title={'Password'}
                                                                      type={'default'}
                                                                      value={password}
                                                                      setValue={setPassword}
                                                                      password={true}
                                                            />
                                                            <CustomInput
                                                                      placeholder={'Enter your custom password'}
                                                                      title={'Custom Password'}
                                                                      type={'default'}
                                                                      value={customPassword}
                                                                      setValue={setCustomPassword}
                                                                      password={true}
                                                            />
                                                            <CustomButton
                                                                      title={'Register'}
                                                                      callback={() => onSubmit()}
                                                                      style={{ backgroundColor: 'green', marginTop: 20 }}
                                                            />
                                                  </KeyboardAvoidingView>
                                        </ScrollView>
                              </View>
                              <View style={{ ...styles.halfScreen, marginTop: 0 }} >
                                        <View style={{ flex: 1 }} >
                                                  <Text style={{ ...styles.text, ...styles.subheading }} >Registration Details will appear here after form is submited</Text>
                                                  {
                                                            isFormSubmitted && (
                                                                      <>
                                                                                <Text style={{ ...styles.text, marginTop: 20 }} >Email : {email}</Text>
                                                                                <Text style={{ ...styles.text, marginTop: 20 }} >Password : {password}</Text>
                                                                                <Text style={{ ...styles.text, marginTop: 20 }} >Custom Password : {customPassword}</Text>
                                                                      </>
                                                            )
                                                  }
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', gap: 15 }}>
                                                  <View style={styles.flexitem} >
                                                            <Text>Flex item 1</Text>
                                                  </View>
                                                  <View style={styles.flexitem}>
                                                            <Text>Flex item 2</Text>
                                                  </View>
                                        </View>
                              </View>
                    </SafeAreaView>
          )
}

export default Assignment2

const styles = StyleSheet.create({
          main: {
                    flex: 1,
                    backgroundColor: '#fff',
          },
          halfScreen: {
                    flex: 1,
                    backgroundColor: '#f0f0f0',
                    margin: 15,
                    borderRadius: 10,
                    padding: 20,
                    borderColor: 'green',
                    borderWidth: 0.5
          },
          text: {
                    color: 'black',
          },
          heading: {
                    fontSize: 20,
                    fontWeight: 'bold',
          },
          subheading: {
                    fontSize: 16,
                    fontWeight: 'bold',
          },
          flexitem: {
                    flex: 1,
                    backgroundColor: 'green',
                    borderRadius: 10,
                    opacity: 0.5,
                    alignItems: 'center',
                    justifyContent: 'center'
          }
})