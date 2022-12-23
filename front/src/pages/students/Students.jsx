import React from 'react'
import done from '../../assets/images/past.png'
import pending from '../../assets/images/pending.png'
import add from '../../assets/images/add.png'

export default function Students() {
    return (
        <div className='d-flex justify-content-center mt-4'>


            <div className="done  border border-dark rounded text-center d-flex flex-column  justify-content-center p-2 pt-2  mx-3" style={{ width: "110px", height: "110px" }}>
                <div>
                    <img src={done} class="" style={{ width: "60px", height: "60px" }} alt="..." />
                </div>
                <a href="#" class="btn btn-outline-dark m-2 lh-1" > past</a>
            </div>
            <div className="done  border border-dark rounded text-center d-flex flex-column justify-content-center  pt-2  mx-3" style={{ width: "110px", height: "110px" }}>
                <div>
                    <img src={pending} class="" style={{ width: "60px", height: "60px" }} alt="..." />
                </div>
                <a href="#" class="btn btn-outline-dark m-2 lh-1" > pending</a>
            </div>

           

            <div className="done  border border-dark rounded text-center d-flex flex-column   justify-content-center p-2 pt-2 mx-3" style={{ width: "110px", height: "110px" }}>
                <div>
                    <img src={add} class="" style={{ width: "60px", height: "60px" }} alt="..." />
                </div>
                <a href="#" class="btn btn-outline-dark m-2 lh-1" > add</a>
            </div>

            
        </div>
    )
}
