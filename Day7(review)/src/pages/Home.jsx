import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../Components/Layout';
import "../assets/css/Home.css";
import NavbarHome from '../Components/NavbarHome';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
    <div>
        <NavbarHome/>
    </div>
  
  <div className="MainContainer">
      <div className="Left">
        <div className="MainTitle">
           <h4>Learn about<br></br>investing and<br></br> Groww</h4>
        </div>
        <div className='SubContent'>
        <h4><br></br>Investment never goes out of fashion.</h4>
        </div>
        <div className='Start'>
          <button class="button-54" role="button"  onClick={()=>navigate("/Login")}>SIGN UP</button>
        </div>
      </div>
      <div className='Right'>
        <br></br>
        <br></br>
        <img src="https://ik.imagekit.io/mtbv505oky/pexels-anna-nekrashevich-6801874.jpg?updatedAt=1695289126565" width="650" height="600"></img>
      </div>
      
  </div>
  </>
  )
}

export default Home;