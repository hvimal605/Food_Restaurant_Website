import React, { useState } from 'react';
import './Login.css';
import googleimg from '../img/GoogleLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const notifyA = (msg) => toast.error(msg);
    const notifyB = (msg) => toast.success(msg);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const postData = () => {
        if (!emailRegex.test(email)) {
            notifyA('Invalid Email');
            return;
        }

        fetch('http://localhost:5000/signin', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                notifyA(data.error);
            } else {
                notifyB(data.message);
                localStorage.setItem('jwt', data.token); // Assuming the token is returned from the backend
                if (data.isAdmin) {
                    navigate('/HomeAdmin');
                } else {
                    navigate('/');
                }
            }
        })
        .catch(error => {
            console.error('Error:', error);
            notifyA('An error occurred. Please try again.');
        });
    };

    return (
        <div className="loginform">
            <div className="logintext">
                <div>LOGIN</div>
            </div>
            <div className="email-container">
                <div>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your Email"
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your Password"
                        required
                    />
                    <button className="submitbtn" onClick={postData}>Submit</button>
                </div>
            </div>
            <div className="or">Or</div>
            <div className="partition"></div>
            <div className="afterOr">
                <img src={email} alt="" />
                Continue with email
            </div>
            <div className="afterOr">
                <img src={googleimg} alt="" width="22" />
                Sign in with Google
            </div>
            <div className="partition"></div>
            <div className="newuser">
                New to HarshMeal? <Link to="/createaccount">Create account</Link>
            </div>
        </div>
    );
};

export default Login;
