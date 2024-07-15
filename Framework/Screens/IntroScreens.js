import Swiper from 'react-native-swiper';
import FirstIntroScreen from '../Components/FirstIntroScreen';
import SecondIntroScreen from '../Components/SecondIntroScreen';
import { StyleSheet} from 'react-native';

export default function IntroScreens() {
    let swiperRef = null;
    
    const nextSlide = () => {
      if (swiperRef) {
        swiperRef.scrollBy(1)    //swipe to the next slide
      }
    }

  return (
    <Swiper 
      scrollEnabled={false}
      paginationStyle={{bottom: 227}}
      dotStyle={styles.dotStyling}
      activeDotStyle={styles.activeDotStyling}
      activeDotColor='#000000'
      ref={(ref) => (swiperRef = ref)}
    >
      <FirstIntroScreen onPressNext={nextSlide}/>
      <SecondIntroScreen />
    </Swiper>
  )
}


const styles = StyleSheet.create({
  dotStyling: {
    width: 40,
    height: 6                     //Styling for inactive pagination dots
  },
  activeDotStyling: {
    width: 40,
    height: 6
  }
})