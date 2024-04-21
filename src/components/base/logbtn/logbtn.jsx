import React from 'react'
import './logbtn.css'
import { useKeycloak } from "@react-keycloak/web";

const logbtn = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <button className='button' onClick={keycloak.loginRequired}>
      <span>Войти</span>
    </button>
  )
}

export default logbtn