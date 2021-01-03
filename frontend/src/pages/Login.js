import React, { useState } from 'react';

import api from '../services/api';
import logo from '../assets/logo.svg';
import './Login.css';

function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });
        
        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return(
        <div className="login-container"> 
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="tindev"/>
                <input 
                placeholder="Digite seu usuario do Github"
                value={username}
                onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Login;