import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DeliveryScreen');
    }, 5000);
  }, []);
  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center item-center">
      <Animatable.Image
        animation="lightSpeedIn"
        iterationCount={1}
        direction="alternate"
        source={require('../assets/images/placeingOrder.png')}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        direction="alternate"
        className="text-white text-lg  text-center"
      >
        Waiting for the restaurant to accept your order
      </Animatable.Text>
      <Progress.Circle
        size={60}
        color="#fff"
        indeterminate={true}
        className="items-center justify-center mt-5  "
      />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
