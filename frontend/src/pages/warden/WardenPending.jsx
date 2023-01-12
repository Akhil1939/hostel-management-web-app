import React from 'react';
import WardenPendingCard from './WardenPendingCard';
import './warden.css'

export default function WardenPending() {
  return (
    <div className='pending-page m-4 d-flex flex-wrap justify-content-center'>
    <WardenPendingCard />
    </div>
  );
}
