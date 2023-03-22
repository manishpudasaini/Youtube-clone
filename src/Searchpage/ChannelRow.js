import React from 'react'
import './ChannelRow.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ChannelRow({image,channel,verified,sub,noOfVideo,description}) {
  return (
    <div className='channelRow'>
        <AccountCircleIcon className='channelRow__logo' alt={channel} src={image}/>
        <div className="channelrow__text">
            <h4>{channel} {verified && <CheckCircleOutlineIcon /> } </h4>
            <p>{sub} Subscribes . {noOfVideo} Videos</p>
            <p>{description}</p>


        </div>
    </div>
  )
}
