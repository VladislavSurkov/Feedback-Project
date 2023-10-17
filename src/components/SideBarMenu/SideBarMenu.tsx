import { FC } from 'react';
import { Sidebar, SidebarText, SideBarWrap } from './SideBarMenu.styled';
import { SidebarData } from 'helpers/items/selectItems';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setCategoriesFilter } from 'redux/filters/filters-slice';
import { setSidebar } from 'redux/modal/modal-slice';

const SideBarMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { categories } = useTypedSelector(state => state.filters);

  const showCategoriesFilter = (value: string) => {
    dispatch(setCategoriesFilter(value));
    dispatch(setSidebar(false));
  };

  return (
    <>
      <SideBarWrap>
        {SidebarData.map((item, index) => {
          const isSelected = categories === item.value;
          return (
            <Sidebar
              key={index}
              onClick={() => showCategoriesFilter(item.value)}
              className={isSelected ? 'selected' : ''}
            >
              <SidebarText>{item.value}</SidebarText>
            </Sidebar>
          );
        })}
      </SideBarWrap>
    </>
  );
};

export default SideBarMenu;
