import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  StarIcon,
} from "react-native-heroicons/solid";
import {
  MapPinIcon
} from "react-native-heroicons/outline";
import { urlFor } from '../sanity';
import { useNavigation } from '@react-navigation/native';

const RestaurantCards = (
    {id,
    title,
    imgUrl,
    short_description,
    rating,
    genre,
    categories,
    reviews,
    address,
    dishes,
    long,
    lat,}
) => {
  const navigation = useNavigation();
  return (
    
    <TouchableOpacity
    onPress={() => navigation.navigate("Restaurant", {
      id,
      title,
      imgUrl,
      short_description,
      rating,
      genre,
      categories,
      reviews,
      address,
      dishes,
      long,
      lat,
    })}
    className=" bg-white shadow mr-4" >
        <View className="relative">
            <Image source={{ uri: urlFor(imgUrl).url() }}
                className="h-36 w-64 rounded" 
            />
            <View className="px-4 pb-3">
              <Text className="bottom-1 text-black-50 left-1 text-lg font-bold pt-2">{title}</Text>
              <View className="flex-row items-center ">
                <StarIcon color="green" size="22" opacity={0.5} />
                <Text className="bottom-1 text-black-50 left-1 text-gray-500 text-sm font-bold pt-2">
                  <Text className="text-green-500 opacity-50 " >{rating} </Text>
                  · {genre}
                  </Text>
              </View>
              <View className=" flex-row items-center " >
                <MapPinIcon color="gray" size="22" opacity={0.4} />
                <Text className="bottom-1 text-black-50 left-1 text-gray-500 text-sm font-bold pt-2">
                  <Text className="text-gray-500 text-xs " >Nearby · {address} </Text>
                </Text>
              </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCards