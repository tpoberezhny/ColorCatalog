import React, { useState } from "react";
import { StyleSheet, FlatList } from "react-native";
import ColorButton from "./ColorButton";
import { useColors } from "../hooks";


import ColorForm from "./ColorForm";



export default function ColorList() {
  const [backgroundColor, setBackgroundColor] = useState("blue");
  const {colors, addColor} = useColors();

  return (
    <>
      <ColorForm onNewColor={addColor} />
      <FlatList
        style={[styles.container, { backgroundColor }]}
        data={colors}
        renderItem={({ item }) => {
          return (
            <ColorButton
              key={item.id}
              backgroundColor={item.color}
              onPress={setBackgroundColor}
            />
          );
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    margin: "auto",
  },
});
