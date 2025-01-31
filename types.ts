export interface GalleryItem {
  id: string
  imageUrl: string
  creator: string
  title: string
  date: string
  likes: number
}

export type ViewMode = "grid" | "table"
export type SortDirection = "asc" | "desc"
export type TabValue = "assets" | "collected" | "shop"

