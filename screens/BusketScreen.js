import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import {
  removeFromBusket,
  selectBusketItems,
  selectBusketTotal,
} from '../features/busketSlice';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import Currency from 'react-currency-formatter';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../sanity';

const BusketScreen = () => {
  const items = useSelector(selectBusketItems);
  const restaurant = useSelector(selectRestaurant);
  const total = useSelector(selectBusketTotal);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [groupedItemsInBusket, setGroupedItemsInBusket] = useState([]);

  const removeItemFromBusket = (id) => {
    dispatch(removeFromBusket({ id }));
  };
  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      {
        (results[item.id] = results[item.id] || []).push(item);
        return results;
      }
    }, {});
    setGroupedItemsInBusket(groupedItems);
  }, [items]);
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 broder-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-2xl font-bold text-center">Busket</Text>
            <Text className="text-gray-400 text-center">
              {restaurant?.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full absolute top-3 right-5 bg-gray-100 "
          >
            <XCircleIcon color="#00ccbb" height={50} width={50} />
          </TouchableOpacity>
        </View>
        <View className="flex-row item-center space-x-4 px-4 py-3 bg-white my-5 ">
          <Image
            source={{ uri: urlFor(restaurant?.imgUrl).url() }}
            className="h-7 w-7 bg-gray-100 p-4 rounded-full"
          />
          <Text className="flex-1"> Deliver in 50-75 min </Text>
          <TouchableOpacity>
            <Text className="text-[#00ccbb]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBusket).map(([key, items]) => (
            <View
              key={key}
              className="flex flex-row justify-between items-center
              bg-white border p-4 border-gray-200
              py-2"
            >
              <Text className="text-[#00ccbb]">{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0].image).url() }}
                className="h-12 w-12 bg-gray-100 p-4 rounded-full"
              />
              <Text>{items[0].title}</Text>
              <Text>
                <Currency quantity={items[0].price} currency="USD" />
              </Text>
              <TouchableOpacity
                onPress={() => removeItemFromBusket(items[0].id)}
              >
                <Text className="text-[#00ccbb]">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className=" bg-white p-4 border-t mt-5 space-y-5 border-gray-200">
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Subtotal</Text>
            <Text className="text-gray-500">
              <Currency quantity={total} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Delivery Fee</Text>
            <Text className="text-gray-500">
              <Currency quantity={5} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Tax</Text>
            <Text className="text-gray-500">
              <Currency quantity={0.5} currency="USD" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-500">Order Total</Text>
            <Text className="text-gray-500">
              <Currency quantity={total + 5 + 0.5} currency="USD" />
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('PreparingOrderScreen')}
            className="bg-[#00ccbb] p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BusketScreen;
