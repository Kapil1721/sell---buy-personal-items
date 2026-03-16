import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminPanelHeader from './AdminPanelHeader'

function AdminPanel() {

    return (
        <>
            <AdminPanelHeader />
            <div className='relative px-4'>
                <Outlet />
            </div>
        </>
    )
}

export default AdminPanel