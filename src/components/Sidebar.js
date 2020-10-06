import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render() {
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
                <li className="menu-item  menu-item-active" aria-haspopup="true">
                    <Link to="/" className="menu-link ">
                    <span className="menu-text">Dashboard</span>
                    </Link>
                </li>
                <li className="menu-section ">
                    <h4 className="menu-text">User Roles</h4>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Create New</span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">User Roles</span>
                    </Link>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Admin Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create New</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 1</span><i className="menu-arrow" /></Link>
                                <div className="menu-submenu ">
                                <i className="menu-arrow" />
                                <ul className="menu-subnav">
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/overview.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Overview</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/personal-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Personal Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/account-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Account Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/change-password.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Change Password</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/email-settings.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Email Settings</span></Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 4</span></Link></li>
                            </ul>
                        </div>
                        </li>
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
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">XP Eats</span><i className="menu-arrow" /></Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/todo/tasks.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Tasks</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/todo/docs.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Docs</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/todo/files.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Files</span></Link></li>
                            </ul>
                        </div>
                        </li>
                    </ul>
                    </div>
                </li>
                <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                    <Link to="/" className="menu-link menu-toggle">
                    <span className="menu-text">Fleet Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create New</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 1</span><i className="menu-arrow" /></Link>
                                <div className="menu-submenu ">
                                <i className="menu-arrow" />
                                <ul className="menu-subnav">
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/overview.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Overview</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/personal-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Personal Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/account-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Account Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/change-password.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Change Password</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/email-settings.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Email Settings</span></Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 4</span></Link></li>
                            </ul>
                        </div>
                        </li>
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
                    <span className="menu-text">Dispatcher Manage</span><i className="menu-arrow" />
                    </Link>
                    <div className="menu-submenu ">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                        <Link to="/" className="menu-link menu-toggle">
                            <i className="menu-bullet menu-bullet-line">
                            <span />
                            </i>
                            <span className="menu-text">Create New</span>
                            <i className="menu-arrow" />
                        </Link>
                        <div className="menu-submenu ">
                            <i className="menu-arrow" />
                            <ul className="menu-subnav">
                            <li className="menu-item  menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                                <Link to="/" className="menu-link menu-toggle"><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 1</span><i className="menu-arrow" /></Link>
                                <div className="menu-submenu ">
                                <i className="menu-arrow" />
                                <ul className="menu-subnav">
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/overview.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Overview</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/personal-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Personal Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/account-information.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Account Information</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/change-password.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Change Password</span></Link></li>
                                    <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-1/email-settings.html" className="menu-link "><i className="menu-bullet menu-bullet-line"><span /></i><span className="menu-text">Email Settings</span></Link></li>
                                </ul>
                                </div>
                            </li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-2.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 2</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-3.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 3</span></Link></li>
                            <li className="menu-item " aria-haspopup="true"><Link to="custom/apps/profile/profile-4.html" className="menu-link "><i className="menu-bullet menu-bullet-dot"><span /></i><span className="menu-text">Profile 4</span></Link></li>
                            </ul>
                        </div>
                        </li>
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
}

export default Sidebar;