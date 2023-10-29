import { StyleSheet, Text, View, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import BackgroundService from 'react-native-background-actions';
import PushNotifications, { PushNotificationsHandler } from 'react-native-push-notification'
import { Button } from 'react-native-paper';

const BackgroundTaskk = () => {

          const [isRunning, setIsRunning] = useState(false);

          const getPermission = async () => {
                    try {
                              const granted = await PermissionsAndroid.request(
                                        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
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
                              } else {
                                        console.log('Camera permission denied');
                              }
                    } catch (err) {
                              console.warn(err);
                    }
          };

          const sleep = (time) => new Promise((resolve) => setTimeout(() => resolve(), time));

          const veryIntensiveTask = async (taskDataArguments) => {
                    // Example of an infinite loop task
                    const { delay } = taskDataArguments;
                    await new Promise(async (resolve) => {
                              for (let i = 0; BackgroundService.isRunning(); i++) {
                                        console.log(i);
                                        await BackgroundService.updateNotification({ taskDesc: 'counter started : ' + i });
                                        await sleep(delay);
                              }
                    });
          };

          useEffect(() => {
                    PushNotifications.requestPermissions();
                    getPermission();
                    startBackgroundTask();
                    // return () => {
                    //           BackgroundService.stop();
                    // }
          }, []);

          const options = {
                    taskName: 'counter',
                    taskTitle: 'counter',
                    taskDesc: 'ExampleTask description',
                    taskIcon: {
                              name: 'ic_launcher',
                              type: 'mipmap',
                              package: 'com.udeshproject',
                    },
                    color: '#ff00ff',
                    parameters: {
                              delay: 1000,
                    },
          }

          async function startBackgroundTask() {
                    try {
                              if (!BackgroundService.isRunning()) {
                                        await BackgroundService.start(veryIntensiveTask, options);
                                        setIsRunning(true);
                              } else{
                                        setIsRunning(true);
                              }
                              // await BackgroundService.updateNotification({taskDesc: 'New ExampleTask description'});
                    } catch (e) {
                              console.log('Error', e);
                    }
          }

          return (
                    <View style={{ paddingTop: 20 }} >
                              <Text style={{ color: "#000", textAlign: "center" }} >Task will be running in background</Text>
                              <Text style={{ color: "#000", textAlign: "center" }}>Check notifications - android 13+</Text>
                              {
                                        isRunning &&
                                        <Button style={{ marginHorizontal: 20, marginTop: 20 }} icon="share" mode="elevated" onPress={() => {
                                                  BackgroundService.stop();
                                                  setIsRunning(false);
                                        }}>
                                                  Stop Background process
                                        </Button> ||
                                        <Button style={{ marginHorizontal: 20, marginTop: 20 }} icon="share" mode="elevated" onPress={async() => {
                                                  await BackgroundService.start(veryIntensiveTask, options);
                                                  setIsRunning(true);
                                        }}>
                                                  Start Background process
                                        </Button>
                              }
                    </View>
          )
}

export default BackgroundTaskk

const styles = StyleSheet.create({})