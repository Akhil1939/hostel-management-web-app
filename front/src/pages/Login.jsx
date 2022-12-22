import React from 'react'

export default function Login() {
    return (
        <div className='container d-flex justify-content-center'>
            <div className=" d-flex flex-column border border-3 border-dark p-4 mt-4 text-light

" style={{background:" rgb(63,94,251)",
background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>

            
            <div className="title fs-2 text-center mb-4 mt-4"> Login Form</div>

            <form className='' >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )
}
