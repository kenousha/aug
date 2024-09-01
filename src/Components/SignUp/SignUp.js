import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom"; // Importing the Link component from react-router-dom library


export const SignUp = () => {
  return (
<div className="container">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div className="already-member">Already a member? 
            <Link to="../Login/Login.html"><span> Login</span></Link>
            </div>
        <form>

        <div className="form-group">
            <label for="role">Role</label>
            <select required id="role" name="role">
            <option value="" aria-describedby="Select your role">-Select your role-</option>
            <option value="dr" aria-describedby="Doctor">Doctor</option>
            <option value="patient" aria-describedby="patient">Patient</option>
            </select>
        </div>

        <div className="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="Name input box" />
        </div>

        <div className="form-group">
            <label for="Email">Email</label>
            <input type="Email" name="Email" id="Email" required className="form-control" placeholder="Enter your email" aria-describedby="Email input box" />
        </div>

        <div className="form-group">
            <label for="phone">Phone</label>
            <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" aria-describedby="Phone number input box" />
        </div>

        <div className="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" />
        </div>
        <div className="btn-group">
            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
        </div>
        </form>
    </div>
);
};
export default SignUp;