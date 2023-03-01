import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const ProcessScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 16, color: "#000", textAlign:'center' }}>
        You have  <Text style={{ fontWeight: "bold" }}>Alzheimer's</Text> with probability of{" "}
        <Text style={{ fontWeight: "bold" }}>99.76%</Text>.
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#000",
          marginVertical: 10,
          textAlign: "center",
        }}
      >
        You can visit the below nearest hospitals to get diagnosed.
      </Text>
      <Image source={require("./assets/Screenshot_2023-02-28_231132.jpg")} />
    </View>
  );
};

export default ProcessScreen;

const styles = StyleSheet.create({});
