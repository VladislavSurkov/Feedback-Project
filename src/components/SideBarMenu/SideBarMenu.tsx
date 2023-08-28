import { FC } from 'react';
import { Sidebar, SidebarText, SideBarWrap } from './SideBarMenu.styled';
import { SidebarData } from 'selectItems/selectItems';
import { useAppDispatch, useTypedSelector } from 'hooks/useHooks';
import { setStatusFilter } from 'redux/filters/filters-slice';
import { setOverflow } from 'redux/modal/modal-slice';

const SideBarMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useTypedSelector(state => state.filters);

  const showStatusFilter = (value: string) => {
    dispatch(setStatusFilter(value));
    dispatch(setOverflow(false));
  };

  return (
    <>
      <SideBarWrap>
        {SidebarData.map((item, index) => {
          const isSelected = status === item.value;
          return (
            <Sidebar
              key={index}
              onClick={() => showStatusFilter(item.value)}
              className={isSelected ? 'selected' : ''}
            >
              <SidebarText>{item.label}</SidebarText>
            </Sidebar>
          );
        })}
      </SideBarWrap>
    </>
  );
};

export default SideBarMenu;
