import { useState } from 'react';
import '../assets/css/signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
    var navigate = useNavigate();
    const [signup,setSignup] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Signup = (e) => {
      e.preventDefault();
      console.log("Logging in with username:", signup.username);
      console.log("Password:", signup.password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setSignup((prevSignup) => ({
        ...prevSignup,
        [name]: value
      }));
    };
    
    return (
      <div className="SignupBorder">
        <div className='SignupBox'>
          <div className='SignupBoxTop'>
            <div className='SignupBoxTitle'>
              <p>MANI MAKERS</p>
            </div>
            <form className="SignupForm" onSubmit={Signup}>
              <p>Name:</p>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="input"
                placeholder="Enter Name"
                required
              />
              <p>Username:</p>
              <input
                onChange={handleChange}
                type="text"
                name="yourname"
                id="input"
                placeholder="Enter your username"
                required
              />
              <p>Email:</p>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                id="input"
                placeholder="Enter e-mail"
                required
              />
              <p>Password:</p>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Enter password"
                required
              />
              <button type="submit"><span onClick={()=>navigate("/")}>Signup</span></button>
            </form>
          </div>
          <div className='SignupBoxBottom'>
          <p>Already have an account? <span onClick={()=>navigate("/")}>Login</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;