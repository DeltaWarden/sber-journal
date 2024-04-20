import { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Keycloak from 'keycloak-js';



export default function homePage() {
    const keycloak = new Keycloak({
        url: 'http://localhost:8080',
        realm: 'hackathon',
        clientId: 'journal'
    });

    keycloak.init({ onLoad: 'login-required' }).success((authenticated) => {
    if (authenticated) {
        console.log("Authenticated");
    } else {
        console.log("Not authenticated");
    }
    });

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