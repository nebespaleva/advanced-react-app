import { type SidebarItemType } from './types'
import { RoutePaths } from 'shared/config/router/appRouterConfig'
import Main from 'shared/assets/icons/home.svg'
import About from 'shared/assets/icons/about.svg'
import Profile from 'shared/assets/icons/profile.svg'

export const sidebarItems: SidebarItemType[] = [
  {
    route: RoutePaths.main,
    Icon: Main,
    text: 'Главная'
  },
  {
    route: RoutePaths.profile,
    Icon: Profile,
    text: 'Профайл'
  },
  {
    route: RoutePaths.about,
    Icon: About,
    text: 'О нас'
  }
]
