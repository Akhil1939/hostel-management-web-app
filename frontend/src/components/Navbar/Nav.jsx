import axios from 'axios'
import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'
import { UserContext } from '../../context/UserContext'

export default function Nav({ user, setUser }) {
    const {userName, erNo, setUserName, setErNo} = useContext(UserContext)


    const navigate = useNavigate()
    const Logout = async () => {
        try {
            axios.get('/auth/signout').then((res) => {
                console.log(res.data);
                setUserName("");
                setErNo("");
                setUser(false);
                navigate('/');
            })

        }
        catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <nav class="navbar bg-light">
                <div class="nav-logo">
                    <Link class="logo" to="/">
                        <img src="https://yt3.ggpht.com/ytc/AMLnZu-EN3f6M8KrH5fqTwV8lmO1wIeHwD_59hEtVurQ=s900-c-k-c0x00ffffff-no-rj" alt="Logo" width="120" height="120" />
                    </Link>
                    <div className="text-name fs-1 ">
                        <p>
                            GEC Hostel
                        </p>
                    </div>
                </div> 

                <div>
                    <div className="user-details info float-end text-start">
                        <p>{userName}</p>
                        <p>{erNo} || </p>

                        {
                            user ?
                                <p><button type="button" class="btn btn-outline-danger" onClick={Logout} >Log out</button></p>
                                :
                                <p><button type="button" class="btn btn-outline-success" >Log In</button></p>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}
