import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ title, path, isActive}) => {
  console.log('checking path: ', path);
  return (
    <li
      className={`menu-item ${ isActive
        ? 'menu-item-active'
        : ''}`}
    >
      <Link to={path} className="menu-link">
        <i className="menu-bullet menu-bullet-line">
          <span />
        </i>
        <span className="menu-text">{title}</span>
      </Link>
    </li>
  );
};

export default Menu;
