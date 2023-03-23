import React from 'react'
import './ChannelRow.css'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ChannelRow({image,channel,verified,sub,noOfVideo,description}) {

  console.log(image);
  return (
    <div className='channelRow'>
        <img src={image} alt="" srcset="" className='userIcon' />
        {/* <AccountCircleIcon className='channelRow__logo' alt={channel} src={image}/> */}
        <div className="channelrow__text">
            <h4>{channel} {verified && <CheckCircleOutlineIcon /> } </h4>
            <p>{sub} Subscribes . {noOfVideo} Videos</p>
            <p>{description}</p>
        </div>
    </div>
  )
}
