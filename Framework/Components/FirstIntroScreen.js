import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import { theme, NavigateButton } from "./DataSection/Data";

export default function FirstIntroScreen({onPressNext}) {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 2.5, justifyContent: "flex-end"}}>
        <View style={styles.introImgCon}>
          <View style={[{ width: "50%", justifyContent: "flex-end" }, styles.imgCon]}>
            <Image source={require("../../assets/images/firstIntro3.jpg")} style={styles.img1}/>
          </View>
          <View style={[{ width: "50%" }, styles.imgCon]}>
            <Image source={require("../../assets/images/firstIntro1.jpg")} style={styles.img2}/>
          </View>
        </View>
      </View>
      <View style={{flex: 1, marginTop: 20, alignItems: 'center'}}>
        <View style={styles.btnSection}>
          <NavigateButton style={styles.btn} activeOpacity={0.7}>
            <Text style={styles.btnText}>Sign Up</Text>
          </NavigateButton>
          <NavigateButton style={styles.btn} activeOpacity={0.7} onPress={onPressNext}>
            <Text style={styles.btnText}>Next</Text>
          </NavigateButton>
        </View>
        <View style={{flexDirection: 'row', gap: 5, marginTop: 20}}>
            <Text style={{fontFamily: theme.fontName.text400[0]}}>Already have an account?</Text>
            <NavigateButton activeOpacity={0.5}>
                <Text style={{color: theme.colors.primary1, fontFamily: theme.fontName.text500[0]}}>Sign In</Text>
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
    flexDirection: "row",
    width: "90%",
    height: "90%",
    alignSelf: "center",
    gap: 10,
  },

  imgCon: theme.colors.introShadowProps(),

  img1: {
    width: "100%",
    height: "50%",
    borderRadius: 5,
  },
  img2: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  btnSection: {
    flexDirection: 'row',
    gap: 15,
    height: '55%',
    alignItems: 'flex-end'
  },
  btn: {
    backgroundColor: theme.colors.primary1,
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: 'white', 
    fontSize: 20, 
    fontFamily: theme.fontName.text500[0]
  }
});
