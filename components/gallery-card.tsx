import { GalleryItem } from '@/types'
import Image from 'next/image'

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="bg-card overflow-hidden max-w-[280px]">
      <div className="px-5 py-4 bg-[#f3f4f6] rounded-md">
        <div className="aspect-[0.85/1] flex items-center justify-center">
          <div className="relative aspect-square min-h-36 w-full overflow-hidden">
            <Image src={item.imageUrl || '/placeholder.svg'} width={400} height={500} alt={item.title} className="object-contain h-full" />
            {/* <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white flex items-center gap-1">
                <ThumbsUp className="size-4" />
                <span className="text-sm font-medium">{item.likes}</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="py-2">
        <h3 className="font-medium truncate">{item.title}</h3>
        <p className="text-sm text-muted-foreground truncate">{item.creator}</p>
      </div>
    </div>
  )
}
