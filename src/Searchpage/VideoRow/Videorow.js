import React from 'react'
import './Videorow.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Videorow({channel,title,image,views,description,time}) {
  return (
    <div className='videorow'>
        <div className="videorow__logo">
          <img src={image} alt={channel} />
        </div>

        <div className="videorow__text">
          <h3>{title}</h3>
          <p>{views} views . {time}</p>
          <p><AccountCircleIcon />  {channel}</p>
          <p>{description}</p>
          
        </div>
        

    </div>
  )
}
