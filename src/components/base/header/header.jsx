import React from 'react'
import './header.css'
import Logo from '../../../assets/loho.jpg'
import Logbtn from '../logbtn/logbtn'
import { NavLink } from "react-router-dom";


const header = () => {
  return (
    <div className="container">
      <nav>
        <NavLink to="/"><img className='logo' src={Logo} alt="" /></NavLink>
        <NavLink to="/"><p className='journal'>дневник</p></NavLink>
        <ul>
          <li><NavLink to="*">Уведомления</NavLink></li>
          <li><NavLink to="/profile">Личный кабинет</NavLink></li>
          <li><NavLink to="/">Главная</NavLink></li>
        </ul>
        <Logbtn />
      </nav>
    </div>
  )
}

export default header