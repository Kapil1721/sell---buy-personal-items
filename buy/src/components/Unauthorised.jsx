import React from 'react'
import { useAuthStore } from '../store/AuthStore'

function Unauthorised() {
    const authorised = useAuthStore(state => state.authorised);
    console.log(authorised);
    return (
        <div className='min-h-screen'>{authorised.toString()}</div>
    )
}

export default Unauthorised