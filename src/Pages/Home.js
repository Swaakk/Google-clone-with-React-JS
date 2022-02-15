import React from 'react'
import {Link} from "react-router-dom"
import "../Pages/Home.css"
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import google from "../Assests/google.png"
import Search from '../Components/Search';


function Home() {
  return (
    <div className='home'>
      <div className="home_header">
        <div className='home_header_left'>
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
      </div>
      <div className="home_body">
        <div className="home_header_right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
            <AppsIcon/>
            <AccountCircleIcon className='ml-4'/>
          </div>
        </div> 
      </div>
      <div className='flex justify-center'>
          <img className='w-64 h-22 relative top-28' src={google} alt="logo" />
          <div className='home_input'>
            
          </div>
      </div>
      <Search/>
    </div>
  )
}

export default Home