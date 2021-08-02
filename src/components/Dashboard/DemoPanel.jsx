import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div id="kt_demo_panel" className="offcanvas offcanvas-right p-10">
      {/* begin::Header */}
      <div className="offcanvas-header d-flex align-items-center justify-content-between pb-7">
        <h4 className="font-weight-bold m-0">Select A Demo</h4>
        <Link
          to="#"
          className="btn btn-xs btn-icon btn-light btn-hover-primary"
          id="kt_demo_panel_close"
        >
          <i className="ki ki-close icon-xs text-muted" />
        </Link>
      </div>
      {/* end::Header */}
      {/* begin::Content */}
      <div className="offcanvas-content">
        {/* begin::Wrapper */}
        <div className="offcanvas-wrapper mb-5 scroll-pull">
          <h5 className="font-weight-bold mb-4 text-center">Demo 1</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo offcanvas-demo-active">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo1.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo1/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo1/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 2</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo2.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo2/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo2/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 3</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo3.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo3/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo3/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 4</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo4.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo4/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo4/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 5</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo5.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo5/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo5/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 6</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo6.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo6/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo6/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 7</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo7.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo7/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo7/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 8</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo8.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo8/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo8/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 9</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo9.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo9/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo9/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 10</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo10.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo10/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo10/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 11</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo11.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo11/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo11/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 12</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo12.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo12/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo12/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 13</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo13.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="https://keenthemes.com/metronic/preview/demo13/index.html"
                className="btn font-weight-bold btn-primary btn-shadow "
                target="_blank"
              >
                Default
              </Link>
              <Link
                to="https://keenthemes.com/metronic/preview/demo13/rtl/index.html"
                className="btn btn-light btn-shadow"
                target="_blank"
              >
                RTL Version
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 14</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo14.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 15</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo15.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 16</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo16.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 17</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo17.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 18</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo18.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 19</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo19.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 20</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo20.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 21</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo21.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 22</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo22.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 23</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo23.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 24</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo24.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 25</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo25.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 26</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo26.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 27</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo27.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 28</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo28.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 29</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo29.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
          <h5 className="font-weight-bold mb-4 text-center">Demo 30</h5>
          <div className="overlay rounded-lg mb-8 offcanvas-demo ">
            <div className="overlay-wrapper rounded-lg">
              <img
                src="assets//../../../../../../doc/assets/img/demos/demo30.png"
                alt=""
                className="w-100"
              />
            </div>
            <div className="overlay-layer">
              <Link
                to="#"
                className="btn font-weight-bold btn-primary btn-shadow disabled"
              >
                Coming soon
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end::Content */}
    </div>
  );
};
