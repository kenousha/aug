import React from "react";
import "./Login.css";

export const Login = () => {
  return (
<div className="container">
            <div className="login-text">
                <h1>Login</h1>
            </div>
            <div className="new-member">Are you a new member?
            <Link to="../Sign_Up/Sign_Up.html"><span>Sign Up Here</span></Link></div>
        <form>
            <div className="form-group">
                <label for="Email">Email</label>
                <input type="Email" name="Email" id="Email" className="form-control" placeholder="Enter your email" aria-describedby="Email input box" required/>
            </div>

            <div className="form-group">
                <label for="password">Password<span>Forgot Password?</span></label>
                <input type="password" name="password" id="password" className="form-control" placeholder="Enter your password" aria-describedby="Password inbput box" required/>
            </div>

            <div className="btn-group">
                <button type="submit" className="btn submit-btn mb-2 mr-1 waves-effect waves-light">Submit</button>
                <button type="reset" className="btn reset-btn">Reset</button>
            </div>
            
        </form>
    </div>
);
};
export default Login;