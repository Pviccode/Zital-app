import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import { NavigateButton, theme } from "./DataSection/Data";
import { useNavigation } from "@react-navigation/native";

export default function SecondIntroScreen() {
    const nav = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2.5, justifyContent: "flex-end"}}>
        <View style={styles.introImgCon}>
          <View style={[{ width: "60%" }, styles.imgCon]}>
            <Image source={require("../../assets/images/secondIntro.jpg")} style={styles.img}/>
          </View>
        </View>
        <View style={{height: '17%', justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={styles.journeyText}>START</Text>
            <Text style={[styles.journeyText, {marginTop: 6}]}>YOUR SHOPPING JOURNEY</Text>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
        <View style={styles.btnSection}>
          <NavigateButton style={styles.btn} activeOpacity={0.7} onPress={() => nav.replace('Bottom Tab')}>
            <Text style={styles.btnText}>START SHOPPING</Text>
          </NavigateButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.introBg,
  },
  introImgCon: {
    width: "100%",
    height: "70%",
    alignItems: "center",
  },

  imgCon: theme.colors.introShadowProps(),

  img: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  btnSection: {
    height: '55%',
    justifyContent: 'flex-end'
  },
  btn: {
    backgroundColor: theme.colors.primary1,
    borderRadius: 50,
    width: 260,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white', 
    fontSize: 19, 
    fontFamily: theme.fontName.text500[0]
  },
  journeyText: {
    fontSize: 26,
    fontFamily: theme.fontName.text600[0],
    // textShadowColor: 'rgb(184, 184, 184)', 
    // textShadowOffset: { width: 2, height: 6 },
    // textShadowRadius: 7,
  }
});
