import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'

const CategoryCard = ({ imgUrl, title }) => {
    return (
        <TouchableOpacity className="relative mr-2 ">
            <Image source={{ uri: urlFor(imgUrl).width(200).url() }}
                className="h-20 w-20 rounded" 
            />
            <Text className="bottom-1 text-yellow-50 left-1 text-sm font-bold absolute">{title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard