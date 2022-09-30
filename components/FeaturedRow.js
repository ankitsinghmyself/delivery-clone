import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import ArrowRightIcon from 'react-native-heroicons/outline/ArrowRightIcon';
import RestaurantCards from './RestaurantCards';
import sanityClient from '../sanity';
const FeaturedRow = ({id,title,description}) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "featured" && _id == "${id}"]{
      ...,
      restaurants[]->{
        ...,
        dishes[]->,
        type->{
          name
        }
      }
    }[0]`).then((data) => setRestaurants(data?.restaurants));
    console.log(restaurants);
  }, [id])
  return (
    <View>
        <View className="mt-4 flex-row justify-between items-center px-4">
            <Text className="font-bold text-xl">{title}</Text>
            <ArrowRightIcon color="#00ccbb" />
        </View>
        <Text className="text-gray-500 text-sm px-4">{description}</Text>
        <ScrollView horizontal
        contentContainerStyle={{
            paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="mt-4"
        >
            {/* RestaurantCards... */}
            {restaurants?.map((item) => (
              <RestaurantCards
              key={item._id}
              id={item._id}
              imgUrl={item.image}
              title={item.name}
              rating={item.rating}
              genre={item.type?.name}
              short_description={item.short_description}
              address={item.address}
              categories={item.categories}
              reviews={item.reviews}
              dishes={item.dishes}
              long={item.long}
              lat={item.lat}
              />
            ))}
           
        </ScrollView>
    </View>
  )
}

export default FeaturedRow