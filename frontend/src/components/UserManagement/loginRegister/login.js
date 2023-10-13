import React, { useState } from 'react'

import "./login.scss";
import LoginForm from './Login/Login';
import RegisterForm from './Register/Regitration';


const Login = () => {

    const [isClickedSignIn, setClickedSignIn] = useState(false)

    return (
        <div>

            <div className="landingpage" style={{ backgroundColor: "#111D46" }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="home-text">
                        <h1 id="h1" style={{ fontSize: 44, color: 'white', marginTop: 14 }}>Welcome to Sri Lanka Railways</h1>
                        <p id="para" style={{ fontSize: 16, color: 'white', marginTop: 8 }}>Online Advance Train Seats Reservation</p>
                    </div>
                </div>
            </div>
            <div class="container" style={{ marginTop: '50px' }}>
                <div class="row">
                    <div class="col-lg-10 col-xl-9 mx-auto">
                        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
                            <div class="card-img-left d-none d-md-flex">

                            </div>
                            {isClickedSignIn ?
                                <RegisterForm setClickedSignIn={setClickedSignIn} />
                                :
                                <LoginForm setClickedSignIn={setClickedSignIn} />
                            }
                            {/* <LoginForm /> */}
                            {/* <RegisterForm /> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login