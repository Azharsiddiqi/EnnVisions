import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class page12 extends Component {
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
                            <div className="vendor-body page-12-content">
                            <div className="edit-delete-form">
                                <Link to="#" data-toggle="modal" data-target="#exampleModal">
                                <img src="assets/images/ic_delete_white.svg" alt=""/>
                                </Link>
                                <Link to="create-fleet.html">
                                <img src="assets/images/ic_edit_white.svg" alt=""/>
                                </Link>
                            </div>
                            <div className="create-vendor-info">
                                <form action="#" method="post">
                                <div className="row">
                                    <div className="col-xl-5">
                                    <div className="form-group">
                                        <img src="assets/images/032-boy-13.svg" className="pg-12-avatar" alt=""/>
                                        <p className="pg-12-avatar-title">ADNAN QURESHI</p>
                                        <div className="pg-12-avatar-rating">
                                        <img src="assets/images/ic_star_yellow.svg" alt=""/>
                                        <img src="assets/images/ic_star_yellow.svg" alt=""/>
                                        <img src="assets/images/ic_star_yellow.svg" alt=""/>
                                        <img src="assets/images/ic_star_yellow.svg" alt=""/>
                                        <img src="assets/images/ic_star_yellow.svg" alt=""/>
                                        </div>
                                    </div>	
                                    </div>
                                    <div className="col-xl-5">
                                    <div className="row">
                                        <div className="top-personal-info">
                                        <p className="personal-email">adnan.ahsan21@gmail.com</p>
                                        <p className="personal-no">+923008134076</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Out Let Name" />
                                    </div>	
                                    </div>
                                    <div className="col-xl-5">
                                    <div className="row">
                                        <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                                        </div>
                                        </div>
                                        <div className="col-6">
                                        <div className="form-group">
                                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="form-group country-numbers">
                                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                                            <span className="country-code">
                                            <img src="assets/images/053-canada.svg" alt=""/> +1
                                            </span>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-group country-numbers">
                                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                                            <span className="country-code">
                                            <img src="assets/images/053-canada.svg" alt=""/> +1
                                            </span>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-5">
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Official Email" />
                                    </div>	
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" />
                                    </div>	
                                    </div>
                                    <div className="col-xl-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                        <div className="form-group our-country">
                                            <select className="form-control">
                                            <option>Ontario</option>
                                            <option>Ontario</option>
                                            <option>Ontario</option>
                                            </select>
                                        </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-group our-country">
                                            <select className="form-control">
                                            <option>Toronto</option>
                                            <option>Ontario</option>
                                            <option>Ontario</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <label className="label-country">ALCOHOL</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option>Doesn't serve alcohol</option>
                                        <option>Server alcohol</option>
                                        </select>
                                    </div>	
                                    </div>
                                    <div className="col-xl-5">
                                    <label className="r-u-owner who-serve">WHO YOU SERVE</label>
                                    <div className="row c-vendor-checboxes">
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Devlivery
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2 pickup">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Pickup
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 book-for-event">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Book for Event
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Din Inn
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Nightlife
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <label className="r-u-owner who-serve">MENU SERVICES</label>
                                    <div className="row c-vendor-checboxes">
                                        <div className="col-lg-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Breakfast
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2 pickup">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Lunch
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-3 book-for-event">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Dinner
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Cafe
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Nightlife
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-5">
                                    <label className="label-country">SEATING</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option>Seating Available</option>
                                        <option>Not Available</option>
                                        </select>
                                    </div>	
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <label className="r-u-owner who-serve">PAYMENT MOTHER</label>
                                    <div className="row c-vendor-checboxes">
                                        <div className="col-lg-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                PayPal
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-3 book-for-event">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Credit Card
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                XP Wallet
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-lg-4">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg manager-checkbox">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Cash on Delivery
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-5">
                                    <label className="label-country">CUISINES</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option>Arabian * Arabian *</option>
                                        <option>Italian</option>
                                        </select>
                                    </div>	
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-5">
                                    <label className="label-country">Timings</label>
                                    <div className="form-group timing-container" id="timing-container-content create-vendor-timing">
                                        <div className="row" id="who-serve-options">
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Monday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Tuesday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3 wednesday-label">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Wednesday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2 thursday-label">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Thursday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Friday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Saturday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-2 sunday-label">
                                            <div className="form-group">
                                            <div className="checkbox-inline">
                                                <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Sunday
                                                </label>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <label className="label-country">Start Time</label>
                                            <div className="form-group country-names country-time-select vendor-time-select">
                                            <select className="form-control">
                                                <option value="12:00">12:00 AM</option>
                                                <option value="01:00">01:00 AM</option>
                                                <option value="02:00">02:00 AM</option>
                                                <option value="03:00">03:00 AM</option>
                                                <option value="04:00">04:00 AM</option>
                                                <option value="05:00">05:00 AM</option>
                                                <option value="06:00">06:00 AM</option>
                                                <option value="07:00">07:00 AM</option>
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 AM</option>
                                            </select>
                                            </div> 
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <label className="label-country">Start Time</label>
                                            <div className="form-group country-names country-time-select vendor-time-select">
                                            <select className="form-control">
                                                <option value="12:00">12:00 AM</option>
                                                <option value="01:00">01:00 AM</option>
                                                <option value="02:00">02:00 AM</option>
                                                <option value="03:00">03:00 AM</option>
                                                <option value="04:00">04:00 AM</option>
                                                <option value="05:00">05:00 AM</option>
                                                <option value="06:00">06:00 AM</option>
                                                <option value="07:00">07:00 AM</option>
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">	09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 AM</option>
                                            </select>
                                            </div> 
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <label className="label-country">&nbsp;</label>
                                            <button type="button" className="btn add-time-btn vendor-add-time">ADD TIME</button>
                                        </div>
                                        </div>
                                        <div className="time-label-schedule create-vendor-time-label">
                                        <label className="label-country day-label">Monday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" alt=""/>
                                        </span>
                                        </div>
                                        <div className="time-label-schedule create-vendor-time-label">
                                        <label className="label-country day-label">Tuesday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" alt="" />
                                        </span>
                                        </div>
                                        <div className="time-label-schedule create-vendor-time-label">
                                        <label className="label-country day-label">Wednesday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" alt=""/>
                                        </span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-xl-5 vendor-location-div">
                                    <label className="label-country">Locations</label>
                                    <div className="form-group location-div">
                                        <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6 location-input" type="text" placeholder="Enter an address, so we can find this place faster..." name="location" autoComplete="off" />
                                        <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s" width={600} height={450} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen>
                                        </iframe>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </form>
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
export default page12;