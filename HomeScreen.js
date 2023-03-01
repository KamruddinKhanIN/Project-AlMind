import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
const HomeScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const onProcess = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate("Result");
    }, 4000);
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* {loading ? (
          <ActivityIndicator
            //visibility of Overlay Loading Spinner
            visible={loading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={{color: 'red'}}
          />
        ) : ( */}
      <>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 10 }}>
          Upload your CT Scan below.
        </Text>
        {image === null ? (
          <View
            style={{
              width: 300,
              height: 300,
              borderWidth: 1,
              borderColor: "#ccc",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Upload Image</Text>
          </View>
        ) : (
          <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
        )}
        {image === null ? (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#000",
              marginVertical: "5%",
            }}
          >
            <Text onPress={pickImage} style={{ color: "#fff" }}>
              Upload
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#000",
              marginVertical: "5%",
            }}
            onPress={onProcess}
          >
            {loading ? (
              <ActivityIndicator
                //visibility of Overlay Loading Spinner
                visible={loading}
                //Text with the Spinner
                textContent={"Loading..."}
                //Text style of the Spinner Text
                textStyle={{ color: "red" }}
              />
            ) : (
              <Text  style={{ color: "#fff" }}>
                Process
              </Text>
            )}
          </TouchableOpacity>
        )}
      </>
      {/* )} */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
