import React, {Fragment} from 'react';
import Menu from './menu';
import SubMenu from './subMenu';

const GenerateMenu = ({menuDetail, subMenuClickHandler}) => {

  const generateMenuRecursive = (_menu) => {
    console.log('checking i am into generateMenuRecursive: ', _menu);
    return _menu.subMenu ? 
      <SubMenu title={_menu.title} subMenuClickHandler={subMenuClickHandler} id={_menu.id} isActive={_menu.isActive}>
        {_menu.subMenu.map(_menuDetail => generateMenuRecursive(_menuDetail))}
      </SubMenu> :
      <Menu title={_menu.title} isActive={_menu.isActive} path={_menu.path} />;
  };
  return (
    <Fragment>
      {generateMenuRecursive(menuDetail)}
    </Fragment>
  );
};

export default GenerateMenu;
