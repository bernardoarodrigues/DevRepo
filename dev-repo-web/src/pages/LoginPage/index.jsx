import React, { useState, useContext } from "react"

import { AuthContext } from "../../contexts/auth"

import "./styles.css"

const LoginPage = () => {
    const { login } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => login(email, password)

    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <div className="form">
                <div className="field">
                    <label htmlFor="email">Email:</label>
                    <input 
                      type="email" 
                      name="email" 
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="field">
                    <label htmlFor="password">Senha:</label>
                    <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="actions">
                    <button onClick={handleLogin}>Entrar</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage