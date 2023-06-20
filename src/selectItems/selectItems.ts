import { IOption } from "helpers/models/CategoriesTypes";

export const categoriesItem: IOption[] = [
  {
    value: 'all',
    label: 'All',
  },
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