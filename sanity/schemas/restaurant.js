export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant Name',
      type: 'string',
      Validition: (Rule) => Rule.required(),
    },
    {
      name: 'short_description',
      title: 'Short Description',
      type: 'text',
      Validition: (Rule) => Rule.max(200),
    },
    {
      name: 'image',
      title: 'Image of Restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of Restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Longitude of Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Address of Restaurant',
      type: 'string',
      Validition: (Rule) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating of Restaurant',
      type: 'number',
      Validition: (Rule) => Rule.required()
      .min(1)
      .max(5)
      .error('Rating must be between 1 and 5'),
    },
    {
      name: 'genre',
      title: 'Genre of Restaurant',
      type: 'string',
      Validition: (Rule) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type of Restaurant',
      type: 'reference',
      Validition: (Rule) => Rule.required(),
      to: [{ type: 'category' }],
    },
    {
      name: 'dishes',
      title: 'Dishes of Restaurant',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }],
    },

  ],
}
