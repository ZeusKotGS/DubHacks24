import React from 'react';
import './SideBar.css';
import {SideBarData} from './SideBarData';


// renders sidebar content by looping through it
const SideBar = () => {
    return (
        <div className = "Sidebar">
            <ul className = "SidebarList">
                {SideBarData.map((val, key) => {
                    return (
                        <li key={key} className="NavTab" onClick ={() => {window.location.pathname = val.link}} >
                            <div>| {val.title}</div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
} 

export default SideBar