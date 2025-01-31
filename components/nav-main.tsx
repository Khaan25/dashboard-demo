'use client'

import { BarChart3, Bell, BookOpen, Calendar, ChevronRight, Compass, DollarSign, FileCheck, HelpCircle, Rss, Settings, Shield, User, Users } from 'lucide-react'

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from '@/components/ui/sidebar'

const items = [
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

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => (
          <Collapsible key={item.title} asChild className="group/collapsible">
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                {item.divider ? (
                  <div className="px-2 my-4">
                    <hr className="h-px w-full text-muted-foreground" />
                  </div>
                ) : (
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {item.items && item.items.length > 0 && <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />}
                  </SidebarMenuButton>
                )}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map(subItem => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <a href={subItem.url}>
                          <span>{subItem.title}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
