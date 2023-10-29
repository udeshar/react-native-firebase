import { StyleSheet, Text, View, PermissionsAndroid, FlatList } from 'react-native'
import React, { useEffect, memo } from 'react'
import Contacts from 'react-native-contacts';
import { List, MD3Colors } from 'react-native-paper';
import AntIcon from 'react-native-vector-icons/AntDesign';

const ListItem = memo(({ item, navigation }) => (
          <List.Item
                    onPress={() => navigation.push("SingleContact", { item })}
                    title={item.displayName}
                    left={() => <List.Icon icon="account-circle-outline" style={{ marginLeft: 20 }} />}
                    right={() => <List.Icon icon="chevron-right" />}
                    description={item?.phoneNumbers[0]?.number}
          />
));

const Contactss = ({ navigation }) => {

          const [cont, setContacts] = React.useState([])

          useEffect(() => {
                    getPermission()
          }, [])

          const getPermission = async () => {
                    try {
                              const granted = await PermissionsAndroid.request(
                                        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                                        {
                                                  title: 'cool practice app storage permission',
                                                  message:
                                                            'Cool Photo App needs access to your camera ' +
                                                            'so you can take awesome pictures.',
                                                  buttonNeutral: 'Ask Me Later',
                                                  buttonNegative: 'Cancel',
                                                  buttonPositive: 'OK',
                                        },
                              );
                              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                        console.log('You can use the camera');
                                        Contacts.getAll()
                                                  .then((contacts) => {
                                                            // work with contacts
                                                            setContacts(contacts)
                                                            console.log(contacts);
                                                  })
                                                  .catch((e) => {
                                                            console.log(e);
                                                  });
                              } else {
                                        console.log('Camera permission denied');
                              }
                    } catch (err) {
                              console.warn(err);
                    }
          };

          return (
                    <View >
                              <List.Section>
                                        <FlatList
                                                  data={cont}
                                                  renderItem={({ item }) => <ListItem item={item} navigation={navigation} /> }
                                                  keyExtractor={item => item.recordID}
                                                  showsVerticalScrollIndicator={true}
                                                  initialNumToRender={20}
                                        />
                              </List.Section>
                    </View>
          )
}

export default Contactss

const styles = StyleSheet.create({})