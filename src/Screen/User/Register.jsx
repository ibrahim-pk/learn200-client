import { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-neutral py-10  text-neutral-content py-20">
      <div className="login-container shadow-2xl max-w-screen-lg  mx-auto">
        <div className="card bg-neutral px-3 text-neutral-content">
          <h2>Login</h2>
          <div className="flex justify-center my-5 gap-10">
            <i className="fab fa-4x fa-github-square fa-spin"></i>
            <i className="fab fa-4x fa-google fa-spin"></i>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="email"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Login
            </button>
            <div className="text-center my-4">
              <h5>
                Already Registed?
                <span className="text-blue-700 mx-1">
                  <Link to="/user/login">Login</Link>
                </span>
              </h5>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
