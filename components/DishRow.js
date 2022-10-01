import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import Currency from 'react-currency-formatter';
import { urlFor } from '../sanity';
import {
  MinusCircleIcon,
  MinusIcon,
  PlusCircleIcon,
} from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToBusket,
  selectBusketWithId,
  removeFromBusket,
} from '../features/busketSlice';
const DishRow = ({ id, title, price, image, short_description }) => {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBusketWithId(state, id));
  const dispatch = useDispatch();
  const addItemToBusket = () => {
    dispatch(
      addToBusket({
        id,
        title,
        price,
        image,
        short_description,
      })
    );
  };
  const removeItemFromBusket = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBusket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className=" bg-white border p-4 border-gray-200 
        ${isPressed && 'border-b-0'}"
      >
        <View className="flex flex-row justify-between items-center py-2">
          <View className="flex flex-row items-center">
            <View className="flex flex-col">
              <Text className="text-lg font-bold">{title}</Text>
              <Text className="text-gray-500">{short_description}</Text>
              <Text className="text-gray-500">
                <Currency quantity={price} currency="USD" />
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            <Image
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-100 p-4 rounded-full"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex flex-row justify-between items-center py-2">
          <View className="flex flex-row items-center">
            <TouchableOpacity
              onPress={removeItemFromBusket}
              className="bg-gray-100 p-2 rounded-full"
            >
              <MinusCircleIcon color="#00ccbb" size="22" />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity
              onPress={addItemToBusket}
              className="bg-gray-100 p-2 rounded-full"
            >
              <PlusCircleIcon color="#00ccbb" size="22" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
