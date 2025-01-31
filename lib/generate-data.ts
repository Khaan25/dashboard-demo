import { GalleryItem } from '@/types'
import { faker } from '@faker-js/faker'

export function generateGalleryItems(count = 12): GalleryItem[] {
  return Array.from({ length: count }, (_, i) => ({
    id: faker.string.uuid(),
    imageUrl: `https://picsum.photos/800?random=${i}`,
    // imageUrl: `https://picsum.photos/800`,
    creator: faker.person.fullName(),
    title: faker.commerce.productName(),
    date: faker.date.recent({ days: 30 }).toISOString(),
    likes: faker.number.int({ min: 0, max: 1000 }),
  }))
}
