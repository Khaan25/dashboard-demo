'use client'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { generateGalleryItems } from '@/lib/generate-data'
import { cn } from '@/lib/utils'
import { GalleryItem, SortDirection, TabValue, ViewMode } from '@/types'
import { ArrowUpDown, Grid, Heart, List, ThumbsUp } from 'lucide-react'
import Image from 'next/image'
import { useMemo, useState } from 'react'
import { GalleryTable } from './gallery-table'

const items = generateGalleryItems(12)

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <div className="group bg-card rounded-md overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image src={item.imageUrl || '/placeholder.svg'} alt={item.title} fill className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white flex items-center gap-1">
            <ThumbsUp className="h-4 w-4" />
            <span className="text-sm font-medium">{item.likes}</span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h3 className="text-sm font-medium truncate">{item.title}</h3>
        <p className="text-xs text-muted-foreground truncate">{item.creator}</p>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortDirection, setSortDirection] = useState<SortDirection>('desc')
  const [activeTab, setActiveTab] = useState<TabValue>('assets')
  const [filter, setFilter] = useState('all')

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      return sortDirection === 'asc' ? new Date(a.date).getTime() - new Date(b.date).getTime() : new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [sortDirection])

  return (
    <div className="container mx-auto p-2">
      <Tabs defaultValue="assets" className="w-full" value={activeTab} onValueChange={value => setActiveTab(value as TabValue)}>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <TabsList className="h-8">
            <TabsTrigger value="assets" className="text-xs px-3">
              Assets
            </TabsTrigger>
            <TabsTrigger value="collected" className="text-xs px-3">
              Collected
            </TabsTrigger>
            <TabsTrigger value="shop" className="text-xs px-3">
              Shop
              <Heart className="ml-1 size-3" />
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-1">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="h-8 w-[70px] text-xs">
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="images">Images</SelectItem>
                <SelectItem value="videos">Videos</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="icon" className="size-8" onClick={() => setSortDirection(d => (d === 'asc' ? 'desc' : 'asc'))}>
              <ArrowUpDown className="size-3" />
            </Button>

            <Button variant="outline" size="icon" className={cn('size-8', viewMode === 'grid' && 'bg-muted')} onClick={() => setViewMode('grid')}>
              <Grid className="size-3" />
            </Button>
            <Button variant="outline" size="icon" className={cn('size-8', viewMode === 'table' && 'bg-muted')} onClick={() => setViewMode('table')}>
              <List className="size-3" />
            </Button>
          </div>
        </div>

        <TabsContent value="assets" className="mt-0">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {sortedItems.map(item => (
                <GalleryCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <GalleryTable items={sortedItems} />
          )}
        </TabsContent>

        <TabsContent value="collected">
          <div className="text-center py-6 text-sm text-muted-foreground">No collected items yet</div>
        </TabsContent>

        <TabsContent value="shop">
          <div className="text-center py-6 text-sm text-muted-foreground">Shop coming soon</div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
