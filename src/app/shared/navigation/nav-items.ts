import { NavItem } from '../../core/models/nav-item.model';

export const NAV_ITEMS: readonly NavItem[] = [
  {
    label: 'Dashboard',
    path: '/',
    icon: 'home',
    summary: 'Current focus, intention, and today’s snapshot.',
  },
  {
    label: 'Goals',
    path: '/goals',
    icon: 'target',
    summary: 'Life domains, intentions, and milestones.',
  },
  {
    label: 'Planner',
    path: '/planner',
    icon: 'calendar',
    summary: 'Daily intention, priorities, and carry-over.',
  },
  {
    label: 'Habits',
    path: '/habits',
    icon: 'repeat',
    summary: 'Small repeatable actions tied to current goals.',
  },
  {
    label: 'Mindset',
    path: '/mindset',
    icon: 'mind',
    summary: 'Seven shifts and guided APR reflections.',
  },
  {
    label: 'Learning',
    path: '/learning',
    icon: 'book',
    summary: 'Learning intentions, notes, and evidence.',
  },
  {
    label: 'Progress',
    path: '/progress',
    icon: 'chart',
    summary: 'Weekly review and milestone evidence.',
  },
  {
    label: 'Reflection',
    path: '/reflection',
    icon: 'journal',
    summary: 'What moved forward and what to adjust.',
  },
];
