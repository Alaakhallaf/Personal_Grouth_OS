export type NavIcon =
  | 'home'
  | 'target'
  | 'calendar'
  | 'repeat'
  | 'mind'
  | 'book'
  | 'chart'
  | 'journal';

export interface NavItem {
  label: string;
  path: string;
  icon: NavIcon;
  summary: string;
}
