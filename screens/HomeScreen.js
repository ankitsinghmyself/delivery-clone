import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon
} from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from '../sanity';
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featured, setFeatured] = React.useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "featured"]{
      _id,
      name,
      short_description,
    }`).then((data) => setFeatured(data));
    console.log(featured);
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5">
      {/* Header */}
      <View className="flex-row pb-3 item-center space-x-2 px-4">
        <Image source={{
          uri: 'https://links.papareact.com/wru',
        }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row bg-gray-200 p-3 rounded-full items-center space-x-2 mx-4 mb-2 ">
        <MagnifyingGlassIcon size={20} color="#00CCBB" />
        <TextInput placeholder="Search" className="flex-1 text-sm" />
        <AdjustmentsVerticalIcon size={20} color="#00CCBB" />
      </View>
      {/* body */}
      <ScrollView className="bg-gray-100">
        {/* category */}
        <Categories />
        {/* featured rows */}
        {featured?.map((item) => (
          <FeaturedRow
          key={item._id} 
          id={item._id}
          title={item.name} 
          description={item.short_description} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen