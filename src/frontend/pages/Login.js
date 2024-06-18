// import React, { useState } from 'react';

// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://localhost:1605/auth/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ username, password }),
//             });

//             if (!response.ok) {
//                 throw new Error('Login failed');
//             }

//             const data = await response.json();
//             console.log(data); // Handle success response, e.g., store token in state or localStorage
//         } catch (error) {
//             console.error('Error:', error.message); // Handle error
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Username:
//                     <input
//                         type="text"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                         autoComplete='true'
//                     />
//                 </label>
//                 <br />
//                 <label>
//                     Password:
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                         autoComplete='true'
//                     />
//                 </label>
//                 <br />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:1605/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // const data = await response.json();
            const data = await response.text();
            console.log(data); // Handle success response, e.g., store token in state or localStorage
        } catch (error) {
            console.error('Error:', error.message); // Handle error
        }
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

    const labelStyle = {
        marginBottom: '10px',
        width: '100%',
        textAlign: 'left',
    };

    const inputStyle = {
        padding: '10px',
        marginBottom: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '100%',
        boxSizing: 'border-box',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const headingStyle = {
        marginBottom: '20px',
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Login</h2>
            <form onSubmit={handleSubmit} style={formStyle}>
                <label style={labelStyle}>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="true"
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
                        autoComplete="true"
                        style={inputStyle}
                    />
                </label>
                <button type="submit" style={buttonStyle}>Login</button>
            </form>
        </div>
    );
};

export default Login;
