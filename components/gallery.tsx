'use client'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { generateGalleryItems } from '@/lib/generate-data'
import { cn } from '@/lib/utils'
import { SortDirection, TabValue, ViewMode } from '@/types'
import { ArrowUpDown, Grid, Heart, List } from 'lucide-react'
import { useMemo, useState } from 'react'
import { GalleryCard } from './gallery-card'
import { GalleryTable } from './gallery-table'

const items = generateGalleryItems(32)

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
    <div className="container md:max-w-6xl w-full mx-auto p-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 mx-auto max-md:w-[236px] max-xl:w-[512px] xl:grid-cols-4 gap-4">
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
