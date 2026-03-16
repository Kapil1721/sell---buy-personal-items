import { toast } from 'sonner'
import Topsection from './components/Topsection'
import ProfileSettings from './ProfileSettings'
import Modal from '../../../components/Modal';
import { useContext, useState } from 'react';
import { DELETE_PROFILE } from '../../../services/operations/adminApi';
import { useNavigate } from 'react-router-dom';
import { useGlobalState } from '../../../store/AuthStore';
import { AuthContext } from '../../../auth/AuthContext';

function Settings() {

  const { logout } = useContext(AuthContext)
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setIsLoading(false)
    setModalOpen(false);
  };


  const handleConfirm = async () => {
    setIsLoading(true)
    // Handle confirm logic here
    const res = await DELETE_PROFILE();
    if (res.status) {
      // toast.success("Account Deleted Successfully")
      toast.success(res.message);
      logout()
      navigate('/');
    }
    setIsLoading(false)
    setModalOpen(false);
  };

  const handleDeleteAccount = async () => {
    setModalOpen(true);
  }


  return (
    <div className="relative bg-[#F8FAFD]">
      <div className="max-w-[1200px] mx-auto py-14">
        <Topsection title={"Settings"} />
        <ProfileSettings />
        <Modal
          isLoading={isLoading}
          isOpen={modalOpen}
          title="Do you want to delete your profile?"
          onClose={closeModal}
          onConfirm={handleConfirm}
        />
        <div>
          <button className='text-red-600 text-lg font-medium' onClick={handleDeleteAccount}>Delete Account</button>
        </div>
      </div>
    </div>
  )
}

export default Settings