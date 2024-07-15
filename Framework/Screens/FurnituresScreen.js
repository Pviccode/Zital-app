import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import { furnitureImages, theme } from '../Components/DataSection/Data'

export default function FurnituresScreen() {
  const FURNITURE_PRODUCTS = furnitureImages;

  const FurnitureItem = ({imgSource}) => {
    return (
      <View style={[styles.furnitureItem, styles.furnitureItemShadow]}>
        <Image source={imgSource} style={styles.furnitureImg}/>
        <Text>Why</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={FURNITURE_PRODUCTS}
        renderItem={({item}) => {
          return <FurnitureItem imgSource={item.source()}/>
        }}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{paddingVertical: 17, gap: 20}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  furnitureItem: {
    width: '45%', 
    height: 200,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 10
  },
  furnitureItemShadow: theme.productShadow(),

  furnitureImg: {
    width: "100%", 
    height: '80%', 
    borderTopRightRadius: 10, 
    borderTopLeftRadius: 10
  }
})