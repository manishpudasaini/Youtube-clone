import React, { useState } from 'react'
import './Header.css'

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    

    const handleInput= (e) => {
        if(e.key === "Enter") {
            console.log("Enter pressed");
            navigate(`/search/${inputSearch}`);
        }
    };

  const[inputSearch,setInputSearch] = useState("");
  return (
    <div className='header'>
        <div className="header__left">

            {/* youtube menu button */}
            <MenuIcon />


            <Link to={'/'}>

                {/* youtube logo */}
                <img 
                    className='header__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" srcset="" />
                
            </Link>
           

        </div>

        <div className="header__middle">

             {/* search in youtube */}
            <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} type="text" placeholder='Search' onKeyDown={handleInput} />

            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className='header__searchButton'/>
            </Link>
            
            <MicIcon  className='header__micButton'/>

        </div>
        
        <div className="header__right">
            <VideoCallIcon className='header__rightIcon'/>
            <NotificationsIcon className='header__rightIcon'/>
            <AccountCircleIcon className='header__rightIcon'/>
        </div>
        
        





    </div>
  )
}

export default Header