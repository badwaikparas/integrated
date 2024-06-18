import React, { useState } from 'react';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:1605/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, username, email, password, confirmPassword, isAdmin }),
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            console.log(await response.text())
            // const data = await response.json();
            // console.log(data);
        } catch (error) {
            console.log(JSON.stringify({ name, username, email, password, isAdmin }));
            // console.log(error);
            console.error('Error:', error); // Handle error
        }
    };

    const formContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
        padding: '20px',
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px',
    };

    const labelStyle = {
        marginBottom: '10px',
        display: 'block',
        fontSize: '14px',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
        fontSize: '14px',
    };

    const checkboxLabelStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px',
    };

    const checkboxStyle = {
        marginRight: '8px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
    };

    const headingStyle = {
        marginBottom: '20px',
        textAlign: 'center',
    };

    return (
        <div style={formContainerStyle}>
            <h2 style={headingStyle}>Register</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label style={labelStyle}>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={labelStyle}>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                        style={inputStyle}
                    />
                </label>
                <label style={checkboxLabelStyle}>
                    <input
                        type="checkbox"
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        style={checkboxStyle}
                    />
                    Is Admin
                </label>
                <button type="submit" style={buttonStyle}>Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;
