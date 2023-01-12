/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import done from '../../assets/images/past.png'
import pending from '../../assets/images/pending.png'
import './warden.css'

export default function WardenNav({past, setPast}) {
    let clickPast=()=>{
        setPast(true)
        console.log(past)
    }
    
    let clickPending=()=>{
        setPast(false)
        console.log(past)
    }
    
    return (
        <>
            <div className='utility d-flex justify-content-center mt-4'>

                <div className='d-flex justify-content-center'>


                    <div className="done  border border-dark rounded text-center d-flex flex-column  justify-content-center p-2 pt-2  mx-3" style={{ width: "110px", height: "110px" }}>
                        <div>
                            <img src={done} className="" style={{ width: "60px", height: "60px" }} alt="..." />
                        </div>
                        <btn  className="btn btn-outline-dark m-2 lh-1" onClick={clickPast} > past</btn>
                    </div>
                    <div className="done  border border-dark rounded text-center d-flex flex-column justify-content-center  pt-2  mx-3" style={{ width: "110px", height: "110px" }}>
                        <div>
                            <img src={pending} className="" style={{ width: "60px", height: "60px" }} alt="..." />
                        </div>
                        <btn  className="btn btn-outline-dark m-2 lh-1" onClick={clickPending} > pending</btn>
                    </div>
                </div>

                <div className="search-sort">
                    <div className="input-group">
                        <div className="form-outline">
                            <input id="search-focus" type="search" className="form-control border border-dark" />
                            <label className="form-label" for="form1">Search</label>
                        </div>
                        <button type="button" className="btn btn-outline-success">
                            <i className="fas fa-search"></i>
                        </button>
                    </div>

                    <div className="dropdown">
                        <button className="sort-btn btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                           Sort
                        </button>
                        <ul className="dropdown-menu">
                            <li><button className="dropdown-item" type="button">A-Z</button></li>
                            <li><button className="dropdown-item" type="button"></button></li>
                            <li><button className="dropdown-item" type="button">Something else here</button></li>
                        </ul>
                    </div>
                </div>


            </div>

        </>
    );
}
