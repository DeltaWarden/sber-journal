import React, { useEffect } from 'react'
import './NotFoundPage.css'

const NotFoundPage = () => {
  
  useEffect(() => {
    document.title = '4NF';
    }, 
  []);

  return (
    <div className='text'>Ой ой... Страница не найдена;<code>(</code></div>
  )
}

export default NotFoundPage