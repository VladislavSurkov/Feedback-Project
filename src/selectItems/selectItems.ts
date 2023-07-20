import { IOption } from "helpers/types/CategoriesTypes";
import { SidebarItems } from 'helpers/types/SidebarTypes';

export const categoriesItem: IOption[] = [
  {
    value: 'ui',
    label: 'UI',
  },
  {
    value: 'ux',
    label: 'UX',
  },
  {
    value: 'enhancement',
    label: 'Enhancement',
  },
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
];



export const SidebarData: SidebarItems[] = [
  {
    title: 'All',
    path: '/all',
  },
  {
    title: 'UI',
    path: '/ui',
  },
  {
    title: 'UX',
    path: '/ux',
  },
  {
    title: 'Enhancement',
    path: '/enhancement',
  },
  {
    title: 'Bug',
    path: '/bug',
  },
  {
    title: 'Feature',
    path: '/feature',
  },
];


export const SortItem: IOption[] = [
  {
    value: 'mostUpvotes',
    label: 'Most Upvotes',
  },
  {
    value: 'leastUpvotes',
    label: 'Least Upvotes',
  },
  {
    value: 'mostComments',
    label: 'Most Comments',
  },
  {
    value: 'leastComments',
    label: 'Least Comments',
  }
];