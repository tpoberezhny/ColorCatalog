import React from "react";

import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function ColorButton({ backgroundColor, onPress = (f) => f }) {
  return (
    <TouchableHighlight
      style={styles.button}
      onPress={() => onPress(backgroundColor)}
      underlayColor="white"
    >
      <View style={styles.row}>
        <View style={[styles.sample, { backgroundColor }]}></View>
        <Text style={styles.buttonText}>{backgroundColor}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, .8)",
    width: windowWidth - 100,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 30,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  sample: {
    height: 20,
    width: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
