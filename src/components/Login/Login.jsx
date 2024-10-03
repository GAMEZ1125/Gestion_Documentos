import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Form, FormGroup, Label } from 'reactstrap';
import './Login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsVisible(true); // Para que el formulario "aparezca" con una animación al montarse
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin@admin.com' && password === 'admin') {
            navigate('/home');
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className={`d-flex justify-content-center align-items-center min-vh-100 ${isVisible ? 'fade-in' : ''}`}>
            <div className="login-form bg-light p-5 rounded shadow animated-form">
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="email" 
                            name="email" 
                            id="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            placeholder="Introduce tu email"
                            className="mb-3 transition-input"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Contraseña</Label>
                        <Input 
                            type="password" 
                            name="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Introduce tu contraseña"
                            className="transition-input"
                        />
                    </FormGroup>
                    <Button color="primary" type="submit" block className="mt-4 transition-btn">Iniciar Sesión</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
