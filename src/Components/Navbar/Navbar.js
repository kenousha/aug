import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library

export const Navbar = () => {
  return (
    <nav>
        <Link to="../Landing_Page/LandingPage.html">
    <div className="logo">
      StayHealthy
      <svg
        height="26"
        style={{
          fill: '#3685fb'
        }}
        viewBox="0 0 1000 1000"
        width="26"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>
          Doctor With Stethoscope SVG icon
        </title>
        <g>
          <g>
            <path d="M499.8,10c91.7,0,166,74.3,166,166c0,91.7-74.3,166-166,166c-91.7,0-166-74.3-166-166C333.8,84.3,408.1,10,499.8,10z" />
            <path d="M499.8,522.8c71.2,0,129.1-58.7,129.1-129.1H370.6C370.6,464.1,428.6,522.8,499.8,522.8z" />
            <path d="M693.2,395c-0.7,94.9-70.3,173.7-160.8,188.9v155.9c0,80.3-60.7,150.8-140.8,155.3c-83,4.7-152.7-58.9-157.6-139.7c-22-12.8-35.6-38.5-30.3-66.7c4.7-25.1,25.5-45.6,50.8-49.9c39.7-6.7,74.1,23.7,74.1,62.1c0,23-12.3,43-30.7,54.1c4.7,45.4,45.1,80.4,92.6,76c44.6-4,77.2-44.4,77.2-89.2v-158c-90.5-15.2-160.1-94-160.8-188.9c-89.4,11.5-158.2,87.9-158.2,180.5V910c0,44.2,35.8,80,80,80h542.6c44.2,0,80.1-35.8,80.1-80V575.5C851.4,483,782.6,406.6,693.2,395z" />
          </g>
        </g>
      </svg>
      <span
        style={{
          fontFamily: 'Poppins'
        }}
      >
        .
      </span>
    </div>
    </Link>
                <ul className="menu">
                        <li className="item"><Link to="../LandingPage">Home</Link></li>
                        <li className="item"><Link className="topmenu" to="#">Appointments</Link></li>
                        <li className="item"><Link className="topmenu" to="#">Health Blog</Link></li>
                        <li className="item"><Link className="topmenu" to="#">Reviews</Link></li>
                        <li className="item"><Link to="../SignUp"><button className="btn">Sign Up</button></Link></li>
                        <li className="item"><Link to="../Login"><button className="btn">Login</button></Link></li>
                </ul>
    </nav>
);
};
export default Navbar;