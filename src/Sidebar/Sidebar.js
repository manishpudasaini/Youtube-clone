import React from 'react'
import './Sidebar.css'

import SidebarComponent from './SidebarComponent'

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';

import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarComponent selected Icon={<HomeIcon />} title="Home"/>
        <SidebarComponent Icon={<WhatshotIcon />} title="Trending"/>
        <SidebarComponent Icon={<SubscriptionsIcon />} title="Subscription"/>
        <hr />

        <SidebarComponent Icon={<VideoLibraryIcon />} title="Library"/>
        <SidebarComponent Icon={<HistoryIcon />} title="History"/>
        <SidebarComponent Icon={<OndemandVideoIcon/>} title="Your Video"/>
        <SidebarComponent Icon={<WatchLaterIcon />} title="Watch Later"/>
        <SidebarComponent Icon={<ThumbUpOffAltIcon/>} title="Liked Videos"/>
        <SidebarComponent Icon={<ExpandMoreIcon />} title="Show more"/>
        <hr />
        
    </div>
  )
}
