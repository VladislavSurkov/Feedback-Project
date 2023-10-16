import { FC } from 'react';
import { OnChangeValue } from 'react-select';

import { SortItem } from 'helpers/items/selectItems';
import { IOption } from 'helpers/types/ItemsTypes';
import { useAppDispatch } from 'hooks/useHooks';
import { setSortFilter } from 'redux/filters/filters-slice';
import { setModal } from 'redux/modal/modal-slice';
import DropdownSelect from 'components/Select/Select';
import { Button } from 'components/Buttons/Button';
import { SortBox, SortSpan } from './SortLine.styled';
import {
  colorStyles,
  themeStyles,
  IndicatorSeparator,
  CustomOption,
} from './Dropdown.styled';

const SortLine: FC = () => {
  const dispatch = useAppDispatch();

  const modalOpen = () => dispatch(setModal(true));

  const sortProducts = (newValue: OnChangeValue<IOption, boolean>) =>
    dispatch(setSortFilter((newValue as IOption).value));

  return (
    <SortBox>
      <SortSpan>
        Sort by :
        <DropdownSelect
          styles={{ ...colorStyles }}
          theme={themeStyles}
          components={{ Option: CustomOption, IndicatorSeparator }}
          onChange={sortProducts}
          isSearchable={false}
          options={SortItem}
          placeholder="Most Upvotes"
        />
      </SortSpan>

      <Button onClick={modalOpen} color="first" width="openModal">
        + Add Feedback
      </Button>
    </SortBox>
  );
};
export default SortLine;
