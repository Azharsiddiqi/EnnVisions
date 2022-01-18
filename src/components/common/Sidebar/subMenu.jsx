import React from 'react';
const hiddenStyle = {
  display: 'none',
  overflow: 'hidden',
};

const SubMenu = ({id, title, isActive, subMenuClickHandler, children}) => {
  return (
    <li
      className={`menu-item  menu-item-submenu ${isActive  ? 'menu-item-open' : ''}`}
    >
      <div
        onClick={() =>
          subMenuClickHandler(id)
        }
        className="menu-link"
      >
        <span className="menu-text">{title}</span>
        <i className="menu-arrow" />
      </div>
      <div
        className="menu-submenu"
        style={isActive ? {} : hiddenStyle}
      >
        <i className="menu-arrow" />
        <ul className="menu-subnav">
          {children}
        </ul>
      </div>
    </li>
  );
};

export default SubMenu;
