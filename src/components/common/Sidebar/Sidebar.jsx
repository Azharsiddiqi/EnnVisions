import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PRIVATE_ROUTES, SideBarMenuList  } from '../../../config';
import jp from 'jsonpath';
import Menu from './menu';
import SubMenu from './subMenu';


const SideBar = () => {
  const { pathname } = useLocation();
  const {
    dashboard,
  } = PRIVATE_ROUTES;
  // eslint-disable-next-line no-unused-vars
  const [sideBarMenu, setSideBarMenu] = useState(_.cloneDeep(SideBarMenuList));

  const setActivePathRecursively = (_object, _path) => {
    if (_object.subMenu) {
      for (let idx = 0; idx < _object.subMenu.length; idx++) {
        const _subMenu = _object.subMenu[idx];
        const isFoundPath = setActivePathRecursively(_subMenu, _path);
        if (isFoundPath) {
          _object.isActive = true;
          return isFoundPath;
        }
      }
      return false;
    } else {
      if (_object.path !== _path) return false;
      _object.isActive = true;
      return true;
    }
  };

  const subMenuClickHandler = (_id) => {
    const clonedSideBarMenu = _.cloneDeep(sideBarMenu);
    const path = '$.'+_id+'.isActive';
    const oldValue = jp.query(clonedSideBarMenu, path);
    if( oldValue?.length ){
      jp.value(clonedSideBarMenu, path, !oldValue[0]);
    }
    setSideBarMenu(clonedSideBarMenu);
  };

  const generateMenuRecursive = (_menu, _index) => {
    return _menu.subMenu ? 
      <SubMenu key={_index} title={_menu.title} subMenuClickHandler={subMenuClickHandler} id={_menu.id} isActive={_menu.isActive}>
        {_menu.subMenu.map((_menuDetail, idx) => generateMenuRecursive(_menuDetail, idx))}
      </SubMenu> :
      <Menu key={_index} title={_menu.title} isActive={_menu.isActive} path={_menu.path} />;
  };

  useEffect(() => {
    const clonedSideBarMenu = _.cloneDeep(SideBarMenuList);
    for (let index = 0; index < clonedSideBarMenu.length; index++) {
      const isFound = setActivePathRecursively(clonedSideBarMenu[index], pathname);
      if (isFound) {
        break;
      }
    }
    setSideBarMenu(clonedSideBarMenu);
  }, [pathname]);

  return (
    <div
      className="aside aside-left  aside-fixed  d-flex flex-column flex-row-auto"
      id="kt_aside"
    >
      {/*begin::Brand*/}
      <div className="brand flex-column-auto " id="kt_brand">
        {/*begin::Logo*/}
        <Link to="index.html" className="brand-logo">
          <img alt="Logo" src="/assets/images/ic-logo.svg" />
        </Link>
        {/*end::Logo*/}
        {/*begin::Toggle*/}
        <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
          <span className="svg-icon svg-icon svg-icon-xl">
            {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg*/}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" />
                <path
                  d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z"
                  fill="#000000"
                  fillRule="nonzero"
                  transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) "
                />
                <path
                  d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z"
                  fill="#000000"
                  fillRule="nonzero"
                  opacity="0.3"
                  transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) "
                />
              </g>
            </svg>
            {/*end::Svg Icon*/}
          </span>
        </button>
        {/*end::Toolbar*/}
      </div>
      {/*end::Brand*/}
      {/*begin::Aside Menu*/}
      <div
        className="aside-menu-wrapper flex-column-fluid"
        id="kt_aside_menu_wrapper"
      >
        {/*begin::Menu Container*/}
        <div
          id="kt_aside_menu"
          className="aside-menu my-4 "
          data-menu-vertical={1}
          data-menu-scroll={1}
          data-menu-dropdown-timeout={500}
        >
          {/*begin::Menu Nav*/}
          <ul className="menu-nav ">  
            <li
              className={`menu-item ${pathname === dashboard.path ? 'menu-item-active' : ''}`}
              aria-haspopup="true"
            >
              <Link to={dashboard.path} className="menu-link ">
                <span className="menu-text">Dashboard</span>
              </Link>
            </li>
            {/* starting custom Menu */}
            {sideBarMenu.map((menuDetail, index) => 
              generateMenuRecursive(menuDetail, index)
            ) }
          </ul>
          {/*end::Menu Nav*/}
        </div>
        {/*end::Menu Container*/}
      </div>
      {/*end::Aside Menu*/}
    </div>
  );
};

export default SideBar;
