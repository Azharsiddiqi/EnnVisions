import React, { Component } from 'react';
import Routes from './routes';

// Components Import
import HeaderMobile from '../components/HeaderMobile';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import UserPanel from '../components/Dashboard/UserPanel';
import QuickCart from '../components/Dashboard/QuickCart';
import QuickPanel from '../components/Dashboard/QuickPanel';
import ChatPanel from '../components/Dashboard/ChatPanel';
import ScrollToTop from '../components/Dashboard/ScrollToTop';
import DemoPanel from '../components/Dashboard/DemoPanel';
class index extends Component {
    render() {
        return (
            <div  id="kt_body"  class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
                 <div>
                    {/*begin::Main*/}
                    {/*begin::Header Mobile*/}
                    <HeaderMobile />
                    {/*end::Header Mobile*/}
                    <div className="d-flex flex-column flex-root">
                        {/*begin::Page*/}
                        <div className="d-flex flex-row flex-column-fluid page">
                            {/*begin::Aside*/}
                            <Sidebar />
                            {/*end::Aside*/}
                            {/*begin::Wrapper*/}
                            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                                {/*begin::Header*/}
                                <Header />
                                {/*end::Header*/}

                                {/*begin::Content*/}
                                <Routes />
                                {/*end::Wrapper*/}

                            </div>
                            {/*end::Page*/}
                        </div>
                        {/*end::Main*/}
                        {/* begin::User Panel*/}
                        <UserPanel />
                        {/* end::User Panel*/}
                        {/*begin::Quick Cart*/}
                        <QuickCart />
                        {/*end::Quick Cart*/}
                        {/*begin::Quick Panel*/}
                        <QuickPanel />
                        {/*end::Quick Panel*/}
                        {/*begin::Chat Panel*/}
                        <ChatPanel />
                        {/*end::Chat Panel*/}
                        {/*begin::Scrolltop*/}
                        <ScrollToTop />
                        {/*begin::Demo Panel*/}
                        <DemoPanel />
                        {/*end::Demo Panel*/}
                    </div>
            </div>
            </div>
        )
    }
}

export default index;