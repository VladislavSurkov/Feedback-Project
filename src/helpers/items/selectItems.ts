import { IOption } from "helpers/types/ItemsTypes";

export const CategoriesItem: IOption[] = [
  { value: 'UI' },
  { value: 'UX' },
  { value: 'Enhancement' },
  { value: 'Bug' },
  { value: 'Feature' }
];

export const SidebarData: IOption[] = [
  { value: 'All' },
  ...CategoriesItem

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