import { View, Text, ScrollView } from 'react-native'
import React,{useState, useEffect } from 'react'
import CategoryCard from './CategoryCard'
import sanityClient from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    sanityClient.fetch(`*[_type == "category"]{
      _id,
      name,
      image,
      short_description,
    }`).then((data) => setCategories(data));
    console.log(categories);
  }, []);
  return (
    <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* categories card */}
        {categories?.map((item) => (
          <CategoryCard
          key={item._id}
          id={item._id}
          imgUrl={item.image}
          title={item.name}
          short_description={item.short_description}
          />
        ))}
    </ScrollView>
  )
}

export default Categories