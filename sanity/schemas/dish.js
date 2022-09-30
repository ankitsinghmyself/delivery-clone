export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Dish Name',
      type: 'string',
      Validition: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image of Dish',
      type: 'image',
    },
    {
      name: 'price',
      title: 'Price of Dish',
      type: 'number',
      Validition: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Description of Dish',
      type: 'text',
      Validition: (Rule) => Rule.max(200),
    },
  ],
}
