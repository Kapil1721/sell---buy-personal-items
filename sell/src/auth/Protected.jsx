import { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import { getBuyRoute } from '../config/appConfig';

const Protected = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    useEffect(() => {
        if (!loading && !user) {
            window.location.href = getBuyRoute('/login?tab=login');
        }
    }, [user, loading]);

    if (loading) {
        return null;
    }

    return user ? children : null;
};

export default Protected;