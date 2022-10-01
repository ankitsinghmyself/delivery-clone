import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectBusketItems, selectBusketTotal } from '../features/busketSlice';
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
const DeliveryScreen = () => {
  const items = useSelector(selectBusketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBusketTotal);
  if (items.length === 0) {
    return null;
  }
  const restaurant = useSelector(selectRestaurant);
  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-lg text-white font-light">Order Help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between items-center">
            <View>
              <Text className="text-lg font-bold">Estimate Arrival </Text>
              <Text className="text-4xl font-bold">30-45 min</Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className="h-20 w-20 rounded-full mt-5"
            />
          </View>
          <Progress.Bar
            progress={0.5}
            size={30}
            indeterminate={true}
            color="#00ccbb"
          />
          <Text className="text-gray-500 mt-3">
            your order at {restaurant.title} is being prepared{' '}
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        className="flex-1 -mt-10 z-0"
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType="mutedStandard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.long,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
          pinColor="#00ccbb"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row item-center space-x-5 h-20 space-y-2">
        <Image
          source={{ uri: urlFor(restaurant.image) }}
          className="h-12 w-12 rounded-full bg-gray-300 ml-5 mt-2"
        />
        <View className="flex-1">
          <Text className="text-lg ">{restaurant.title}</Text>
          <Text className="text-gray-400">{restaurant.title}</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
