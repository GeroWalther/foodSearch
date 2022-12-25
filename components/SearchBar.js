import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function SearchBar({ search, onSearchChange, onTermSubmitt }) {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        placeholderTextColor={"#808080c8"}
        value={search}
        onChangeText={onSearchChange}
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onTermSubmitt}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    marginTop: 10,
    backgroundColor: "#80e3ca3b",
    height: 50,
    borderRadius: 8,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
