import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
  projectId: 'yrovk8ml',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2022-09-27',
})

const builder = imageUrlBuilder(client)
export function urlFor(source) {
  return builder.image(source)
}
export default client