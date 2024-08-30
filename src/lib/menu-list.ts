import { BadgeDollarSign } from 'lucide-react'
import { ElementType } from 'react'

import AnalyticsIcon from '@/components/icons/analytics-icon'
import MerketingIcon from '@/components/icons/marketing-icon'
import NotificationsSquareIcon from '@/components/icons/notifications-square-icon'
import PuzzleIcon from '@/components/icons/puzzle-icon'
import SettingIcon from '@/components/icons/settings-icon'
import ShoppingBagIcon from '@/components/icons/shopping-bag-icon'
import ShoppingCartIcon from '@/components/icons/shopping-cart-icon'
import SupportIcon from '@/components/icons/support-icon'
import TagIcon from '@/components/icons/tag-icon'

type Submenu = {
  href: string
  label: string
  active: boolean
}

type Menu = {
  href: string
  label: string
  active: boolean
  icon: ElementType
  submenus: Submenu[]
}

type Group = {
  groupLabel: string
  menus: Menu[]
}

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: '',
      menus: [
        {
          href: '/dashboard',
          label: 'dashboard',
          active: pathname.includes('/dashboard'),
          icon: AnalyticsIcon,
          submenus: [],
        },
        {
          href: '/orders',
          label: 'orders',
          active: pathname.includes('/orders'),
          icon: ShoppingBagIcon,
          submenus: [],
        },
        {
          href: '/finance',
          label: 'finance',
          active: pathname.includes('/finance'),
          icon: BadgeDollarSign,
          submenus: [],
        },
        {
          href: '/products',
          label: 'products',
          active: pathname.includes('/products'),
          icon: TagIcon,
          submenus: [],
        },
        {
          href: '/checkout',
          label: 'checkout',
          active: pathname.includes('/checkout'),
          icon: ShoppingCartIcon,
          submenus: [],
        },
        {
          href: '/marketing',
          label: 'marketing',
          active: pathname.includes('/marketing'),
          icon: MerketingIcon,
          submenus: [
            {
              href: '/marketing/cupons',
              label: 'Cupons',
              active: pathname.includes('/marketing/cupons')
            },  
            {
              href: '/marketing/pixels',
              label: 'Pixels',
              active: pathname.includes('/marketing/pixels')
            },  
            {
              href: '/marketing/upsell',
              label: 'Upsell',
              active: pathname.includes('/marketing/upsell')
            },  
            {
              href: '/marketing/orderBump',
              label: 'Order Bump',
              active: pathname.includes('/marketing/orderBump')
            },  
            {
              href: '/marketing/linkPagamento',
              label: 'Link de Pagamento',
              active: pathname.includes('/marketing/linkPagamento')
            }  
          ],
        },
        {
          href: '/integrations',
          label: 'integrations',
          active: pathname.includes('/integrations'),
          icon: PuzzleIcon,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: 'adjustment',
      menus: [
        {
          href: '/settings',
          label: 'settings',
          active: pathname.includes('/settings'),
          icon: SettingIcon,
          submenus: [],
        },
      ],
    },
  ]
}
