import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const ButtonComp = ({ iconComp, handlePressIcon }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePressIcon} style={styles.icon}>
        {iconComp}
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  icon: {
    shadowColor: "white",
    padding: 13,
    elevation: 10,
    backgroundColor: colors.boxShadow,
    borderRadius: 30,

    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
});
