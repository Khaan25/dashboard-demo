import { GalleryItem } from '@/types'
import { Table } from 'lucide-react'
import Image from 'next/image'
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table'

export function GalleryTable({ items }: { items: GalleryItem[] }) {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Image</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Creator</TableHead>
            <TableHead className="hidden sm:table-cell">Date</TableHead>
            <TableHead className="text-right">Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="relative w-10 aspect-square">
                  <Image src={item.imageUrl || '/placeholder.svg'} alt={item.title} fill className="object-cover rounded" />
                </div>
              </TableCell>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell className="hidden md:table-cell">{item.creator}</TableCell>
              <TableCell className="hidden sm:table-cell">{new Date(item.date).toLocaleDateString()}</TableCell>
              <TableCell className="text-right">{item.likes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
