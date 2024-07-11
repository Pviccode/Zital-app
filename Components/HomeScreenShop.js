import { StyleSheet, Text, View, Image } from 'react-native';
import { homeShopImages } from './DataSection/Data';

export default function HomeScreenShop() {

    const displayProducts = function() {
        return homeShopImages.map((item) => {
            return (
                <View style={styles.shopItem} key={item.id}>
                    <Image source={item.source()} style={{width: "100%", height: '100%', borderRadius: 10}}/>
                </View>
            )
        })
    }
  return (
    <View style={styles.container}>
      <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 17}}>Shop</Text>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 20}}>
      {displayProducts()}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: 'white',
        height: '100%',
        marginTop: 10,
        paddingTop: 10,
        gap: 17,
        marginBottom: 20
    },
    shopItem: {
        width: '44%', 
        height: 200,
        shadowColor: 'rgb(137, 137, 137)',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.45,
        shadowRadius: 15,
        elevation: 5
    }
})