import React from 'react';
import { PRIVATE_ROUTES } from '../../config';
import { useNavigate } from 'react-router-dom';


const  addDocumentForm = () => {
  const navigate = useNavigate();
  
  return <div><div className="d-flex flex-column-fluid">
   
    {/*begin::Container*/}
    <div className=" container ">
      {/*begin::Dashboard*/}
      {/*begin::Row*/}
      <div className="add-edit-role dash-body create_main_categories">
        <div className="row">
          <div className="col-md-5">
            <div className="form-group">
              <label>Language*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="English">English</option>
                <option value="Urdu">Urdu</option>
                <option value="French">French</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="Document Name*" />
            </div>
            <div className="form-group">
              <label>Country*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Pakistan">Pakistan</option>
                <option value="Canada">Canada</option>
                <option value="USA">USA</option>
              </select>
            </div>
            <div className="form-group">
              <label>Expire On Date*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="03-10-2021">03-10-2021</option>
                <option value="03-01-2021">03-01-2021</option>
                <option value="03-02-2021">03-02-2021</option>
              </select>
            </div>
          </div>
          <div className="col-md-5">
            <div className="form-group">
              <label>Document For*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Admission">Admission</option>
                <option value="Instructions">Instructions</option>
              </select>
            </div>
            <div className="form-group">
              <input type="text" name="document" className="form-control" placeholder="Display Name" />
            </div>
            <div className="form-group">
              <label>State*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="form-group">
              <label>Valid Date*</label>
              <select className="form-control" id="exampleFormControlSelect1">
                <option value="03-10-2021">03-10-2021</option>
                <option value="03-01-2021">03-01-2021</option>
                <option value="03-02-2021">03-02-2021</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-10 add-document-btn">
            <button type="button" className="submit-btn"
              onClick={()=> navigate(PRIVATE_ROUTES.documentManage.documents.path)}
            >SUBMIT</button>
          </div>
        </div>
      </div>   		
    </div>
  </div>
  </div>;
};
export default addDocumentForm;
