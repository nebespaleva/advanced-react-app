import type React from 'react'

export interface SidebarItemType {
  route: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  text: string
}
