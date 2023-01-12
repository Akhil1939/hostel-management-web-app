import React from 'react';
import { useNavigate } from 'react-router-dom';
import studentImg from '../../assets/images/student.png'
import wardenImg from '../../assets/images/warden.png'

export default function Home({setStudent}) {
   const navigate = useNavigate()
    const student = () => {
        setStudent(true)
        navigate('/login')

    }
    const warden = () => {
        setStudent(false)
        navigate('/login')


    }
    return (
        <>
            <div className="d-flex justify-content-center mt-4">
                <button className='m-3' onClick={warden}>
                    <img src={wardenImg} alt="" />
                    <p>Warden</p>
                </button>
                <button className='m-3' onClick={student}>
                    <img src={studentImg} alt=""  />
                    <p>Student</p>
                </button>
            </div>
        </>
    );
}
