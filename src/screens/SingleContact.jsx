import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import Share from 'react-native-share';

const SingleContact = (props) => {
          const contact = props.route.params.item;
          return (
                    <View style={{ paddingTop: 20 }} >
                              <Text style={{ color: "#000", textAlign: "center", fontWeight: "bold", fontSize: 20 }} >{contact.displayName}</Text>
                              <Text style={{ color: "#000", textAlign: "center", fontSize: 18, marginTop: 10 }}>{contact.phoneNumbers[0].number}</Text>
                              <View style={{ alignItems: "center", marginTop: 40 }} >
                                        <Button icon="share" mode="elevated" onPress={() => {
                                                  const options = {
                                                            message : `${contact.displayName} \n ${contact.phoneNumbers[0].number}\nhttps://truecaller.com/search/in/${contact.phoneNumbers[0].number.replace(/\s+/g, '')}`,
                                                            type : "contact"
                                                  }
                                                  Share.open(options)
                                                            .then((res) => {
                                                                      console.log(res);
                                                            })
                                                            .catch((err) => {
                                                                      err && console.log(err);
                                                            });
                                        }}>
                                                  Share contact
                                        </Button>
                              </View>
                    </View>
          )
}

export default SingleContact

const styles = StyleSheet.create({})