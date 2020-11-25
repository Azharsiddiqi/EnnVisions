import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class page15 extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                    {/*begin::Header*/}
                    <div id="kt_header" className="header  header-fixed ">
                        {/*begin::Container*/}
                        <div className=" container-fluid  d-flex align-items-stretch justify-content-between">
                        {/*begin::Header Menu Wrapper*/}
                        <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
                            {/*begin::Header Menu*/}
                            <div id="kt_header_menu" className="header-menu header-menu-mobile  header-menu-layout-default ">
                            {/*begin::Header Nav*/}
                            {/*end::Header Nav*/}
                            </div>
                            {/*end::Header Menu*/}
                        </div>
                        {/*end::Header Menu Wrapper*/}
                        {/*begin::Topbar*/}
                        <div className="topbar">
                            {/*begin::Search*/}
                            <div className="dropdown" id="kt_quick_search_toggle">
                            {/*begin::Toggle*/}
                            <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                                <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                                <span className="svg-icon svg-icon-xl svg-icon-primary">
                                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                        <rect x={0} y={0} width={24} height={24} />
                                        <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                        <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                                    </g>
                                    </svg>
                                    {/*end::Svg Icon*/}
                                </span>
                                </div>
                            </div>
                            </div>
                            <div className="dropdown">
                            {/*begin::Toggle*/}
                            <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                                <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                                <img className="h-20px w-20px rounded-sm" src="assets/media/svg/flags/226-united-states.svg" alt="" />
                                </div>
                            </div>
                            {/*end::Toggle*/}
                            {/*begin::Dropdown*/}
                            <div className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
                                {/*begin::Nav*/}
                                <ul className="navi navi-hover py-4">
                                {/*begin::Item*/}
                                <li className="navi-item">
                                    <Link to="#" className="navi-link">
                                    <span className="symbol symbol-20 mr-3">
                                        <img src="assets/media/svg/flags/226-united-states.svg" alt="" />
                                    </span>
                                    <span className="navi-text">English</span>
                                    </Link>
                                </li>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <li className="navi-item active">
                                    <Link to="#" className="navi-link">
                                    <span className="symbol symbol-20 mr-3">
                                        <img src="assets/media/svg/flags/128-spain.svg" alt="" />
                                    </span>
                                    <span className="navi-text">Spanish</span>
                                    </Link>
                                </li>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <li className="navi-item">
                                    <Link to="#" className="navi-link">
                                    <span className="symbol symbol-20 mr-3">
                                        <img src="assets/media/svg/flags/162-germany.svg" alt="" />
                                    </span>
                                    <span className="navi-text">German</span>
                                    </Link>
                                </li>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <li className="navi-item">
                                    <Link to="#" className="navi-link">
                                    <span className="symbol symbol-20 mr-3">
                                        <img src="assets/media/svg/flags/063-japan.svg" alt="" />
                                    </span>
                                    <span className="navi-text">Japanese</span>
                                    </Link>
                                </li>
                                {/*end::Item*/}
                                {/*begin::Item*/}
                                <li className="navi-item">
                                    <Link to="#" className="navi-link">
                                    <span className="symbol symbol-20 mr-3">
                                        <img src="assets/media/svg/flags/195-france.svg" alt="" />
                                    </span>
                                    <span className="navi-text">French</span>
                                    </Link>
                                </li>
                                {/*end::Item*/}
                                </ul>
                                {/*end::Nav*/}
                            </div>
                            {/*end::Dropdown*/}
                            </div>
                            {/*end::Languages*/}
                            {/*begin::User*/}
                            <div className="topbar-item">
                            <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
                                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
                                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Adnan</span>
                                <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
                                <span className="symbol-label font-size-h5 font-weight-bold">S</span>
                                </span>
                            </div>
                            </div>
                            {/*end::User*/}
                        </div>
                        {/*end::Topbar*/}
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/*end::Header*/}
                    {/*begin::Content*/}
                    <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
                        {/*begin::Subheader*/}
                        <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
                        <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                            {/*begin::Info*/}
                            <div className="d-flex align-items-center flex-wrap mr-2">
                            {/*begin::Page Title*/}
                            <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
                                DASHBOARD                            
                            </h5>
                            {/*end::Page Title*/}
                            {/*begin::Actions*/}
                            <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                            <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">USER ROLES</span>
                            {/*end::Actions*/}
                            </div>
                        </div>
                        </div>
                        {/*end::Subheader*/}
                        {/*begin::Entry*/}
                        <div className="d-flex flex-column-fluid">
                        {/*begin::Container*/}
                        <div className=" container ">
                            {/*begin::Dashboard*/}
                            {/*begin::Row*/}
                            <div className="row">
                            <div className="dash-body page-15-container">
                                <div className="top-btn">
                                <button type="button" className="btn delete-btn">DELETE</button>
                                <button type="button" className="btn duplicate-btn">DUPLICATE</button>
                                <button type="button" className="btn save-btn">SAVE</button>
                                </div>
                                <div className="top-add">
                                <h1>MENU NAME</h1>
                                <div className="add-note">
                                    <img src="assets/images/ic_tab_note.svg" />
                                    <span>ADD NOTE</span>
                                </div>
                                </div>
                                <div className="pg-15-menu-content">
                                <span className="photo">Photo</span>
                                <span className="on-admin">ONLY ADMIN</span>
                                <div className="img-preview">
                                    <div className="image-upload">
                                    <label htmlFor="file-input">
                                        <div className="placeholder-img">
                                        <div>
                                            <span className="drop-img">Drop image here to Upload</span>
                                            <br /> <span className="drop-img">or</span>
                                            <br />
                                            <span className="browse">Browse File</span></div>
                                        </div>
                                    </label>
                                    <input id="file-input" type="file" />
                                    </div>
                                    <div className="img-p-text">
                                    <p className="ph-tos">Photos help customers decide what to order and can increase Sales</p>
                                    <p className="see-full">See full photo guidelines</p>
                                    <p className="file-require">File requirement: JPG, PNG, or GIF up to 10MB. Minimum pixels required: 550 for width, 440 for height.</p>
                                    <div className="add-down-remove-btn">
                                        <button className="btn add-photo" type="button">ADD PHOTO</button>
                                        <button className="btn down-btn" type="button">DOWNLOAD</button>
                                        <button className="btn remove-btn" type="button">REMOVE</button>
                                    </div>
                                    </div>
                                </div>
                                <div className="desc-box">
                                    <p className="desc-t">Description <span className="opt-text">(optional)</span></p>
                                    <textarea rowSpan={5} placeholder="Buckwheat pancakes with maples syrup" defaultValue={""} />
                                </div>
                                <div className="breakfast">
                                    <img src="assets/images/ic_tab_delete_all.svg" />
                                    <span className="bf-favourite">Breakfast favorites
                                    <img src="assets/images/ic_tab_remove.svg" />
                                    </span>
                                    <span className="add-category">Add a category</span>
                                    <img src="assets/images/ic_red_search.svg" className="red-search" />
                                </div>
                                <p className="listed">Listed in following Outlet: Breakfast</p>
                                <div className="breakfast">
                                    <img src="assets/images/ic_tab_delete_all.svg" />
                                    <span className="bf-favourite">Breakfast favorites
                                    <img src="assets/images/ic_tab_remove.svg" />
                                    </span>
                                    <span className="bf-favourite">Breakfast favorites
                                    <img src="assets/images/ic_tab_remove.svg" />
                                    </span>
                                    <span className="add-category">Add a Outlet</span>
                                </div>
                                <p className="listed">Listed in following Outlet: Breakfast</p>
                                <div className="sch-content">
                                    <span className="sch-menu">Scheduled menus</span>
                                    <span className="on-admin">ONLY ADMIN</span>
                                </div>
                                <p className="wil-replace">Scheduled menu will replace existing content the set time</p>
                                <div className="upload-menu">
                                    <Link to="#">UPLOAD MENU</Link>
                                    <span className="zero">00:00</span>
                                    <span className="zero">00:00</span>
                                    <span className="est">EST</span>
                                    <span className="sch-t">SCHEDULED</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

            </React.Fragment>
        )
    }
}
export default page15;