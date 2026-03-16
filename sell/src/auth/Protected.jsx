import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Protected = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    // useBrowserFocus(() => {
    //     checkSession();
    // });


    return user ? children : <Navigate to="/login-register?tab=login" state={{ from: location }} />;
};

export default Protected;