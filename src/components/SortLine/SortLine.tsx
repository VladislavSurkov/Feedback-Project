import { OnChangeValue } from 'react-select';
import { FC, useState } from 'react';

import { ISortLine } from 'helpers/types/sortLine';
import { SortItem } from 'selectItems/selectItems';
import { IOption } from 'helpers/types/ItemsTypes';

import Modal from 'components/Backdrop/Backdrop';
import ModalAddFeedback from 'components/ModalAddFeedback/ModalAddFeedback';
import DropdownSelect from 'components/Select/Select';
import { Button } from 'components/Buttons/Button';

import { SortBox, SortSpan } from './SortLine.styled';
import {
  colorStyles,
  themeStyles,
  IndicatorSeparator,
  CustomOption,
} from './Dropdown.styled';

const SortLine: FC<ISortLine> = ({ products, setupdateProducts }) => {
  const [isModal, setIsModal] = useState(false);

  const modalOpen = () => setIsModal(true);

  const onChange = (newValue: OnChangeValue<IOption, boolean>) => {
    switch ((newValue as IOption).value) {
      case 'mostUpvotes':
        setupdateProducts([...products].sort((a, b) => b.upvotes - a.upvotes));
        break;
      case 'leastUpvotes':
        setupdateProducts([...products].sort((a, b) => a.upvotes - b.upvotes));
        break;
      // case 'mostComments':
      //   console.log(sort);
      //   sort.sort((a, b) => a - b);
      //   break;
      // case 'leastComments':
      //   sort.sort((a, b) => b.comments.length - a.comments.length);
      //   break;
      default:
        break;
    }
  };

  return (
    <SortBox>
      <SortSpan>
        Sort by :
        <DropdownSelect
          styles={{ ...colorStyles }}
          theme={themeStyles}
          components={{ Option: CustomOption, IndicatorSeparator }}
          onChange={onChange}
          isSearchable={false}
          options={SortItem}
          placeholder="Most Upvotes"
        />
      </SortSpan>

      <Button onClick={modalOpen} color="first" width="openModal">
        + Add Feedback
      </Button>
      {isModal && (
        <Modal onClose={() => setIsModal(false)}>
          <ModalAddFeedback onClose={() => setIsModal(false)} />
        </Modal>
      )}
    </SortBox>
  );
};
export default SortLine;
