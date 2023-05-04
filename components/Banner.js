import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Foundation } from "@expo/vector-icons";

const Banner = () => {
  const balance = 1260.5;
  return (
    <View style={styles.container}>
      <View style={styles.vipView}>
        <Text style={styles.vipText}>VIP Membership</Text>
      </View>
      <View style={styles.balance}>
        <Text style={{ color: colors.gray, fontSize: 18, marginBottom: 5 }}>
          Balance
        </Text>
        <Text style={styles.balValue}>$ {balance}</Text>
      </View>
      <View style={styles.euroView}>
        <Foundation
          style={{ marginRight: 10 }}
          name="euro"
          size={30}
          color={colors.golden}
        />
        <Text style={[styles.balValue, { color: colors.golden }]}>1385</Text>
      </View>
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    margin: 30,
    marginVertical: 40,
    shadowColor: colors.white,
    padding: 18,
    elevation: 20,
    backgroundColor: colors.boxShadow,
    borderRadius: 15,
    shadowOffset: { width: -2, height: -2 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  vipView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 18,
  },
  vipText: {
    // alignItems: "end",

    fontSize: 13,
    color: colors.golden,
  },
  balValue: {
    color: colors.lightWh,
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 3,
  },
  euroView: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
