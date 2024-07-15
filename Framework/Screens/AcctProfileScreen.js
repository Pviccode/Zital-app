import { View, Text, StyleSheet, StatusBar, Vibration} from "react-native";
import { NavigateButton, theme } from "../Components/DataSection/Data";
import { FontAwesome5, Entypo, Ionicons, AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

export default function AcctProfileScreen() {
  function activeOpacity() {
    return 0.6
  }
  return (
    <View style={styles.container}>
      <View style={styles.userProfileCon}>
        <View style={styles.userProfile}>
          <View style={styles.userPhoto}>
            <FontAwesome5 name="user-alt" size={50} color={theme.colors.primary1} />
          </View>
          <NavigateButton style={styles.uploadPhoto} activeOpacity={0.7}>
            <Entypo name="camera" size={20} color="white" />
          </NavigateButton>
          <Text style={{fontFamily: theme.fontName.text600[0], fontSize: 19, color: 'white'}}>NJOKU NNABUGWU VICTORY</Text>
        </View>
        <View style={styles.profileBoxes}>
          <View style={styles.box}>
            <NavigateButton activeOpacity={0.3}>
              <Ionicons name="notifications-outline" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
          <View style={styles.box}>
            <NavigateButton activeOpacity={0.3}>
              <AntDesign name="customerservice" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
          <View style={styles.box}>
            <NavigateButton activeOpacity={0.3}>
               <AntDesign name="staro" size={32} color={theme.colors.profileIcons} />
            </NavigateButton>
          </View>
        </View>
      </View>
      <View style={styles.otherInfosCon}>
        <View style={styles.otherInfos}>
          <NavigateButton style={[styles.info, {marginTop: 40}]} activeOpacity={activeOpacity()}>
            <FontAwesome5 name="user" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Edit Profile</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <FontAwesome5 name="history" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Order History</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <FontAwesome name="credit-card" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Cards</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <Ionicons name="location-outline" size={25} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Shipping Address</Text>
          </NavigateButton>
          <NavigateButton style={styles.info} activeOpacity={activeOpacity()}>
            <MaterialIcons name="password" size={24} color={theme.colors.profileIcons} />
            <Text style={styles.infoText}>Change Password</Text>
          </NavigateButton>
        </View>
      </View>
      <StatusBar style='auto' barStyle={'light-content'} />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  userProfileCon: {
    flex: 0.6,
    backgroundColor: theme.colors.primary1,
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
  },
  userProfile: {
    flex: 1,
    alignItems: "center",
    marginTop: 62,
    gap: 25,
  },
  userPhoto: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 70,
  },
  uploadPhoto: {
    backgroundColor: "#0000006c",
    padding: 8,
    borderRadius: 50,
    position: "absolute",
    top: 75,
    left: 226,
  },
  profileBoxes: {
    flexDirection: "row",
    height: 80,
    width: "70%",
    alignSelf: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 262,
  },
  box: {
    backgroundColor: "white",
    width: "30%",
    height: "100%",
    shadowColor: "rgb(128, 128, 128)",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 18,
    elevation: 5,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  otherInfosCon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otherInfos: {
    width: "90%",
    height: "90%",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 30,
    borderColor: "#c0118638",
    gap: 15,
  },
  infoText: {
    fontFamily: theme.fontName.text400[0],
    fontSize: 16,
  },
});
