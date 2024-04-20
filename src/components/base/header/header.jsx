import React from 'react'
import './header.css'
import Logo from '../../../assets/loho.jpg'
import Logbtn from '../logbtn/logbtn'

const header = () => {
  return (
    <div className="container">
      <nav>
        <a href="/"><img className='logo' src={Logo} alt="" /></a>
        <a href="/"><p className='journal'>дневник</p></a>
        <ul>
          <li><a href="*">Новости</a></li>
          <li><a href="*">Личный кабинет</a></li>
          <li><a href="/">Главная</a></li>
        </ul>
        <Logbtn />
      </nav>
    </div>
  )
}

export default header