import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { selectBusketItems, selectBusketTotal } from '../features/busketSlice';
import Currency from 'react-currency-formatter';

const BusketIcon = () => {
  const items = useSelector(selectBusketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBusketTotal);
  if (items.length === 0) {
    return null;
  }
  return (
    <View className="absolute bottom-10 w-full z-50 ">
      <TouchableOpacity
        className="mx-2 flex-row bg-[#00ccbb] p-3 shadow-lg rounded-lg
        justify-between items-center"
        onPress={() => navigation.navigate('Busket')}
      >
        <Text className="text-white bg-[#01a296] px-2 py-1 font-bold text-lg">
          {items.length}
        </Text>
        <Text className="text-white font-bold text-lg"> View Busket</Text>

        <Text className="text-white font-bold text-lg">
          <Currency quantity={total} currency="USD" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BusketIcon;
