import { FC, useState } from 'react';
import { Sidebar, SidebarText, SideBarWrap } from './SideBarMenu.styled';
import { SidebarData } from 'selectItems/selectItems';


const SideBarMenu: FC = () => {
  const [selectedItem, setSelectedItem] = useState<number >(0);

  const handleItemClick = (index: number, value: string) => {
    setSelectedItem(index);

    console.log(index, value);
  };

  return (
    <>
      <SideBarWrap>
        {SidebarData.map((item, index) => {
          const isSelected = selectedItem === index;
          return (
            <Sidebar
              key={index}
              onClick={() => handleItemClick(index, item.value)}
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
