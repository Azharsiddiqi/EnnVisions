import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';

export default () => {
    const { pathname } = useLocation();
    const { userRoles, dashboard, adminManage, fleetManage, dispatcherManage }  = PRIVATE_ROUTES;
    const [mainActive, setMainActive] = useState("");
    const [subActive, setSubActive] = useState("");
    const hiddenStyle = {
        display: "none",
        overflow: "hidden"
    }

    useEffect(() => {
        if( pathname === userRoles.addNewRole.path ||
            pathname === userRoles.userRoleList.path ||
            pathname === userRoles.createRegistrationForm.path
        ){
            setMainActive("userRoles");
        }
        else if( pathname === adminManage.createAdmin.path ||
                pathname === adminManage.editAdmin.path ||
                pathname === adminManage.adminDetail.path
        ){
            setMainActive("adminManage");
        }
        else if( pathname === fleetManage.createFleet.path ||
            pathname === fleetManage.editFleet.path ||
            pathname === fleetManage.fleetDetail.path
        ){
            setMainActive("fleetManage");
        }
        else if( pathname === dispatcherManage.createDispatcher.path ||
            pathname === dispatcherManage.editDispatcher.path ||
            pathname === dispatcherManage.dispatcherDetail.path
        ){
            setMainActive("dispatcherManage");
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div className="aside aside-left  aside-fixed  d-flex flex-column flex-row-auto" id="kt_aside">
            {/*begin::Brand*/}
            <div className="brand flex-column-auto " id="kt_brand">
            {/*begin::Logo*/}
            <Link to="index.html" className="brand-logo">
                <img alt="Logo" src="assets/images/ic-logo.svg" />
            </Link>
            {/*end::Logo*/}
            {/*begin::Toggle*/}
            <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
                <span className="svg-icon svg-icon svg-icon-xl">
                {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg*/}
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                    <polygon points="0 0 24 0 24 24 0 24" />
                    <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999) " />
                    <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999) " />
                    </g>
                </svg>
                {/*end::Svg Icon*/}
                </span>
            </button>
            {/*end::Toolbar*/}
            </div>
            {/*end::Brand*/}
            {/*begin::Aside Menu*/}
            <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
            {/*begin::Menu Container*/}
            <div id="kt_aside_menu" className="aside-menu my-4 " data-menu-vertical={1} data-menu-scroll={1} data-menu-dropdown-timeout={500}>
                {/*begin::Menu Nav*/}
                <ul className="menu-nav ">
                
                <li className={`menu-item ${pathname === dashboard.path ? "menu-item-active" : ""}`} aria-haspopup="true">
                    <Link to={dashboard.path} className="menu-link ">
                    <span className="menu-text">Dashboard</span>
                    </Link>
                </li>
                
                <li className={`menu-item  menu-item-submenu ${mainActive === "userRoles" ? "menu-item-open" :""}`}>
                    <div onClick={() => setMainActive(mainActive !== 'userRoles' ? 'userRoles' : "" )} className="menu-link">
                        <span className="menu-text">User Roles</span><i className="menu-arrow" />
                    </div>
                    <div className="menu-submenu" style={mainActive === "userRoles" ? {} : hiddenStyle}>
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className={`menu-item ${ (pathname === userRoles.addNewRole.path || pathname === userRoles.createRegistrationForm.path) ? "menu-item-active" : ""}`}>
                        <Link to={userRoles.addNewRole.path} className="menu-link">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create New</span>
                        </Link>
                        </li>
                        <li className={`menu-item ${pathname === userRoles.userRoleList.path ? "menu-item-active" : ""}`}>
                        <Link to={userRoles.userRoleList.path} className="menu-link">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">User Roles</span></Link>
                        </li>
                    </ul>
                    </div>
                </li>
                
                <li className={`menu-item  menu-item-submenu ${mainActive === "adminManage" ? "menu-item-open" :""}`}>
                    <div onClick={() => setMainActive(mainActive !== 'adminManage' ? 'adminManage' : "" )} className="menu-link ">
                        <span className="menu-text">Admin Manage</span><i className="menu-arrow" />
                    </div>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className={`menu-item ${pathname === adminManage.createAdmin.path ? "menu-item-active" : ""}`} >
                            <Link to={adminManage.createAdmin.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Create New</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={adminManage.adminDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">DoorBud</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={adminManage.adminDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Jawafa</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={adminManage.adminDetail.path} className="menu-link ">
                                <i className="menu-bullet menu-bullet-line">
                                    <span /></i><span className="menu-text">Jimmy Guaco's</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={adminManage.adminDetail.path} className="menu-link menu-toggle">
                                <i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">XP Eats</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>

                <li className={`menu-item  menu-item-submenu ${mainActive === "fleetManage" ? "menu-item-open" :""}`}>
                    <div onClick={() => setMainActive(mainActive !== 'fleetManage' ? 'fleetManage' : "" )} className="menu-link ">
                        <span className="menu-text">Fleet Manage</span><i className="menu-arrow" />
                    </div>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className={`menu-item ${pathname === fleetManage.createFleet.path ? "menu-item-active" : ""}`} >
                            <Link to={fleetManage.createFleet.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Create New</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={fleetManage.fleetDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">DoorBud</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={fleetManage.fleetDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Jawafa</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={fleetManage.fleetDetail.path} className="menu-link ">
                                <i className="menu-bullet menu-bullet-line">
                                    <span /></i><span className="menu-text">Jimmy Guaco's</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
                
                <li className={`menu-item  menu-item-submenu ${mainActive === "dispatcherManage" ? "menu-item-open" :""}`}>
                    <div onClick={() => setMainActive(mainActive !== 'dispatcherManage' ? 'dispatcherManage' : "" )} className="menu-link ">
                        <span className="menu-text">Dispatcher Manage</span><i className="menu-arrow" />
                    </div>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className={`menu-item ${pathname === dispatcherManage.createDispatcher.path ? "menu-item-active" : ""}`} >
                            <Link to={dispatcherManage.createDispatcher.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Create New</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={dispatcherManage.dispatcherDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">DoorBud</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={dispatcherManage.dispatcherDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">Jawafa</span>
                            </Link>
                        </li>
                        <li className="menu-item  menu-item-submenu">
                            <Link to={dispatcherManage.dispatcherDetail.path} className="menu-link ">
                                <i className="menu-bullet menu-bullet-line">
                                    <span /></i><span className="menu-text">Jimmy Guaco's</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
         
                <li className={`menu-item  menu-item-submenu ${mainActive === "vendorManage" ? "menu-item-open" :""}`}>
                    <div onClick={() => setMainActive(mainActive !== 'vendorManage' ? 'vendorManage' : "" )} className="menu-link ">
                        <span className="menu-text">Vendor Manage</span><i className="menu-arrow" />
                    </div>
                    <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu">
                            <Link to={dispatcherManage.dispatcherDetail.path} className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                <span />
                                </i>
                                <span className="menu-text">DoorBud</span>
                            </Link>
                        </li>
                        <li className={`menu-item  menu-item-submenu ${subActive === "vendorManageJawafa" ? "menu-item-open" :""}`} >
                        <div onClick={() => setSubActive(subActive !== 'vendorManageJawafa' ? 'vendorManageJawafa' : "" )} className="menu-link">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </div>
                        <div className="menu-submenu" style={subActive === "vendorManageJawafa" ? {} : hiddenStyle}>
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Create Vendor</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Vendor List</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Helper List</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        
                        <li className="menu-item  menu-item-submenu">
                            <Link to={dispatcherManage.dispatcherDetail.path} className="menu-link ">
                                <i className="menu-bullet menu-bullet-line">
                                    <span /></i><span className="menu-text">Jimmy Guaco's</span>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </li>
         

                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Driver Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">DoorBud</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jimmy Guaco's</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Waiter Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">DoorBud</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create Vendor</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Vendor List</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jawafa</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jimmy Guaco's</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Vendor Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">DoorBud</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create Vendor</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Vendor List</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jawafa</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jimmy Guaco's</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">User Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">DoorBud</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jimmy Guaco's</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Rider Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">DoorBud</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Jawafa</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Jimmy Guaco's</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Main Categories</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Add New Category</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Grocery</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Restaurant</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Pharma</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vegetable</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Location Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Grocery</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Restaurant</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Pharma</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vegetable</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Menu Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Grocery</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Restaurant</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Pharma</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vegetable</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Order Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Grocery</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Restaurant</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Pharma</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vegetable</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Document Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Water</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Vehicle Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Vehicle Type</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Vehicle Company</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vehcile Model</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Fare Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Water</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Commission Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Referral Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Statements Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Cancelation Reason Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Complaints Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Help &amp; Support Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Account Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Reports Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Data Analyst Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Media Gallery</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Grocery</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Restaurant</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Pharma</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Vegetable</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Offer Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Promotion Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">SMS Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Email Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Waiter</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Penalty Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Water</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Tips Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Water</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Peak Base Fare Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Water</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">FAQ Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Admin</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-columns-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Columns 4</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/list-datatable.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">List - Datatable</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/view-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">View Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/add-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Add Project</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/projects/edit-project.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Edit Project</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Fleet</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/home-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Home 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-1.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 1</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/faq-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">FAQ 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/feedback.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Feedback</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/support-center/license.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">License</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Dispatcher</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Driver</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Water</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">User</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Rider</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Helper</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Data Analyst</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/private.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Private</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/group.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Group</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/chat/popup.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Popup</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                </ul>
                {/*end::Menu Nav*/}
            </div>
            {/*end::Menu Container*/}
            </div>
            {/*end::Aside Menu*/}
        </div>
    )
}

