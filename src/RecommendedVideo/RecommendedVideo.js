import React from 'react'
import './RecommendedVideo.css'
import VideoCard from './VideoCard'

export default function RecommendedVideo() {
  return (
    <div className='recommendedvideo'>
        <h2>Recommended</h2>
        <div className="recommendedVideo__videos">
            <VideoCard 
            title="Cristiano ronaldo greatest goals at Real madrid"
            channel="Football Greatest"
            views="5.6M views"
            timestamp="1 month ago"
            image="https://i.ytimg.com/vi/ASE0EEZylRU/maxresdefault.jpg"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="React JS - React Tutorial for Beginners"
            channel="Programming with me"
            views="897K views"
            timestamp="6 month ago"
            image="https://www.freecodecamp.org/news/content/images/2021/02/freeCodeCamp-Cover-2.png"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="Filmmaking & Cinematography"
            channel="Master class"
            views="3M views"
            timestamp="3 weeks ago"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxXXpCVIypoTaeHgTztpR15E3tisahMpnbww&usqp=CAU"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="FPL DOUBLE GAMEWEEK 27 PREVIEW"
            channel="FPL with ezio"
            views="1.6M views"
            timestamp="4 days ago"
            image="https://cdn.fantasyfootballscout.co.uk/wp-content/uploads/2022/06/LiveFPL-draft-800x400.png"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="The Local Train - Aaftaab (Official Audio)"
            channel="Yhe local train"
            views="11M views"
            timestamp="5 years ago"
            image="https://i.ytimg.com/vi/U77d9912lrw/maxresdefault.jpg"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="Real Madrid - THANK YOU, CRISTIANO RONALDO"
            channel="Real Madrid "
            views="56M views"
            timestamp="4 years ago"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVog40FgpztQ1K2ePqLfYGa_2-WUSEekFpFg&usqp=CAU"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="Cristiano Ronaldo is Mesmerizing to Watch Play Football."
            channel="H7GHL7GHTS"
            views="9M views"
            timestamp="8 month ago"
            image="data:image/jpeg;base64,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"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />

            <VideoCard 
            title="Real Madrid 9-0 barcelona | Highlights"
            channel="Football highlights"
            views="8M views"
            timestamp="11 hours ago"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2atNGh0UqtIKGB_AIxUW2X_I_vi0Li8yIUA&usqp=CAU"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />
            <VideoCard 
            title="How to become a Java Developer"
            channel="Java world"
            views="545K views"
            timestamp="9 month ago"
            image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220224234349/Java-Developer-Learning-Path-A-Complete-Roadmap.png"
            channelImage="https://pixabay.com/photos/web-network-link-blue-network-2925929/"
            />

        </div>
    </div>
  )
}
