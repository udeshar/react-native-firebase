import React from "react";
import { View, Text } from "react-native";
const Student = (item) => {
          return(
                    <View>
                              <Text style={{fontSize:20}}>This is a Student Component</Text>
                              <Text>{item.name}</Text>
                    </View>
          )
}
export default Student;