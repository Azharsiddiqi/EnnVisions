import React, { Component } from 'react';

class dispatcherInfo extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
              <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
  <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
    {/*begin::Info*/}
    <div className="d-flex align-items-center flex-wrap mr-2">
      {/*begin::Page Title*/}
      <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
        DASHBOARD                            
      </h5>
      {/*end::Page Title*/}
      {/*begin::Actions*/}
      <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
      <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">USER ROLES</span>
      {/*end::Actions*/}
    </div>
  </div>
</div>

                <div className="view-fleet-form">
  <form action="#" method="post">
    <div className="row">
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company name" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="+92 3008134076" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
        </div>	
      </div>
      <div className="col-sm-12">
        <div className="form-group">
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company mailing address" />
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
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip code" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Registration Number" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Website" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="file" className="form-control upload" onchange="readURL(this);" id="file-upload" aria-describedby="emailHelp" placeholder="Insurance (Photo)" />
          <div>
            <img id="blah" src="#" alt="" name="our-img" />
          </div>
          <div className="fakefile">
            <span className="placeholder" />
            <input className="form-control" placeholder="review" />
            <span className="in-riview">IN REIVEW</span>
          </div>
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="License Expiry Date" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="file" className="form-control upload" onchange="readURL(this);" id="file-upload" aria-describedby="emailHelp" placeholder="Insurance (Photo)" />
          <div>
            <img id="blah" src="#" alt="" name="our-img" />
          </div>
          <div className="fakefile">
            <span className="placeholder" />
            <input className="form-control" placeholder="complete" />
            <span className="complete">IN REIVEW</span>
          </div>
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Insurance Expiry Date" />
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Vehicle Type*</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>EV Go, EV PLUS, EV BUSINESS</option>
            <option>Sindh</option>
            <option>KPK</option>
            <option>AJK</option>
          </select>
        </div>	
      </div>
      <div className="col-sm-6">
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Company Share</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="20%" />
        </div>	
      </div>
    </div>
  </form>
</div>

            </React.Fragment>
         );
    }
}
 
export default dispatcherInfo;