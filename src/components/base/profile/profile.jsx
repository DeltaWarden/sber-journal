import React from 'react'
import Sidebar from '../sidebar/sidebar'
import './profile.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import avatar from '../../../assets/avatar.png'

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import { useKeycloak } from '@react-keycloak/web'

const main = () => {
  const { keycloak, initialized } = useKeycloak()
  
  return (
    
    <div className="wrapper">
      <Sidebar />
        <div className="profile">
          <div className="avatar" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', placeItems: 'center', gap: 10}}>
          <Button
  component="label"
  role={undefined}
  variant="contained"
  tabIndex={-1}
  startIcon={<CloudUploadIcon />}
>
  Загрузить фото

</Button>
<Avatar alt="Аватар" sx={{width: 100, height: 100}} src="/static/images/avatar/1.jpg" />
          <span className='text-l'>ФИО: Иванов Иван Иванович</span>
          <span className='text-l'>Родился: 01.01.2001
          <div className="infopeople"></div>
          </span>
          </div>
          <div className="info">
          </div>
          <div className="info-bottom gray">
            <h1>Телефон</h1>
            <span className="number gray">+7 (999) 123-45-67</span>
            <button className='numberbtn'>
            <span>Привязать номер</span>
          </button>
          </div>
        </div>
        <div>
      <div>{
        keycloak.authenticated ? null : ''}
      </div>

      {!!keycloak.authenticated && (
        <button className="logout" type="button" onClick={keycloak.logout}>
          <span className="gray"></span>
        </button>
      )}
    </div>
    </div>
  )
}

export default main