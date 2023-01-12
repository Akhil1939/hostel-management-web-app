import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'
import axios from 'axios'
import { UserContext } from '../../context/UserContext';


export default function Login({ student, setUser }) {
    const { setUserName,setErNo } = useContext(UserContext)

    const navigate = useNavigate()
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState(""); 

    const studentLogin = async (e) => {
        console.log(student)
        e.preventDefault();
        try {
            await axios.post('/hosteller/signin', {
                mail,
                password,

            }).then((res) => {
                const user = res.data.hosteller;
                setUser(true);
                setUserName(user.name);
                setErNo(user.enrollment_number);

                navigate("/student");
            })

        } catch (err) {

            console.log(err)

        }

    }
    const wardenLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/auth/signin', {
                mail,
                password,

            }).then((res) => {
                const user = res.data.warden;
                setUser(true)
                console.log(user)
                navigate("/warden")
            })

        } catch (err) {

            console.log(err)

        }

    }
    return (
        <div className='container d-flex justify-content-center'>
            <div className="login-form-wrapper d-flex flex-column border border-2 rounded p-4 mt-4">
                <div className="title fs-2 text-center mb-4 mt-4"> Login Form</div>

                <form className='' >
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1"
                            onChange={e => setMail(e.target.value)} aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text text-success ">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    {
                        student ?
                            <button type="submit" class="btn btn-outline-success" onClick={studentLogin}> Login</button> :
                            <button type="submit" class="btn btn-outline-success" onClick={wardenLogin}> Login</button>
                    }
                </form>
            </div>
        </div>
    )
}
