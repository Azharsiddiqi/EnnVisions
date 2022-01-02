import React from 'react';

export default () => {
  return (
    <>
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
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s"
            style={{border: 0, width: '100%'}}
            allowFullScreen
            width={600}
            height={450}
            frameBorder={0}
          ></iframe>
        </div>
      </div>
      <label className="label-country">Characteristics</label>
      <br />
      <br />
      <label className="label-country">ALCOHOL</label>
      <div className="form-group country-names">
        <select className="form-control">
          <option value="dont-serve">Doesn't serve alcohol</option>
          <option value="serve">Doesn't serve alcohol</option>
        </select>
      </div>
      <label className="label-country">WHO YOU SERVE</label>
      <div className="row" id="who-serve-options">
        <div className="col-sm-6 col-md-2">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Devlivery
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
                Pickup
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Book for Event
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Din Inn
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
                Nightlife
              </label>
            </div>
          </div>
        </div>
      </div>
      <label className="label-country">MENU SERVICES</label>
      <div className="row" id="who-serve-options">
        <div className="col-sm-6 col-md-2">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Breakfast
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
                Lunch
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Dinner
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Cafe
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
                Nightlife
              </label>
            </div>
          </div>
        </div>
      </div>
      <label className="label-country">SEATING</label>
      <div className="form-group country-names">
        <select className="form-control">
          <option value="Seating">Seating Available</option>
          <option value="Not-Available">Seating Not Available</option>
        </select>
      </div>
      <label className="label-country">PAYMENT MOTHER</label>
      <div className="row" id="who-serve-options">
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                PayPal
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Credit Card
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                XP Wallet
              </label>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group">
            <div className="checkbox-inline">
              <label className="checkbox checkbox-lg">
                <input type="checkbox" name="owner" />
                <span />
                Cash on Delivery
              </label>
            </div>
          </div>
        </div>
      </div>
      <label className="label-country">CUISINES</label>
      <div className="form-group country-names">
        <select className="form-control">
          <option value="Arabian*">Arabian* Arabian*</option>
          <option value="Not-arabian">Non-Arabian*</option>
        </select>
      </div>
      <label className="label-country">Timings</label>
      <div className="form-group timing-container" id="timing-container-content">
        <div className="row" id="who-serve-options">
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
          <div className="col-sm-6 col-md-3">
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
          <div className="col-sm-6 col-md-3">
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
          <div className="col-sm-6 col-md-2">
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
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <label className="label-country">Start Time</label>
            <div className="form-group country-names country-time-select">
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
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <label className="label-country">Start Time</label>
            <div className="form-group country-names country-time-select">
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
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <label className="label-country">&nbsp;</label>
            <button type="button" className="btn add-time-btn">
              ADD TIME
            </button>
          </div>
        </div>
        <div className="time-label-schedule">
          <label className="label-country day-label">Monday</label>
          <label className="label-time">12:00 AM</label>
          <label className="label-time">09:00 PM</label>
          <label className="mark-label">Mark this day as closed</label>
          <span className="del-container">
            <img src="assets/images/ic_delete.svg" alt="delete" />
          </span>
        </div>
        <div className="time-label-schedule">
          <label className="label-country day-label">Tuesday</label>
          <label className="label-time">12:00 AM</label>
          <label className="label-time">09:00 PM</label>
          <label className="mark-label">Mark this day as closed</label>
          <span className="del-container">
            <img src="assets/images/ic_delete.svg" alt="delete" />
          </span>
        </div>
        <div className="time-label-schedule">
          <label className="label-country day-label">Wednesday</label>
          <label className="label-time">12:00 AM</label>
          <label className="label-time">09:00 PM</label>
          <label className="mark-label">Mark this day as closed</label>
          <span className="del-container">
            <img src="assets/images/ic_delete.svg" alt="delete" />
          </span>
        </div>
      </div>
    </>
  );
};
