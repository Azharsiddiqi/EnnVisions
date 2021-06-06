import React from 'react';

export default () => { 
    return (
        <React.Fragment>
        <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
        {/*begin::Subheader*/}
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
            {/*end::Subheader*/}
            {/*begin::Entry*/}
            <div className="d-flex flex-column-fluid">
                {/*begin::Container*/}
                <div className=" container ">
                    {/*begin::Dashboard*/}
                    {/*begin::Row*/}
                    <div className="row">
                    <div className="dash-body page-15-container">
                        <div className="top-btn">
                            <button type="button" className="btn delete-btn">DELETE</button>
                            <button type="button" className="btn duplicate-btn">DUPLICATE</button>
                            <button type="button" className="btn save-btn">SAVE</button>
                        </div>
                        <div className="top-add">
                            <h1>ITEMS NAME</h1>
                            <div className="add-note">
                                <img src="assets/images/ic_tab_note.svg" alt="" />
                                <span>ADD NOTE</span>
                            </div>
                        </div>
                        <div className="pg-15-menu-content">
                            <span className="photo">Photo</span>
                            <span className="on-admin">ONLY ADMIN</span>
                            <div className="img-preview">
                                <div className="image-upload">
                                <label htmlFor="file-input">
                                    <div className="placeholder-img">
                                        <div>
                                            <span className="drop-img">Drop image here to Upload</span>
                                            <br /> <span className="drop-img">or</span>
                                            <br />
                                            <span className="browse">Browse File</span>
                                        </div>
                                    </div>
                                </label>
                                <input id="file-input" type="file" />
                                </div>
                                <div className="img-p-text">
                                <p className="ph-tos">Photos help customers decide what to order and can increase Sales</p>
                                <p className="see-full">See full photo guidelines</p>
                                <p className="file-require">File requirement: JPG, PNG, or GIF up to 10MB. Minimum pixels required: 550 for width, 440 for height.</p>
                                <div className="add-down-remove-btn">
                                    <button className="btn add-photo" type="button">ADD PHOTO</button>
                                    <button className="btn down-btn" type="button">DOWNLOAD</button>
                                    <button className="btn remove-btn" type="button">REMOVE</button>
                                </div>
                                </div>
                            </div>
                            <div className="breakfast">
                                <img src="assets/images/ic_tab_delete_all.svg" alt=""/>
                                <span className="bf-favourite">Breakfast
                                <img src="assets/images/ic_tab_remove.svg" alt=""/>
                                </span>
                                <span className="add-category">Add a tag</span>
                                <img src="assets/images/ic_red_search.svg" className="red-search" alt=""/>
                            </div>
                            <p className="listed">Listed in following Tag: Breakfast</p>
                            <div className="breakfast">
                                <img src="assets/images/ic_tab_delete_all.svg" alt=""/>
                                <span className="bf-favourite">ImproveCanada
                                <img src="assets/images/ic_tab_remove.svg" alt=""/>
                                </span>
                                <span className="bf-favourite">RioCan Marketplace
                                <img src="assets/images/ic_tab_remove.svg" alt=""/>
                                </span>
                                <span className="add-category">Add a Category</span>
                            </div>
                            <p className="listed ml-0">Listed in following Category: Breakfast</p>
                            <div className="desc-box">
                                <p className="desc-t">Description <span className="opt-text">(optional)</span></p>
                                <textarea rowSpan={5} placeholder="Buckwheat pancakes with maples syrup" defaultValue={""} />
                            </div>
                            <p className="listed ml-0">Sell item on its own?</p>
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                <input type="checkbox" name="Checkboxes3_1" />
                                <span />
                                Yes
                                </label>
                                <label className="checkbox checkbox-lg">
                                <input type="checkbox" name="Checkboxes3_1" />
                                <span />
                                No
                                </label>
                                </div>
                            </div>
                            <p className="listed ml-0">Customise item</p>
                            <p className="modifier-text">Modifier groups allow customers to use toppings. sides and more to customize items</p>
                            <button className="btn down-btn mr-1" type="button">ADD MODIFIER GROUP</button>
                            <button className="btn down-btn mr-1" type="button">COPY MODIFIER GROUP FROM ANOTHER ITEM</button>
                            <button className="btn down-btn" type="button">CLEAR</button>
                            <div className="breakfast">
                                <img src="assets/images/ic_tab_delete_all.svg" alt=""/>
                                <span className="bf-favourite">Breakfast
                                <img src="assets/images/ic_tab_remove.svg" alt=""/>
                                </span>
                                <img src="assets/images/ic_red_search.svg" className="red-search" alt=""/>
                            </div>
                            <p className="listed ml-0">Listed in following modifier group: Breakfast</p>
                            <div className="d-price-section">
                                <div className="default-price">
                                <p>Default Price</p>
                                <span className="dollar">$</span>
                                <input type="text" className="input-type-price" placeholder="$8.95 (Canadian)" />
                                </div>
                                <div className="default-price">
                                <p>Tax Rate</p>
                                <input type="text" className="tax-input" placeholder={20} />
                                <span className="tax-percentage">%</span>
                                </div>
                            </div>
                            <div className="switch-section">
                                <div className="s-s-one">
                                <p>Add Menu Specific Pricing</p>
                                <label className="item-out">Item Out of stock?</label>
                                <span className="switch red-switch">
                                <label>
                                <input type="checkbox" defaultChecked="checked" name="select" />
                                <span />
                                </label>
                                </span>
                                </div>
                                <div className="s-s-one">
                                <p>Add Disconnected Price</p>
                                </div>
                            </div>
                            <p className="listed ml-0 mt-5">Alcohol Settings</p>
                            <div className="form-group">
                                <div className="with-shade checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                <input type="checkbox" name="Checkboxes3_1" />
                                <span />
                                Yes
                                </label>
                                <label className="checkbox checkbox-lg">
                                <input type="checkbox" name="Checkboxes3_1" />
                                <span />
                                No
                                </label>
                                </div>
                            </div>
                            <label className="plain-check checkbox checkbox-lg">
                            <input type="checkbox" name="Checkboxes3_1" />
                            <span />
                            This item can legally be Considered a meal
                            </label>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
}