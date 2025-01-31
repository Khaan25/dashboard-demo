import { GalleryItem } from '@/types'
import { ThumbsUp } from 'lucide-react'
import Image from 'next/image'

export function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group bg-card">
      <div className="relative aspect-square rounded-md overflow-hidden">
        <Image src={item.imageUrl || '/placeholder.svg'} alt={item.title} fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white flex items-center gap-1">
            <ThumbsUp className="size-4" />
            <span className="text-sm font-medium">{item.likes}</span>
          </div>
        </div>
      </div>

      <div className="py-2">
        <h3 className="text-sm font-medium truncate">{item.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{item.creator}</p>
      </div>
    </div>
  )
}
