import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Keycloak from 'keycloak-js';



export default function homePage() {
    // const keycloak = Keycloak({
    //     url: '',
    //     realm: 'ваш_реалм',
    //     clientId: 'ваш_client_id'
    //   });
    const [age, setAge] = useState('');

    const handleClick = (event) => {
      
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <h1>Это главная страница</h1>
            <Button variant="contained" onClick={handleClick}>Войти</Button>
        </Box>
    )
}