import React from 'react'

const LoginForm = ({ setClickedSignIn }) => {
    return (

        <div class="card-body p-4 p-sm-5 " style={{ minHeight: '600px' }}>
            <h5 class="card-title text-center mb-5 fw-light fs-5" style={{ marginTop: '60px' }}>Login</h5>
            <form className='mt-5' >

                {/* <div class="form-floating mb-3">
                                        <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus />
                                        <label for="floatingInputUsername">Username</label>
                                    </div> */}

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInputEmail" placeholder="name@example.com" />
                    <label for="floatingInputEmail">Email address</label>
                </div>



                <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>

                {/* <div class="form-floating mb-3">
                                        <input type="password" class="form-control" id="floatingPasswordConfirm" placeholder="Confirm Password" />
                                        <label for="floatingPasswordConfirm">Confirm Password</label>
                                    </div> */}

                <div class="d-grid mb-2">
                    <button class="btn btn-lg btn-primary btn-login fw-bold text-uppercase" type="submit">Login</button>
                </div>

                <a class="d-block text-center mt-5 small" style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setClickedSignIn(true)}>Don't Have an account? Register</a>







            </form>
        </div>

    )
}

export default LoginForm