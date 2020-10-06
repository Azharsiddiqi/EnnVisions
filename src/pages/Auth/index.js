import React, { Component } from 'react';
import Routes from './routes';

import Aside from "../../components/Auth/Aside";


class index extends Component {
    render() {
        return (
            <div  id="kt_body"  class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
                {/*begin::Main*/}
                <div className="d-flex flex-column flex-root">
                    {/*begin::Login*/}
                    <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                        {/*begin::Aside*/}
                        <Aside />
                        {/*begin::Aside*/}
                        {/*begin::Content*/}
                        <Routes  />
                        {/*end::Content*/}
                    </div>
                    {/*end::Login*/}
                </div>
                {/*end::Main*/}

            </div>
        )
    }
}

export default index;