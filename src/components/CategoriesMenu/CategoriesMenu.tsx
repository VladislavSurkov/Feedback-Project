import { FC } from 'react';
import { CategoriesBtn, CategoriesWrap } from './CategoriesMenu.styled';
import { SidebarData } from 'helpers/items/selectItems';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setCategoriesFilter } from 'redux/filters/filters-slice';
import { setSidebar } from 'redux/modal/modal-slice';


const CategoriesMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useTypedSelector(state => state.filters);

  const showCategoriesFilter = (value: string) => {
    dispatch(setCategoriesFilter(value));
    dispatch(setSidebar(false));
  };

  return (
    <>
      <CategoriesWrap>
        {SidebarData.map((item, index) => {
          const isSelected = categories === item.value;
          return (
            <CategoriesBtn
              key={index}
              onClick={() => showCategoriesFilter(item.value)}
              className={isSelected ? 'selected' : ''}
            >
              {item.value}
            </CategoriesBtn>
          );
        })}
      </CategoriesWrap>
    </>
  );
};

export default CategoriesMenu;
