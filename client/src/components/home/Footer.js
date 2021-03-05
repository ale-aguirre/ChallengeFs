import React from "react";
import  {useDispatch} from "react-redux"; 
import {logoutUser} from '../../Redux/user'

const Footer = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer-container">
            <div className="footer-center">
              <h3>INFORMATION</h3>
              <a href="/">Contact</a>
            </div>
            <div className="footer-center">
              <h3>My Account</h3>
              <a href="/">Home</a>
              <a  onClick={() => dispatch(logoutUser())} href="/">Logout</a>
            </div>
            <div className="footer-center">
              <h3>Contact</h3>
              <div>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Alexis Remote
              </div>
              <div>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                aguirrealexis.cba@gmail.com
              </div>
              <div>
                <span>
                  <i className="fas fa-phone"></i>
                </span>
                +54 35121618905
              </div>
              <div>
                <span>
                  <i className="far fa-paper-plane"></i>
                </span>
                Córdoba, Argentina
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
