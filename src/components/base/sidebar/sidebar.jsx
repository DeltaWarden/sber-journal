import React from 'react'
import './sidebar.css'
import { NavLink } from "react-router-dom";

const sidebar = () => {
  return (
    <div className="sidebar">
            <NavLink to="/profile">
            <button className='whobtn'>
                    <span>Профиль</span>
                </button>
                </NavLink>   
                <button className='journalbtn'>
                    <span>Журнал</span>
                </button>
                <button className='ratebtn'>
                    <span>Расписание</span>
                </button>
                <button className='chatbtn'>
                    <span>Чат</span>
                </button>
            </div>
  )
}

export default sidebar