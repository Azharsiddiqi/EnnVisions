import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Content extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                    {/*begin::Content body*/}
                    <div className="d-flex flex-column-fluid flex-center">
                        {/*begin::Signin*/}
                        <div className="login-form login-signin">
                        {/*begin::Form*/}
                        <img src="assets/images/ic-logo.svg" alt="logo" className="envision-red-logo" />
                        <form className="form" noValidate="novalidate" id="kt_login_signin_form">
                            {/*begin::Title*/}
                            <div className="pb-7 pt-lg-0 pt-5">
                            <h3 className="forgot-title">WANT TO BE A EnnVisions MERCHANT? (CANADA)</h3>
                            <span className="leave-text gilroy-regular">Leave your restaurant details here and we will be in touch shortly.</span> 
                            </div>
                            {/*begin::Title*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg" type="text" name="username" autoComplete="off" placeholder="Enter Email Address" />
                            </div>
                            <div className="pb-lg-0 pb-5">
                            <button type="button" id="kt_login_signin_submit" className="btn btn-primary next-btn font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3">NEXT</button>
                            </div>
                            {/*end::Action*/}
                        </form>
                        {/*end::Form*/}
                        </div>
                        {/*end::Signin*/}
                        {/*begin::Signup*/}
                        <div className="login-form login-signup">
                        {/*begin::Form*/}
                        <form className="form" noValidate="novalidate" id="kt_login_signup_form">
                            {/*begin::Title*/}
                            <div className="pb-13 pt-lg-0 pt-5">
                            <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Sign Up</h3>
                            <p className="text-muted font-weight-bold font-size-h4">Enter your details to create your account</p>
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
                                <input type="checkbox" name="agree" />I Agree the <Link to="#">terms and conditions</Link>.
                                <span />
                            </label>
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                            <button type="button" id="kt_login_signup_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
                            <button type="button" id="kt_login_signup_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
                            </div>
                            {/*end::Form group*/}
                        </form>
                        {/*end::Form*/}
                        </div>
                        {/*end::Signup*/}
                        {/*begin::Forgot*/}
                        <div className="login-form login-forgot">
                        {/*begin::Form*/}
                        <form className="form" noValidate="novalidate" id="kt_login_forgot_form">
                            {/*begin::Title*/}
                            <div className="pb-13 pt-lg-0 pt-5">
                            <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">Forgotten Password ?</h3>
                            <p className="text-muted font-weight-bold font-size-h4">Enter your email to reset your password</p>
                            </div>
                            {/*end::Title*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="email" placeholder="Email" name="email" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group d-flex flex-wrap pb-lg-0">
                            <button type="button" id="kt_login_forgot_submit" className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4">Submit</button>
                            <button type="button" id="kt_login_forgot_cancel" className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3">Cancel</button>
                            </div>
                            {/*end::Form group*/}
                        </form>
                        {/*end::Form*/}
                        </div>
                        {/*end::Forgot*/}
                    </div>
                    {/*end::Content body*/}
                    {/*begin::Content footer*/}
                    <div className="footer-links d-flex justify-content-center align-items-end py-7 py-lg-0">
                        <Link className="gilroy-medium text-primary font-weight-bolder font-size-h5" to="/signup">TERMS</Link>
                        <Link className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5" to="/signup">PLANS</Link>
                        <Link className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5" to="/signup">CONTACT US</Link>
                    </div>

                    {/*end::Content footer*/}
                    </div>
                    
            </React.Fragment>
        )
    }
}

export default Content;