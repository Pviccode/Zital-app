import { View, Text, StyleSheet, SafeAreaView, TextInput, ImageBackground, ScrollView, Image, FlatList } from "react-native";
import { FontAwesome6, AntDesign, Feather } from "@expo/vector-icons";
import { trendingDeals } from "../Components/DataSection/Data";
import HomeScreenShop from "../Components/HomeScreenShop";

export default function HomeScreen() {
    const DATA = trendingDeals;

    const TrendingItem = (props) => {
        return (
            <View style={{height: '100%', width: 160, marginRight: 20}}>
              <View style={{backgroundColor: '#f4a3a3', width: 45, alignItems: 'center', padding: 1.5, borderTopStartRadius: 10, borderBottomEndRadius: 10, position: 'absolute', zIndex: 1}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{props.discountPrice}</Text>
              </View>
              <Image source={props.imgSource} style={{width: '100%', height: '72%', borderRadius: 10, marginBottom: 10, backgroundColor: 'red'}}/>
              <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                <Text style={{color: '#f16e6e', fontWeight: 500}}>NGN</Text>
                <Text style={{color: '#f16e6e', fontWeight: 'bold', fontSize: 18}}>{props.sellingPrice}</Text>
              </View>
            </View>
        )
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.user}>
          <View style={styles.userImageUpload}>
            <FontAwesome6 name="user-large" size={24} color="#565555" />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: 'bold', color: "white", fontSize: 20}}>Hi,</Text>
            <Text style={{fontWeight: 'bold', color: "white", fontSize: 20}}>Nnabugwu</Text>
          </View>
        </View>
        <AntDesign name="customerservice" size={30} color="#565555" />
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.searchField} placeholder="Search for item" placeholderTextColor={'#838383'}/>
        <Feather name="search" size={24} color="black" style={{position: 'absolute', right: 340}}/>
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={{paddingVertical: 20}}>
          <View style={{width: "95%", alignSelf: "center"}}>
            <View style={styles.bannerImage}>
              <ImageBackground source={require('../assets/images/banner.png')} resizeMode="cover" style={{flex: 1}}>
                <View style={styles.bannerText}>
                  <Text style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>50%</Text>
                  <Text style={{color: 'white', fontSize: 27, fontWeight: 'bold'}}>OFF</Text>
                </View>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', paddingTop: 10, gap: 17}}>
          <Text style={{marginLeft: 10, fontWeight: 'bold', fontSize: 17}}>Trending Deals</Text>
          <FlatList 
            data={DATA}
            renderItem={({item}) => {
                return <TrendingItem imgSource={item.source()} discountPrice={item.discount} sellingPrice={item.cost}/>
            }}
            horizontal
            keyExtractor={item => item.id}
            style={styles.flatlistCon}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <HomeScreenShop />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4a3a3",
  },
  header: {
    width: "90%",
    height: 50,
    // backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center"
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 11
  },
  userImageUpload: {
    width: 45, 
    height: 45, 
    backgroundColor: "#9d9d9d", 
    alignItems: "center",
    justifyContent: "center",
    borderRadius: '50%'
  },
  searchBar: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    alignItems: 'center',
    width: "90%",
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  searchField: {
    borderWidth: 1,
    padding: 12,
    paddingLeft: 40,
    borderRadius: 5,
    borderColor: '#565555',
    fontSize: 16,
    backgroundColor: 'white',
    color: '#000',
    width: '100%'
  },
  bannerImage: {
    // backgroundColor: 'red',
    height: 180,
    width: '100%',
    shadowColor: 'rgb(52, 51, 51)',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.45,
    shadowRadius: 15,
    elevation: 5
  },
  bannerText: {
    marginLeft: 20,
    marginTop: 15
  },
  flatlistCon: {
    height: 200, 
    paddingLeft: 10,
    // backgroundColor: 'blue'
  }
});

// #ea9898
// #9d9d9d
