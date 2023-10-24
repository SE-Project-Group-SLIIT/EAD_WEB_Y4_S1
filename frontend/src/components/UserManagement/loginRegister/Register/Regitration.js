import React, { useState } from 'react';
import { signup } from '../../../../services/util/userManagement/index'
import Swal from 'sweetalert2';


const RegisterForm = ({ setClickedSignIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [nic, setNIC] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNICChange = (event) => {
        setNIC(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const validateUsername = () => {
        if (!username) {
            setError('Username is required.');
            return false;
        }
        setError('');
        return true;
    };

    const validateEmail = () => {
        if (!email) {
            setError('Email is required.');
            return false;
        }

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
        if (!emailRegex.test(email)) {
            setError('Invalid email format.');
            return false;
        }

        setError('');
        return true;
    };

    const validateNIC = () => {
        if (!nic) {
            setError('NIC is required.');
            return false;
        }

        if (nic.length < 10) {
            setError('NIC should be at least 10 characters.');
            return false;
        }

        setError('');
        return true;
    };

    const validatePassword = () => {
        if (!password) {
            setError('Password is required.');
            return false;
        }
        setError('');
        return true;
    };

    const validateRole = () => {
        if (!role) {
            setError('Role is required.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const isUsernameValid = validateUsername();
        const isEmailValid = validateEmail();
        const isNICValid = validateNIC();
        const isPasswordValid = validatePassword();
        const isRoleValid = validateRole();
    
        if (isUsernameValid && isEmailValid && isNICValid && isPasswordValid && isRoleValid) {
            try {
                const response = await signup({
                    username,
                    email,
                    nic,
                    password,
                    role
                });
                // Check the response for success
                if (response ) {
                    // Registration was successful
                    Swal.fire({
                        icon: 'success',
                        title: 'Registration Successful',
                        text: 'You have successfully registered!',
                    }).then(() => {
                        // Reload the page
                        window.location.reload();
                    });
                    
                } else {
                    // Registration failed
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: 'An error occurred during registration.',
                    });
                }
            } catch (error) {
                // Handle any other errors (e.g., network error)
                console.error('Registration error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'An error occurred during registration.',
                });
            }
        }
    };
    

    return (
        <div className="card-body p-4 p-sm-5" style={{ minHeight: '600px' }}>
            <h5 className="card-title text-center mb-5 fw-light fs-5" style={{ marginTop: '60px' }}>Registration</h5>
            <form className="mt-5" onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputUsername" placeholder="myusername" required autoFocus value={username} onChange={handleUsernameChange} />
                    <label htmlFor="floatingInputUsername">Username</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInputEmail" placeholder="name@example.com" required value={email} onChange={handleEmailChange} />
                    <label htmlFor="floatingInputEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInputNIC" placeholder="myNIC" required value={nic} onChange={handleNICChange} />
                    <label htmlFor="floatingInputNIC">NIC</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required value={password} onChange={handlePasswordChange} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="roleSelect">Select Role:</label>
                    <select className="form-control" id="roleSelect" value={role} onChange={handleRoleChange} required>
                        <option value="">Select a role</option>
                        <option value="traveller">Traveller</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <div className="d-grid mb-2">
                    <button className="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Register</button>
                </div>

                <a className="d-block text-center mt-5 small" style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setClickedSignIn(false)}>Have an account? Log In</a>
            </form>
        </div>
    );
}

export default RegisterForm;
