import { useEffect, useState } from 'react'
import Topsection from './components/Topsection'
import { AdminIcon } from '../../../components/Icons'
import ErrorUi from '../../../components/ErrorUi'
import { GET_ALL_USERS, DELETE_USER_BY_ADMIN } from '../../../services/operations/adminApi'
import { useQuery } from '@tanstack/react-query';
import { getFormatedDate } from '../../../utils/constants'
import NoRecords from './components/NoRecords'
import { toast } from 'sonner'
import { useSearchParams } from 'react-router-dom'

function ManageMembers() {
  const [SearchParams] = useSearchParams();
  const [users, setUsers] = useState([])

  const searchQuery = SearchParams.get('searchQuery');
  const sortValue = SearchParams.get('sort');

  const { isPending, error, data } = useQuery({
    queryKey: ['GET_ALL_USERS', sortValue, searchQuery],
    queryFn: async () => await GET_ALL_USERS({ sort: sortValue, searchQuery })
  });

  useEffect(() => {
    if (data?.users) {
      setUsers(data.users)
    }
  }, [data])

  if (error) {
    return <ErrorUi error={error.name} />
  }

  const handleDelete = async (id) => {
    let confirm = window.confirm("Are you sure you want to delete this user?");
    if (confirm) {
        let res = await DELETE_USER_BY_ADMIN(id)
        if (res?.status) {
            setUsers(users.filter((user) => user.id !== id))
            toast.success(res.message)
        }
    }
  };

  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <div className='relative'>
            <div className=''>
              <Topsection title={"Manage Members"} />
              <div className='bg-white border border-[#D5E3EE] rounded relative overflow-hidden'>
                <div className='grid grid-cols-12 border-b border-[#D5E3EE] bg-[#FDFDFE]'>
                  <div className='col-span-4 p-6 text-[#374B5C] text-lg font-medium'>User Details</div>
                  <div className='col-span-3 p-6 text-[#374B5C] text-lg font-medium'>Email</div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Role/Type</div>
                  <div className='col-span-1 p-6 text-[#374B5C] text-lg font-medium'>Status</div>
                  <div className='col-span-2 p-6 text-[#374B5C] text-lg font-medium'>Actions</div>
                </div>
                
                {isPending && (
                  <div className='p-10 text-center text-[#374B5C] font-medium'>Loading users...</div>
                )}

                {!isPending && users?.length < 1 ? (
                  <div className='relative bg-white border border-[#D5E3EE] rounded flex justify-center items-center min-h-80'>
                    <NoRecords title={"No Users Found"} />
                  </div>
                ) : users?.map((user) => (
                  <div key={user.id} className='grid grid-cols-12 border-b border-[#D5E3EE] hover:bg-gray-50 transition-colors'>
                    <div className='col-span-4 border-r border-[#D5E3EE] p-6 flex items-center gap-4'>
                        <div className='rounded-full bg-[#F2F4F8] size-12 flex justify-center items-center shrink-0'>
                            <AdminIcon color={"#D5E3EE"} />
                        </div>
                        <div>
                            <h3 className='text-primary font-semibold'>{user.name}</h3>
                            <p className='text-light text-sm'>@{user.username}</p>
                            <p className='text-light text-[10px] mt-1 uppercase font-medium'>Joined: {getFormatedDate(user.createdAt)}</p>
                        </div>
                    </div>
                    
                    <div className='col-span-3 flex items-center border-r border-[#D5E3EE] p-6'>
                        <p className='text-primary break-all text-sm font-medium'>{user.email}</p>
                    </div>

                    <div className='col-span-2 flex flex-col justify-center border-r border-[#D5E3EE] p-6'>
                        <p className='text-primary font-bold text-sm tracking-wide'>{user.role}</p>
                        <p className='text-light text-sm italic'>{user.userType}</p>
                        {user.isSubscribed && (
                            <span className='mt-2 text-[9px] bg-active text-white px-2 py-0.5 rounded-full w-fit uppercase font-bold tracking-widest'>Subscriber</span>
                        )}
                    </div>

                    <div className='col-span-1 flex justify-center items-center border-r border-[#D5E3EE] p-6'>
                        <p className={`py-1 px-3 rounded-md text-[10px] font-bold uppercase tracking-wider ${user.active ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {user.active ? 'Active' : 'Inactive'}
                        </p>
                    </div>

                    <div className='col-span-2 flex justify-center items-center p-6'>
                        {user.role !== 'ADMIN' ? (
                            <button 
                                onClick={() => handleDelete(user.id)}
                                className='bg-red-50 text-red-600 hover:bg-red-600 hover:text-white border border-red-200 px-4 py-2 rounded-md font-semibold text-xs transition-all duration-300'
                            >
                                Delete User
                            </button>
                        ) : (
                            <span className='text-light text-[10px] italic font-medium uppercase'>System Admin</span>
                        )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ManageMembers
