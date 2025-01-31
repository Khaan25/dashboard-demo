import { GalleryItem } from '@/types'
import { faker } from '@faker-js/faker'

export function generateGalleryItems(count = 12): GalleryItem[] {
  const aspectRatios = [
    { width: 800, height: 800 }, // 1:1
    { width: 1280, height: 720 }, // 16:9
    { width: 720, height: 1280 }, // 9:16
    { width: 1024, height: 768 }, // 4:3
    { width: 768, height: 1024 }, // 3:4
  ]

  return Array.from({ length: count }, (_, i) => {
    const ratio = aspectRatios[Math.floor(Math.random() * aspectRatios.length)]

    return {
      id: faker.string.uuid(),
      imageUrl: `https://picsum.photos/${ratio.width}/${ratio.height}?random=${i}`,
      creator: faker.person.fullName(),
      title: faker.commerce.productName(),
      date: faker.date.recent({ days: 30 }).toISOString(),
      likes: faker.number.int({ min: 0, max: 1000 }),
    }
  })
}
