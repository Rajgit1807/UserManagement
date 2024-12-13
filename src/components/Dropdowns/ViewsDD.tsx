import * as React from 'react';
import { Dropdown } from '@mui/base/Dropdown';
import { Menu, MenuListboxSlotProps } from '@mui/base/Menu';
import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
import { styled } from '@mui/system';
import { CssTransition } from '@mui/base/Transitions';
import { PopupContext } from '@mui/base/Unstable_Popup';
import { menuData } from '../Data/menuData';
import { Link } from 'react-router-dom';

type ViewsProps = {
    selectedIndex: number;       
    setSelIndex: React.Dispatch<React.SetStateAction<number>>; 
  };
  
export default function ViewsDD ({selectedIndex,setSelIndex} :ViewsProps) {
  const createHandleMenuClick = (menuItem: string) => {
    return () => {
      console.log(`Clicked on ${menuItem}`);
    };
  };

  return (
    <Dropdown>
      <MenuButton>Views</MenuButton>
      <Menu slots={{ listbox: AnimatedListbox }}>
      {menuData.map((item, index) => (
        <MenuItem onClick={createHandleMenuClick(item.name)}>
            <Link key={index} to={item.to} replace={true}>
                    <div
                      className={`cursor-pointer flex items-center gap-3 w-full rounded-2xl ps-2 ${
                        selectedIndex === index ? "bg-black" : "bg-none"
                      }`}
                      onClick={() => setSelIndex(index)}
                    >
                      <div className="flex justify-center items-center w-[35px] rounded-2xl">
                        <item.icon
                          fill={
                            selectedIndex === index ? "#FFFFFF" : "#8ab3c0"
                          }
                        />
                      </div>
                      <p
                        className={`text-[16px] pb-[1.5px] ${
                          selectedIndex === index
                            ? "font-medium text-white"
                            : "text-[#8ab3c0]"
                        }`}
                      >
                        {item.name}
                      </p>
                    </div>
                  </Link>
        </MenuItem>
                  
                ))}
       
      </Menu>
    </Dropdown>
  );
}

  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    padding: 6px;
    margin: 12px 0;
    min-width: 200px;
    border-radius: 12px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: none;
  
    .closed & {
      opacity: 0;
      transform: scale(0.95, 0.8);
      transition: opacity 200ms ease-in, transform 200ms ease-in;
    }
  
    .open & {
      opacity: 1;
      transform: scale(1, 1);
      transition: opacity 100ms ease-out, transform 100ms cubic-bezier(0.43, 0.29, 0.37, 1.48);
    }
  
    .placement-top & {
      transform-origin: bottom;
    }
  
    .placement-bottom & {
      transform-origin: top;
    }
  `,
  );
  
  const AnimatedListbox = React.forwardRef(function AnimatedListbox(
    props: MenuListboxSlotProps,
    ref: React.ForwardedRef<HTMLUListElement>,
  ) {
    const { ownerState, ...other } = props;
    const popupContext = React.useContext(PopupContext);
  
    if (popupContext == null) {
      throw new Error(
        'The `AnimatedListbox` component cannot be rendered outside a `Popup` component',
      );
    }
  
    const verticalPlacement = popupContext.placement.split('-')[0];
  
    return (
      <CssTransition
        className={`placement-${verticalPlacement}`}
        enterClassName="open"
        exitClassName="closed"
      >
        <Listbox {...other} ref={ref} />
      </CssTransition>
    );
  });
  
  const MenuItem = styled(BaseMenuItem)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    user-select: none;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[100] : grey[200]};
    }
  
    &:focus {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    }
  
    &.${menuItemClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  `,
  );
  
  const MenuButton = styled(BaseMenuButton)(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.5;
    padding: 8px 16px;
    border-radius: 8px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    cursor: pointer;
  
    &:hover {
      background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
      border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
    }
  
    &:active {
      background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
    }
  
    &:focus-visible {
      outline: none;
    }
  `,
  );
  