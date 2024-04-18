import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Weekly Contributions',
    url: '/Weekly',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Forms',
    url: '/forms',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Family Register',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Reports',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  }
];
