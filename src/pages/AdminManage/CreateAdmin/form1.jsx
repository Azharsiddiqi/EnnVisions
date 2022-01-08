import React from 'react';

const Form1 = ({ formShowHandler }) => {
  return (
    <div className="create-admin-form">
      <form>
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Full Name"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Company name"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="+92 3008134076"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Company mailing address"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Country</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Pakistan</option>
                <option>USA</option>
                <option>UK</option>
                <option>SA</option>
                <option>UAE</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">State</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option>Punjab</option>
                <option>Sindh</option>
                <option>KPK</option>
                <option>AJK</option>
              </select>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="City"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Zip code"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s"
                style={{ border: 0, width: '100%' }}
                allowFullScreen
                width={600}
                height={450}
                frameBorder={0}
              ></iframe>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Registration Number"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Website"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Vehicle Type*</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="FOOD"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Company Share</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="20%"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="file"
                className="form-control upload"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Insurance (Photo)"
              />
              <div className="fakefile">
                <span className="placeholder">
                  Insurance <span className="light">(Photo)</span>
                </span>
                <input />
                <img src="assets/images/ic_upload.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Insurance Expiry Date"
              />
              <img
                src="assets/images/ic_calendar.svg"
                className="calendar-icon"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="btn-fleet-submit">
          <button
            type="submit"
            onClick={() => formShowHandler(1)}
            className="btn"
          >
            NEXT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form1;
