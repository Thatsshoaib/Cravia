import React from 'react';
import '../component/Styles/login.css'; // Import the CSS file
export default function SignInForm() {
  return (
    <div className="sign-in-container">
      <div className="sign-in-card">
        <h2 className="sign-in-title">Log In</h2>
        <form>
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="rememberMe" />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember Me
            </label>
          </div>

          {/* Sign In Button */}
          <button type="submit" className="btn btn-primary sign-in-button">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="divider">or</div>

        {/* Social Sign-In Options */}
        <div className="social-buttons">
          <button className="btn btn-outline-light social-button">
            <i className="fa-brands fa-google"></i> Google
          </button>
          <button className="btn btn-outline-light social-button">
            <i className="fa-brands fa-facebook-f"></i> Facebook
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-center">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password?
          </a>
        </div>

        {/* Sign Up Link */}
        <div className="text-center">
          <span>Don't have an account? </span>
          <a href="/sign-up" className="sign-up-link">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}
