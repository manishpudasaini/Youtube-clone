import React from 'react'
import './VideoCard.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='videocard'>
      <img className='videocard__img' src={image} alt="" />
      <div className="videoCard__info">
        <AccountCircleIcon className="video__avatar" 
        alt={channel}
        src={channelImage}
        />

        <div className="video__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>{views} . {timestamp}</p>
        </div>

      </div>
    </div>
  )
}
