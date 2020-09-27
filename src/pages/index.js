import React, { Component } from 'react';

import Routes from './routes';

class index extends Component {
    render() {
        return (
            <div  id="kt_body"  class="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-fixed aside-minimize-hoverable page-loading">
                <Routes  />
            </div>
        )
    }
}

export default index;