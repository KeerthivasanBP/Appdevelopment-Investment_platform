import { useState } from 'react';
import '../assets/css/login.css';
import { useNavigate } from 'react-router-dom';
function Login() {
   var navigate = useNavigate();
    const [login,setLogin] = useState(
      {
        username : "",
        password : ""
      }
    )
    const Login = (e) => {
      e.preventDefault();
      console.log("Logging in with email:", login.username);
      console.log("Password:", login.password);
    };
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setLogin((prevLogin) => ({
        ...prevLogin,
        [name]: value
      }));
    };
    return (
      <div className="LoginBorder">
        <div className='LoginBox'>
          <div className='LoginBoxTop'>
            <div className='LoginBoxTitle'>
              <p>MANI MAKERS</p>
            </div>
            <form className="LoginForm" onSubmit={Login}>
              <div className='username'><p>Username:</p></div>
              <input
                onChange={handleChange}
                type="text"
                name="username"
                id="input"
                placeholder="Enter username"
                required
              />
              <div className='username'><p>Password:</p></div>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                id="input"
                placeholder="Enter password"
                required
              />
              <button type="Login">Login</button>
            </form>
          </div>
          <div className='LoginBoxBottom'>
          <p>Dont' have an account? <span onClick={()=>navigate("/signup")}>Sign up</span></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Login;