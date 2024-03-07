import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Color from "color";

export default function ColorDetails({ route }) {
  const { color: name } = route.params; // exctracted color parameter we are renaming to "name" using object destruction
  const color = Color(name);
  const textColor = {
    fontSize: 25,
    color: name === "black" ? "white" : "black",
  };
  return (
    <View style={[styles.container, { backgroundColor: name }]}>
      <Text style={textColor}>Color: {name}</Text>
      <Text style={textColor}>{color.rgb().toString()}</Text>
      <Text style={textColor}>{color.hsl().toString()}</Text>
      <Text style={textColor}>Luminosity: {color.luminosity().toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
  },
});
