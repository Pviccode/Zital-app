import { TouchableOpacity } from 'react-native'

const carouselItems = [
    {id: 1, source() { return require('../../../assets/images/carousel1.jpg')}},
    {id: 2, source() { return require('../../../assets/images/carousel2.jpg')}},
    {id: 3, source() { return require('../../../assets/images/carousel3.jpg')}},
    {id: 4, source() { return require('../../../assets/images/carousel4.jpg')}},
    {id: 5, source() { return require('../../../assets/images/carousel5.jpg')}},
    {id: 6, source() { return require('../../../assets/images/carousel6.jpg')}},
    {id: 7, source() { return require('../../../assets/images/carousel7.jpg')}},
    {id: 7, source() { return require('../../../assets/images/carousel8.jpg')}},
]
const trendingDeals = [
    {id: 1, source() { return require('../../../assets/images/trend1.png')}, discount: "-45%", cost: "20,000.25"},
    {id: 2, source() { return require('../../../assets/images/trend2.png')}, discount: "-15%", cost: "1,500.78"},
    {id: 3, source() { return require('../../../assets/images/trend3.png')}, discount: "-72%", cost: "478,997.74"},
    {id: 4, source() { return require('../../../assets/images/trend4.png')}, discount: "-20%", cost: "1,030,000.15"},
    {id: 5, source() { return require('../../../assets/images/trend5.png')}, discount: "-56%", cost: "756.25"},
    {id: 6, source() { return require('../../../assets/images/trend6.png')}, discount: "-13%", cost: "8,000.89"},
    {id: 7, source() { return require('../../../assets/images/trend7.png')}, discount: "-19%", cost: "4,700.45"},
]

const homeShopImages = [
    {id: 1, source() {return require('../../../assets/images/shop1.png')}},
    {id: 2, source() {return require('../../../assets/images/shop2.png')}},
    {id: 3, source() {return require('../../../assets/images/shop3.png')}},
    {id: 4, source() {return require('../../../assets/images/shop4.png')}},
    {id: 5, source() {return require('../../../assets/images/shop5.png')}},
    {id: 6, source() {return require('../../../assets/images/shop6.png')}},
    {id: 7, source() {return require('../../../assets/images/shop7.png')}},
    {id: 8, source() {return require('../../../assets/images/shop8.png')}},
    {id: 9, source() {return require('../../../assets/images/shop9.png')}},
    {id: 10, source() {return require('../../../assets/images/shop10.png')}},
    {id: 11, source() {return require('../../../assets/images/shop11.png')}},
    {id: 12, source() {return require('../../../assets/images/shop12.png')}},
    {id: 13, source() {return require('../../../assets/images/shop13.png')}},
    {id: 14, source() {return require('../../../assets/images/shop14.png')}},
]

const furnitureImages = [
    {id: 1, source() {return require('../../../assets/images/furniture1.png')}},
    {id: 2, source() {return require('../../../assets/images/furniture2.png')}},
    {id: 3, source() {return require('../../../assets/images/furniture3.png')}},
    {id: 4, source() {return require('../../../assets/images/furniture4.png')}},
    {id: 5, source() {return require('../../../assets/images/furniture5.png')}},
    {id: 6, source() {return require('../../../assets/images/furniture6.png')}},
    {id: 7, source() {return require('../../../assets/images/furniture7.png')}},
    {id: 8, source() {return require('../../../assets/images/furniture8.png')}},
    {id: 9, source() {return require('../../../assets/images/furniture9.png')}},
    {id: 10, source() {return require('../../../assets/images/furniture10.png')}},
    {id: 11, source() {return require('../../../assets/images/furniture11.png')}},
    {id: 12, source() {return require('../../../assets/images/furniture12.png')}},
    {id: 13, source() {return require('../../../assets/images/furniture13.png')}},
    {id: 14, source() {return require('../../../assets/images/furniture14.png')}},
    {id: 15, source() {return require('../../../assets/images/furniture15.png')}},
    {id: 16, source() {return require('../../../assets/images/furniture16.png')}},
    {id: 17, source() {return require('../../../assets/images/furniture17.png')}},
    {id: 18, source() {return require('../../../assets/images/furniture18.png')}},
    {id: 19, source() {return require('../../../assets/images/furniture19.png')}},
    {id: 20, source() {return require('../../../assets/images/furniture20.png')}},
    {id: 21, source() {return require('../../../assets/images/furniture21.png')}},
    {id: 22, source() {return require('../../../assets/images/furniture22.png')}},
    {id: 23, source() {return require('../../../assets/images/furniture23.png')}},
    {id: 24, source() {return require('../../../assets/images/furniture24.png')}},
    {id: 25, source() {return require('../../../assets/images/furniture25.png')}},
    {id: 26, source() {return require('../../../assets/images/furniture26.png')}},
    {id: 27, source() {return require('../../../assets/images/furniture27.png')}},
    {id: 28, source() {return require('../../../assets/images/furniture28.png')}},
    {id: 29, source() {return require('../../../assets/images/furniture29.png')}},
    {id: 30, source() {return require('../../../assets/images/furniture30.png')}},
    {id: 31, source() {return require('../../../assets/images/furniture31.png')}},
    {id: 32, source() {return require('../../../assets/images/furniture32.png')}},
]

const theme = {
  colors: {
    introBg: "white",
    introShadowProps: () => {
      return {
        shadowColor: "rgb(36, 36, 36)",
        shadowOffset: { width: 2, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 30,
        elevation: 5,
      };
    },
    primary1: '#c01185',
    profileIcons: 'black'
  },
  fontName: {
    text400: ['Poppins_400Regular', 'Poppins_400Regular_Italic'],
    text500: ['Poppins_500Medium', 'Poppins_500Medium_Italic'],
    text600: ['Poppins_600SemiBold', 'Poppins_600SemiBold_Italic'],
    text700: ['Poppins_700Bold', 'Poppins_700Bold_Italic'],
  },
  productShadow: () => {
    return {
      shadowColor: 'rgb(137, 137, 137)',
      shadowOffset: {width: 2, height: 4},
      shadowOpacity: 0.45,
      shadowRadius: 15,
      elevation: 5
    }
  }
};

function NavigateButton(props) {
    return (
        <TouchableOpacity style={props.style} activeOpacity={props.activeOpacity} onPress={props.onPress}>
            {props.children}
        </TouchableOpacity>
    )
}

export {trendingDeals, homeShopImages, carouselItems, theme, NavigateButton, furnitureImages}