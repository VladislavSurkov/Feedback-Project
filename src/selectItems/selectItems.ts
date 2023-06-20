import { IOption } from "helpers/models/CategoriesTypes";

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