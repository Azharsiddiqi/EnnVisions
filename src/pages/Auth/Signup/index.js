import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Signup extends Component {
    render() {
        return (
            <React.Fragment>
                {/*begin::Main*/}
                <div className="d-flex flex-column flex-root">
                {/*begin::Login*/}
                <div className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white" id="kt_login">
                    {/*begin::Aside*/}
                    <div className="login-aside d-flex flex-column flex-row-auto" style={{backgroundColor: '#C7112B'}}>
                    {/*begin::Aside Top*/}
                    <div className="d-flex flex-column-auto flex-column pt-5">
                        <img src="assets/images/ic-logo-white.svg" alt="logo" className="envision-white-logo" />  
                    </div>
                    {/*end::Aside Top*/}
                    {/*begin::Aside Bottom*/}
                    <div className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center" style={{backgroundImage: 'url(assets/media/svg/illustrations/login-visual-1.svg)'}} />
                    {/*end::Aside Bottom*/}
                    </div>
                    {/*begin::Aside*/}
                    {/*begin::Content*/}
                    <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                    {/*begin::Content body*/}
                    <div className="d-flex flex-column-fluid flex-center">
                        {/*begin::Signin*/}
                        <div className="login-form login-signin">
                        {/*begin::Form*/}
                        <img src="assets/images/ic-logo.svg" alt="logo" className="envision-red-logo" />
                        <form className="form" noValidate="novalidate" id="kt_login_signin_form">
                            <div className="pb-13 pt-lg-0 pt-5">
                            <h3 className="welcome-title">Sign Up</h3>
                            <p className="gilroy-regular text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
                            </div>
                            {/*end::Title*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Fullname" name="fullname" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="password" placeholder="Password" name="password" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="password" placeholder="Confirm password" name="cpassword" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <label className="checkbox mb-0">
                                <input type="checkbox" name="agree" />I Agree the &nbsp;<Link to="">terms and conditions</Link>.&nbsp;
                                <span />
                            </label>
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                            <button type="button" id="kt_login_signup_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">SUBMIT</button>
                            <button type="button" id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">CANCEL</button>
                            </div>
                            {/*end::Action*/}
                        </form>
                        {/*end::Form*/}
                        </div>
                        {/*end::Signin*/}  
                    </div>
                    {/*end::Content body*/}
                    {/*begin::Content footer*/}
                    <div className="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
                        <Link to="#" className="gilroy-medium text-primary font-weight-bolder font-size-h5">TERMS</Link>
                        <Link to="#" className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5">PLANS</Link>
                        <Link to="#" className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5">CONTACT US</Link>
                    </div>
                    {/*end::Content footer*/}
                    </div>
                    {/*end::Content*/}
                </div>
                {/*end::Login*/}
                </div>
                {/*end::Main*/}

            </React.Fragment>
        );
    }
}

export default Signup;
