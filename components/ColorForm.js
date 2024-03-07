import React, { useState, useRef } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function ColorForm({ onNewColor = (f) => f }) {
  const [inputValue, setInputValue] = useState("");
  const input = useRef();
  return (
    <View style={styles.container}>
      <TextInput
        ref={input}
        style={styles.txtInput}
        value={inputValue}
        onChangeText={setInputValue}
        autoCapitalize="none"
        placeholder="Enter a color..."
      />
      <Button
        title="Add"
        style={styles.btnAdd}
        onPress={() => {
          input.current.blur();
          onNewColor(inputValue);
          setInputValue("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
  },
  txtInput: {
    flex: 1,
    borderWidth: 2,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    height: 40,
    padding: 5,
  },
  btnAdd: {
    borderWidth: 2,
    fontSize: 20,
    margin: 10,
    borderRadius: 5,
    height: 40,
    padding: 5,
  },
});
