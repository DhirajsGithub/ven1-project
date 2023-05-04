import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import ButtonComp from "../components/ButtonComp";
import Banner from "../components/Banner";
import Bookings from "../components/Bookings";

const HomePage = () => {
  const handlePressGroup = () => {};
  const handlePressProfile = () => {};
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerIcons}>
          <ButtonComp
            handlePressIcon={handlePressGroup}
            iconComp={
              <MaterialCommunityIcons
                name="account-group-outline"
                size={28}
                color={colors.lightWh}
              />
            }
          />

          <ButtonComp
            handlePressIcon={handlePressProfile}
            iconComp={
              <MaterialIcons
                name="person-outline"
                size={28}
                color={colors.lightWh}
              />
            }
          />
        </View>
        <View style={styles.banner}>
          <Banner />
        </View>
        <View style={styles.bookings}>
          <Bookings />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: colors.white,
  },
  headerIcons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 5,
  },
});
