import { StyleSheet, Text, View, PermissionsAndroid, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import CustomButton from '../components/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls'

const requestDocumentPermission = async () => {
          try {
                    const granted = await PermissionsAndroid.request(
                              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
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
                              return true
                    } else {
                              console.log('Camera permission denied');
                              return false
                    }
          } catch (err) {
                    console.warn(err);
                    return false
          }
};

const Doc = () => {
          React.useEffect(() => {
                    if (requestDocumentPermission()) {
                              console.log("you have the permission")
                    }
          }, [])
          const [file, setFile] = useState([]);
          let player = React.useRef(null)

          return (
                    <View style={{ flex: 1, justifyContent: "space-between" }} >
                              <ScrollView horizontal={true} >
                                        <View style={{ flexDirection: "row" }} >
                                                  {
                                                            file.map((item) => (
                                                                      item?.type == "video/mp4" &&
                                                                                <VideoPlayer
                                                                                          source={item}
                                                                                          ref={(ref) => {
                                                                                                    player = ref
                                                                                          }}
                                                                                          style={styles.backgroundVideo}
                                                                                          resizeMode={"contain"}
                                                                                />
                                                                                ||
                                                                                <Image source={item} style={{ width: Dimensions.get('window').width, height: 500, objectFit: 'contain', flex: 1 }} />
                                                            )
                                                            )
                                                  }
                                        </View>
                              </ScrollView>
                              <CustomButton
                                        title={"pick document"}
                                        style={{ backgroundColor: "#000", marginVertical: 20, marginHorizontal: 20 }}
                                        callback={async () => {
                                                  const res = await DocumentPicker.pick({
                                                            presentationStyle: "fullScreen",
                                                            allowMultiSelection: true
                                                  })
                                                  console.log(res)
                                                  setFile(res)
                                        }}
                              />
                    </View>
          )
}

export default Doc

var styles = StyleSheet.create({
          backgroundVideo: {
                    width : Dimensions.get('window').width,
                    height: 300,
                    objectFit : 'contain',
                    backgroundColor: "#000",
          },
});