import React from 'react';
import { Link } from 'react-router-dom';

export default ({ menu, subMenu }) => {
  return (
    <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
      <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
        {/* begin::Info */}
        <div className="d-flex align-items-center flex-wrap mr-2">
          {/* begin::Page Title */}
          <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
            {menu}
          </h5>
          {/* end::Page Title */}
          {/* begin::Actions */}
          <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
          <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">
            {subMenu}
          </span>
          {/* end::Actions */}
        </div>
        {/* end::Info */}
        {/* begin::Toolbar */}
        <div className="d-flex align-items-center">
          {/* begin::Actions */}
          <Link
            to="#"
            className="btn btn-clean  btn-sm 	font-weight-bold font-size-base mr-1"
          >
            TODAY
          </Link>
          <Link
            to="#"
            className="btn btn-clean  btn-sm 	font-weight-bold font-size-base mr-1"
          >
            WEEK
          </Link>
          <Link
            to="#"
            className="btn btn-clean btn-sm font-weight-bold font-size-base  mr-1"
          >
            MONTH
          </Link>
          <Link
            to="#"
            className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1"
          >
            YEAR
          </Link>
        </div>
      </div>
    </div>
  );
};
