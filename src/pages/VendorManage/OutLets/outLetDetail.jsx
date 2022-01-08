import React from 'react';

export default function () {
  return (
    <div>
      <div className="d-flex flex-column-fluid">
        {/*begin::Container*/}
        <div className=" container ">
          <div className="vendor-body page-12-content">
            <div className="edit-delete-form">
              <link to="#" data-toggle="modal" data-target="#exampleModal">
                <img src="assets/images/ic_delete_white.svg" alt="" />
              </link>
              <a href="create-fleet.html">
                <img src="assets/images/ic_edit_white.svg" alt="" />
              </a>
            </div>
            <div className="create-vendor-info">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-xl-5">
                    <div className="form-group">
                      <img
                        src="assets/images/032-boy-13.svg"
                        className="pg-12-avatar"
                        alt=""
                      />
                      <p className="pg-12-avatar-title">ADNAN QURESHI</p>
                      <div className="pg-12-avatar-rating">
                        <img src="assets/images/ic_star_yellow.svg" alt="" />
                        <img src="assets/images/ic_star_yellow.svg" alt="" />
                        <img src="assets/images/ic_star_yellow.svg" alt="" />
                        <img src="assets/images/ic_star_yellow.svg" alt="" />
                        <img src="assets/images/ic_star_yellow.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="row">
                      <div className="top-personal-info">
                        <p className="personal-email">
                          adnan.ahsan21@gmail.com
                        </p>
                        <p className="personal-no">+923008134076</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="form-group">
                      <input
                        disabled
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Out Let Name"
                      />
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            disabled
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            disabled
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group country-numbers">
                          <input
                            disabled
                            className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                            type="text"
                            placeholder="(617) 397 - 8483"
                            name="fullname"
                            autoComplete="off"
                          />
                          <span className="country-code">
                            <img src="assets/images/053-canada.svg" alt="" /> +1
                          </span>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group country-numbers">
                          <input
                            disabled
                            className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6"
                            type="text"
                            placeholder="(617) 397 - 8483"
                            name="fullname"
                            autoComplete="off"
                          />
                          <span className="country-code">
                            <img src="assets/images/053-canada.svg" alt="" /> +1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Official Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group our-country">
                          <select className="form-control">
                            <option>Ontario</option>
                            <option>Ontario</option>
                            <option>Ontario</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group our-country">
                          <select className="form-control">
                            <option>Toronto</option>
                            <option>Ontario</option>
                            <option>Ontario</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <label className="label-country">ALCOHOL</label>
                    <div className="form-group country-names">
                      <select className="form-control">
                        <option>Doesn't serve alcohol</option>
                        <option>Server alcohol</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <label className="r-u-owner who-serve">WHO YOU SERVE</label>
                    <div className="row c-vendor-checboxes">
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 pickup">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Pickup
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 book-for-event">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Book for Event
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Din Inn
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Nightlife
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <label className="r-u-owner who-serve">MENU SERVICES</label>
                    <div className="row c-vendor-checboxes">
                      <div className="col-lg-3">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Breakfast
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2 pickup">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Lunch
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 book-for-event">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Dinner
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Cafe
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Nightlife
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <label className="label-country">SEATING</label>
                    <div className="form-group country-names">
                      <select className="form-control">
                        <option>Seating Available</option>
                        <option>Not Available</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <label className="r-u-owner who-serve">
                      PAYMENT MOTHER
                    </label>
                    <div className="row c-vendor-checboxes">
                      <div className="col-lg-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              PayPal
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 book-for-event">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Credit Card
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              XP Wallet
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg manager-checkbox">
                              <input type="checkbox" name="owner" />
                              <span />
                              Cash on Delivery
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5">
                    <label className="label-country">CUISINES</label>
                    <div className="form-group country-names">
                      <select className="form-control">
                        <option>Arabian * Arabian *</option>
                        <option>Italian</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-5">
                    <label className="label-country">Timings</label>
                    <div
                      className="form-group timing-container"
                      id="timing-container-content create-vendor-timing"
                    >
                      {/* <div className="row" id="who-serve-options">
                  <div className="col-sm-6 col-md-2">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Monday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Tuesday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-3 wednesday-label">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Wednesday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2 thursday-label">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Thursday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Friday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Saturday
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-2 sunday-label">
                    <div className="form-group">
                      <div className="checkbox-inline">
                        <label className="checkbox checkbox-lg">
                          <input type="checkbox" name="owner" />
                          <span />
                          Sunday
                        </label>
                      </div>
                    </div>
                  </div>
                </div> */}
                      <div className="row">
                        <div className="col-sm-6 col-md-4">
                          {/* <label className="label-country">Start Time</label> */}
                          {/* <div className="form-group country-names country-time-select vendor-time-select">
                      <select className="form-control">
                        <option value="12:00">12:00 AM</option>
                        <option value="01:00">01:00 AM</option>
                        <option value="02:00">02:00 AM</option>
                        <option value="03:00">03:00 AM</option>
                        <option value="04:00">04:00 AM</option>
                        <option value="05:00">05:00 AM</option>
                        <option value="06:00">06:00 AM</option>
                        <option value="07:00">07:00 AM</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 AM</option>
                      </select>
                    </div>  */}
                        </div>
                        <div className="">
                          {/* <label className="label-country">Start Time</label>
                    <div className="form-group country-names country-time-select vendor-time-select">
                      <select className="form-control">
                        <option value="12:00">12:00 AM</option>
                        <option value="01:00">01:00 AM</option>
                        <option value="02:00">02:00 AM</option>
                        <option value="03:00">03:00 AM</option>
                        <option value="04:00">04:00 AM</option>
                        <option value="05:00">05:00 AM</option>
                        <option value="06:00">06:00 AM</option>
                        <option value="07:00">07:00 AM</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">	09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 AM</option>
                      </select>
                    </div>  */}
                        </div>
                        <div className="col-sm-12 col-md-4">
                          <label className="label-country">&nbsp;</label>
                          {/* <button type="button" className="btn add-time-btn vendor-add-time">ADD TIME</button> */}
                        </div>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Monday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Tuesday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Wednesday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Thursday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Friday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Saturday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                      <div className="time-label-schedule create-vendor-time-label">
                        <label className="label-country day-label">
                          Sunday
                        </label>
                        <label className="label-time">12:00 AM</label>
                        <label className="label-time">09:00 PM</label>
                        <label className="mark-label">
                          Mark this day as closed
                        </label>
                        <span className="del-container">
                          <img src="assets/images/ic_delete.svg" alt="delete" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 vendor-location-div">
                    <label className="label-country">Locations</label>
                    <div className="form-group location-div">
                      <input
                        className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6 location-input"
                        type="text"
                        placeholder="Enter an address, so we can find this place faster..."
                        name="location"
                        autoComplete="off"
                      />
                      <div className="map">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s"
                          title="outletdetail"
                          style={{ border: 0, width: '100%' }}
                          allowFullScreen
                          width={600}
                          height={450}
                          frameBorder={0}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
