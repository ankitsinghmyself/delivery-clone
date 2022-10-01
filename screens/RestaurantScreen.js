import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Menu,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { urlFor } from '../sanity';
import {
  ArrowLeftIcon,
  StarIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/solid';
import DishRow from '../components/DishRow';
import BusketIcon from '../components/BusketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestaurantScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
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
  } = route.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  useEffect(() => {
    dispatch(
      setRestaurant({
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
      })
    );
  }, []);
  return (
    <>
      <BusketIcon />
      <ScrollView>
        <View className=" relative ">
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="h-36 w-full bg-gray-200 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full "
          >
            <ArrowLeftIcon color="#00ccbb" size="22" />
          </TouchableOpacity>
        </View>
        <View className="px-4 pb-3 bg-white ">
          <Text className="bottom-1 text-black-50 left-1 text-lg font-bold pt-2">
            {title}
          </Text>
          <View className="">
            <View className="flex-row">
              <View className="flex-row items-center ">
                <StarIcon color="green" size="22" opacity={0.5} />
                <Text className="bottom-1 text-black-50 left-1 text-gray-500 text-sm font-bold pt-2">
                  <Text className="text-green-500 opacity-50 ">{rating} </Text>·{' '}
                  {genre}
                </Text>
              </View>
              <View className=" flex-row items-center px-1">
                <MapPinIcon color="gray" size="22" opacity={0.4} />
                <Text className="bottom-1 text-black-50 left-1 text-gray-500 text-sm font-bold pt-2">
                  Nearby · {address}
                </Text>
              </View>
            </View>
            <Text className="bottom-1 left-1 text-gray-500 text-sm font-bold pt-2">
              {short_description}
            </Text>
          </View>

          <TouchableOpacity className="flex-row items-center border-gray-300 border-y mt-4 space-x-4 ">
            <QuestionMarkCircleIcon color="gray" size="20" opacity={0.5} />
            <Text className="flex-1 bottom-1 text-black-50 left-1 text-gray-500 text-sm font-bold pt-2">
              Have a food allergy?
            </Text>
            <ChevronRightIcon size="22" color="#00ccbb" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className=" px-4 pt-6 mb-3 font-bold text-xl ">Menu</Text>
          {/* DishRow */}
          {dishes.map(
            (dish) => (
              console.log(dish),
              (
                <DishRow
                  key={dish._id}
                  id={dish._id}
                  title={dish.name}
                  image={dish.image}
                  price={dish.price}
                  short_description={dish.short_description}
                />
              )
            )
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
