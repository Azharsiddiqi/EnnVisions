import React, {useState} from 'react';
import Form1 from './CreateAdmin/form1.jsx';
import Form2 from './CreateAdmin/form2.jsx';
import Form3 from './CreateAdmin/form3.jsx';

export default () => {
  const [formShow, setFormShow] = useState(0);

  return (
    <div className="d-flex flex-column-fluid">
      {/* begin::Container */}
      <div className="container">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="row">
          <div className="dash-body">
            <div className="container create-admin-container">
              <div className="create-admin-steps">
                <div className="form-group">
                  <div className="checkbox-inline">
                    <label className="basic-info active-checkbox checkbox checkbox-lg">
                      <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" />
                      <span />
                      BASIC INFO
                    </label>
                    {formShow > 0 ? (
                      <label className="basic-info active-checkbox checkbox checkbox-lg">
                        <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" />
                        <span />
                        APP INFO
                      </label>
                    ) : (
                      <label className="app-info checkbox checkbox-lg">
                        <span>2</span>
                        APP INFO
                      </label>
                    )}
                    {formShow > 1 ? (
                      <label className="basic-info active-checkbox checkbox checkbox-lg">
                        <input type="checkbox" defaultChecked="checked" name="Checkboxes3_1" />
                        <span />
                        ACCOUNTS INFO
                      </label>
                    ) : (
                      <label className="accounts-info checkbox checkbox-lg">
                        <span>3</span>
                        ACCOUNTS INFO
                      </label>
                    )}
                  </div>
                </div>
              </div>
              {formShow === 0 && <Form1 formShowHandler={setFormShow} />}
              {formShow === 1 && <Form2 formShowHandler={setFormShow} />}
              {formShow === 2 && <Form3 formShowHandler={setFormShow} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
