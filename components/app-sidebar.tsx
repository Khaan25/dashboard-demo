import { BarChart3, Bell, BookOpen, Calendar, ChevronRight, Compass, DollarSign, FileCheck, Grid2x2, HelpCircle, Rss, Settings, Shield, User, Users } from 'lucide-react'
import * as React from 'react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarRail } from '@/components/ui/sidebar'
import Link from 'next/link'

const menuItems = [
  {
    icon: User,
    title: 'Bio',
    url: '#',
  },
  {
    icon: Users,
    title: 'Curators',
    url: '#',
  },
  {
    icon: FileCheck,
    title: 'Certificates',
    url: '#',
  },
  {
    divider: true,
  },
  {
    icon: DollarSign,
    title: 'Sales',
    url: '#',
    items: [
      {
        title: 'Sales Reports',
        url: '#',
      },
      {
        title: 'Revenue Analytics',
        url: '#',
      },
      {
        title: 'Transaction History',
        url: '#',
      },
      {
        title: 'Customer Insights',
        url: '#',
      },
    ],
  },
  {
    icon: Calendar,
    title: 'Events',
    url: '#',
  },
  {
    icon: Shield,
    title: 'IP Monitor',
    url: '#',
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    url: '#',
  },
  {
    divider: true,
  },
  {
    icon: Compass,
    title: 'Explore',
    url: '#',
  },
  {
    icon: Rss,
    title: 'Feed',
    url: '#',
  },
  {
    divider: true,
  },
  {
    icon: BookOpen,
    title: 'Blog',
    url: '#',
  },
  {
    icon: Settings,
    title: 'Settings',
    url: '#',
  },
  {
    icon: Bell,
    title: 'Notifications',
    url: '#',
  },
  {
    icon: HelpCircle,
    title: 'Help & Support',
    url: '#',
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Grid2x2 className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Creator</span>
                  <span className="">Dashboard</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menuItems.map((item, index) => (
              <Collapsible key={index} defaultOpen={index === 1} className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    {item.divider ? (
                      <div className="px-2 my-4">
                        <hr className="h-px w-full text-muted-foreground" />
                      </div>
                    ) : (
                      <SidebarMenuButton>
                        {item.icon && <item.icon className="size-4" />} {item.title}
                        {item.items?.length && <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />}
                      </SidebarMenuButton>
                    )}
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((item, index) => (
                          <SidebarMenuSubItem key={index}>
                            <SidebarMenuSubButton asChild>
                              <Link href={item.url}>{item.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
