import React from 'react'

export default () => {
    return (
        <React.Fragment>
            <div className="login-aside-container">
                <div className="login-aside d-flex flex-column flex-row-auto" style={{backgroundColor: '#C7112B', height: "100%"}}>
                    {/*begin::Aside Top*/}
                    <div className="d-flex flex-column-auto flex-column pt-5">
                    <img src="assets/images/ic-logo-white.svg" alt="logo" className="envision-white-logo" />  
                    </div>
                    {/*end::Aside Top*/}
                    {/*begin::Aside Bottom*/}
                    <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{backgroundImage: 'url(assets/media/svg/illustrations/login-visual-1.svg)'}}>
                    </div>
                    {/*end::Aside Bottom*/}
                </div>
            </div>
        </React.Fragment>
    )
}

