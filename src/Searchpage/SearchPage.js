import React from 'react'
import './SearchPage.css'
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';

import Videorow from './VideoRow/Videorow';


function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneIcon />
            <h2>Filter</h2>
        </div>

        <hr />

        <ChannelRow 
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ--YojU5VvzMydwxBwuroHtFGUPi9by51TbQ&usqp=CAU"
            channel="itachi uchiha"
            verified
            sub="12M"
            noOfVideo={777}
            description="Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto."
        />

        <hr />
        
        <Videorow 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0JG8ewqqkIr5LtIseZgSZp0GyPY-P_gVbQ&usqp=CAU"
        title="React Hook is crazy"
        channel="React Hook"
        views="4.6M"
        description="React hook is used to change the state of the varaible.Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes."
        time="1 month ago"
        />

      <Videorow 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AF15-X8EfLxYK0oGeCiMEwx1kWOvrrqv9g&usqp=CAU"
              title="Learn React router v6"
              channel="React Router"
              views="1M"
              description="React Router is a JavaScript framework that lets us handle client and server-side routing in React applications. It enables the creation of single-page web or mobile apps that allow navigating without refreshing the page"
              time="7 month ago"
              />

        <Videorow 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-nNCbLeRxdAHWsNOW1oZsrymPQMeiZyHZPA&usqp=CAU"
              title="What is Redux used for React?"
              channel="React Redux"
              views="8M"
              description="React uses Redux for building the user interface. It was first introduced by Dan Abramov and Andrew Clark in 2015. React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data."
              time="6 month ago"
              />  

          <Videorow 
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0JG8ewqqkIr5LtIseZgSZp0GyPY-P_gVbQ&usqp=CAU"
              title="React Hook is crazy"
              channel="React Hook"
              views="4.6M"
              description="React hook is used to change the state of the varaible.Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes."
              time="1 month ago"
              />     

    </div>
  )
}

export default SearchPage