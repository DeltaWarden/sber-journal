import { useState } from 'react'
import Keycloak from 'keycloak-js';
import './homePage.css'



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
        <div className="wrapper">

        </div>
    )
}