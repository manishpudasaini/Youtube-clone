import React from 'react'
import './SidebarComponent.css'


export default function SidebarComponent({selected, Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
        <span className='sidebar__icon'>{Icon}</span>
        <h2 className='sidebar__title'>{title}</h2>
    </div>
  )
}
