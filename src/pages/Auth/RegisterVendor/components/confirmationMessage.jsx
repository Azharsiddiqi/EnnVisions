import React from 'react';

export default () => {
  return (
    <div className="confirmation-container">
      <div className="confirmation-container-content">
        <img src="assets/images/ic-logo-white.svg" alt="" />
        <div className="confirmation-title">
          Thank you for your application{' '}
        </div>
        <div className="text-content">
          Verification email has been sent to your registered e-mail address.
          Kindly verify your email within 3 working days. To speed up the
          application process, please start preparing the necessary documents{' '}
          <a href="https://grb.to/gfsampledoc">https://grb.to/gfsampledoc</a>{' '}
          &amp; menu excel template{' '}
          <a href="https://grb.to/gfexcelmenu">https://grb.to/gfexcelmenu.</a>{' '}
        </div>
        <br />
        <div className="text-content">
          During this difficult period, there is a large number of incoming
          applications, our representative will get in touch with you soonest
          possible. We appreciate your understanding in this matter.
        </div>
      </div>
    </div>
  );
};
