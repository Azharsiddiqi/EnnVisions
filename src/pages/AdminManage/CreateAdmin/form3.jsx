import React from 'react';
import {useHistory} from 'react-router-dom';
import {PRIVATE_ROUTES} from '../../../config';

export default () => {
  const history = useHistory();
  return (
    <div className="create-admin-form">
      <form action="#" method="post">
        <div className="row">
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">STRIP KEY</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Sole Proprietorship"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">XP WALLET</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Sole Proprietorship"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">CUSTOMER MAP KEY</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Sole Proprietorship"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">DRIVER MAP KEY</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="DRIVER MAP KEY"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">WAITER MAP KEY</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Sole Proprietorship"
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">MANAGER MAP KEY</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="DRIVER MAP KEY"
              />
            </div>
          </div>
        </div>
        <div className="btn-fleet-submit">
          <button
            type="submit"
            className="btn"
            onClick={() => history.push(PRIVATE_ROUTES.dashboard.path)}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
