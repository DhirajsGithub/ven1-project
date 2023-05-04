import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../constants/colors";
import { Foundation } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
const Bookings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.euroView1}>
          <Text style={styles.myBooking}>MY BOOKINGS</Text>
        </View>
        <View style={styles.euroView2}>
          <View style={styles.temp}>
            <TouchableOpacity style={styles.euro}>
              <Foundation name="euro" size={50} color={colors.golden} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <View style={styles.qrPrv}>
          <View style={styles.qrView}>
            <Image
              style={{
                width: 100,
                height: 100,
                borderColor: "#444",
                borderWidth: 4,
                borderRadius: 10,
              }}
              source={require("../assets/sampleQr.png")}
            />
            <Text style={{ fontSize: 18, fontWeight: "bold", margin: 8 }}>
              WATERZ
            </Text>
            <View style={styles.details}>
              <View style={styles.det1}>
                <MaterialCommunityIcons
                  name="ticket-confirmation-outline"
                  size={24}
                  color="black"
                  style={{ marginRight: 4 }}
                />
                <View>
                  <Text>2x Couple</Text>
                  <Text>3x Stag</Text>
                </View>
              </View>
              <View>
                <View>
                  <View style={{ flexDirection: "row", marginBottom: 4 }}>
                    <EvilIcons name="clock" size={24} color="black" />
                    <Text>08:00 pm</Text>
                  </View>
                  <View style={{ flexDirection: "row", marginBottom: 4 }}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text>location</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.ninty}>
            <Text style={styles.prvBookings}>PREVIOUS BOOKINGS</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.qr2}>
          <Image
            style={[{ width: 50, height: 50 }, styles.qr2Img]}
            source={require("../assets/qr2.jpg")}
          />
        </View>
        <View style={styles.contain}>
          <TouchableOpacity style={styles.footChild1}>
            <Text style={styles.footChildText1}>Clubs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footChild2}>
            <Text style={styles.footChildText2}>Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Bookings;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightWh,
    borderRadius: 40,
    minHeight: "100%",
  },
  header: {
    backgroundColor: colors.bg,
    flexDirection: "row",
  },
  myBooking: {
    fontSize: 25,
    marginLeft: "auto",
    marginRight: "auto",
    fontWeight: "bold",
    marginTop: 30,
  },
  euroView1: {
    backgroundColor: colors.lightWh,
    width: "70%",
    // right: 0,
    justifyContent: "center",

    height: 80,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  euroView2: {
    backgroundColor: colors.bg,
    width: "30%",
    right: 0,
    top: "10%",
    height: 80,
    borderBottomLeftRadius: 40,
  },
  euro: {
    position: "absolute",
    backgroundColor: colors.lightWh,
    padding: 15,
    width: 80,
    height: 80,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  temp: {
    left: 0,
    right: 0,
    top: "15%",
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  qrPrv: {
    marginTop: "15%",
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  qrView: {
    borderColor: "#444",
    borderWidth: 2,
    paddingVertical: 8,
    width: "70%",
    alignItems: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  det1: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginRight: 15,
  },
  ninty: {
    transform: [{ rotate: "90deg" }],
  },
  prvBookings: {
    borderColor: "#444",
    borderWidth: 2,
    padding: 15,
    // margin: 15,
    borderRadius: 10,
    // top: 50,
  },
  footer: {
    flex: 1,
    marginTop: Platform.OS === "android" ? "8%" : "35%",
  },
  contain: {
    // position: "absolute",
    flexDirection: "row",
    // width: "100%",
    justifyContent: "space-between",
    // left: "10%",
  },
  footChild1: {
    width: "40%",
    backgroundColor: colors.bg,
    // height: 100,
    flexDirection: "row",

    borderTopRightRadius: 100,
  },
  footChild2: {
    width: "40%",
    backgroundColor: colors.bg,
    // height: 100,
    borderTopLeftRadius: 100,
  },
  footChildText1: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: "bold",
    color: colors.lightWh,
    marginLeft: 10,
    height: "50%",
  },
  footChildText2: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.lightWh,
    height: "50%",
    textAlign: "right",
    marginRight: 10,
    marginTop: 10,
  },
  qr2Img: {
    position: "absolute",
    top: "10%",
    // bottom: "40%",
    // left: "50%",
  },
  qr2: {
    justifyContent: "center",
    alignItems: "center",
  },
});
