"use client";
import { Fragment } from "react";
const SideBar = () => {
  const toggleSidebar = () => {
    console.log("hi");
    document.querySelector("body").classList.remove("side-content-visible");
  };
  return (
    <Fragment>
      {/*Form Back Drop*/}
      <div className="form-back-drop" onClick={() => toggleSidebar()} />
      {/* Hidden Sidebar */}
      <section className="hidden-bar">
        <div className="inner-box text-center">
          <div className="cross-icon" onClick={() => toggleSidebar()}>
            <span className="fa fa-times" />
          </div>
          <div className="title">
            <h4>Get In Touch</h4>
          </div>
          {/*Appointment Form*/}
          <div className="appointment-form">
            <form
              method="post"
              onSubmit={(e) => {
                e.preventDefault();
                toggleSidebar();
              }}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="text"
                  defaultValue=""
                  placeholder="Name"
                  required=""
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  placeholder="Email Address"
                  required=""
                />
              </div>
              <div className="form-group">
                <textarea placeholder="Message" rows={5} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="theme-btn">
                  Submit now
                </button>
              </div>
            </form>
          </div>
          {/*Social Icons*/}
          <div className="social-style-one">
          <a href="https://github.com/mohdashiq18" target="_blank">
                  <i className="fab fa-github" />
                  </a>
                  <a href="https://www.linkedin.com/in/ashique18/" target="_blank">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://x.com/moashiq18" target="_blank">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.instagram.com/ashiq_.ali_?igsh=ZTh0YmJ1dXZpODZj" target="_blank">
                    <i className="fab fa-instagram" />
                  </a>
          </div>
        </div>
      </section>
      {/*End Hidden Sidebar */}
    </Fragment>
  );
};
export default SideBar;
