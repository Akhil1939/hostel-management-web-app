import React, { useState } from 'react';
import WardenNav from './wardenNav';
import './warden.css'
import WardenPending from './WardenPending';
import WardenPast from './WardenPast';

export default function Warden() {
    let [past, setPast] = useState(true)
    console.log(past)
    
    return (
        <div className='d-flex flex-column justify-content-center'>
            <WardenNav past={past} setPast={setPast}/>
            {
                past ?
                <WardenPast/>:
                <WardenPending/>
            }

        </div>
    );
}
