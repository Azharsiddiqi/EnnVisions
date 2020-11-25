import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Content extends Component {
    render() {
        return (
            <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
            {/*begin::Subheader*/}
            <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
                <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                {/*begin::Info*/}
                <div className="d-flex align-items-center flex-wrap mr-2">
                    {/*begin::Page Title*/}
                    <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
                    SUPER ADMIN                            
                    </h5>
                    {/*end::Page Title*/}
                    {/*begin::Actions*/}
                    <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                    <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">DASHBOARD</span>
                    {/*end::Actions*/}
                </div>
                {/*end::Info*/}
                {/*begin::Toolbar*/}
                <div className="d-flex align-items-center">
                    {/*begin::Actions*/}
                    <Link to="#" className="btn btn-clean  btn-sm 	font-weight-bold font-size-base mr-1">
                    TODAY
                    </Link>
                    <Link to="#" className="btn btn-clean  btn-sm 	font-weight-bold font-size-base mr-1">
                    WEEK
                    </Link>
                    <Link to="#" className="btn btn-clean btn-sm font-weight-bold font-size-base  mr-1">
                    MONTH
                    </Link>
                    <Link to="#" className="btn btn-clean btn-sm font-weight-bold font-size-base mr-1">
                    YEAR
                    </Link>
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
                    <div className="dash-body">
                    <div className="row dash-cards">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="red-bullet">•</div>
                        <div className="card-info">
                            <div><p>ADMIN</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="red user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="sky-bullet">•</div>
                        <div className="card-info">
                            <div><p>FLEET</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="sky user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="yellow">•</div>
                        <div className="card-info">
                            <div><p>ADMIN</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="yellow user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="brownish">•</div>
                        <div className="card-info">
                            <div><p>HELPER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="brownish user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="light-green">•</div>
                        <div className="card-info">
                            <div><p>ADVERSTISER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="light-green user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="blue sky-bullet">•</div>
                        <div className="card-info">
                            <div><p>FLEET</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="blue user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="user-blue">•</div>
                        <div className="card-info">
                            <div><p>USER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="user-blue user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="yellow">•</div>
                        <div className="card-info">
                            <div><p>DRIVER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="yellow user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="sale-blue">12</div>
                        <div className="card-info">
                            <div><p>SALE AGENT</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="sale-blue user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="agency">•</div>
                        <div className="card-info">
                            <div><p>AGENCY</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="agency user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="water">•</div>
                        <div className="card-info">
                            <div><p>WATER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="water user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 card">
                        <div className="referral">•</div>
                        <div className="card-info">
                            <div><p>HELPER</p></div>
                            <div><p>OUR COMMISSION</p></div>
                        </div>
                        <div className="card-no">
                            <div><p>20</p></div>
                            <div><p>20%</p></div>
                        </div>
                        <div className="referral user-img">
                            <img src="assets/images/026-boy-10.svg" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="dash-links">
                        <Link to="#" className="active-link">ENNVISIONS INCOME</Link>
                        <Link to="#">XP EATS INCOME</Link>
                        <Link to="#">DOOR BUD INCOME</Link>
                        <Link to="#">JIMMY GUACO'S INCOME</Link>
                    </div>
                    <div className="row dash-category">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">ADMIN</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">FLEET</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">VENDOR</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">HELPER</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">ADVERTISER</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">DATA ANALYST</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">USER</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 category">
                        <p className="title-cat">DRIVER</p>
                        <div className="cat-info">
                            <div className="cat-info-one">
                            <p>WEEKLY INCOME</p>
                            <p>TOTAL INCOME</p>
                            </div>
                            <div className="cat-info-two">
                            <p>$455</p>
                            <p>$750000</p>
                            </div>
                            <div className="cat-info-three">
                            <img src="assets/images/green-circle.png" alt="green-circle" />
                            </div>
                        </div>	
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Content;