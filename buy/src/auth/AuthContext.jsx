import { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { CHECK_SESSION, LOGIN } from '../services/operations/authApi';
import { toast } from 'sonner';
import { GlobalLoader } from '../components/backdropLoader/BackdropLoader';
import { adminLogin } from '../services/operations/adminApi';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [res, setRes] = useState(null);

  // const navigate = useNavigate()


  useEffect(() => {
    const token = localStorage.getItem('_sell_Token');
    if (token) {
      const decoded = jwtDecode(token);
      setUser(decoded);
    }
    setLoading(false)
  }, []);

  const login = async (formData) => {
    const res = await LOGIN(formData);
    if (res) {
      toast.success('Login successfull');
      const { token, data } = res;
      localStorage.setItem('_sell_Token', token);
      const decoded = jwtDecode(token);
      setUser({ ...decoded, ...data });
    } else {
      localStorage.removeItem('_sell_Token');
      setUser(null);
    }
    return res
  };
  const AdminLogin = async (formData) => {
    const res = await adminLogin(formData);
    if (res) {
      toast.success('Login successfull');
      const { token, data } = res;
      localStorage.setItem('_sell_Token', token);
      const decoded = jwtDecode(token);
      setUser({ ...decoded, ...data });
    } else {
      localStorage.removeItem('_sell_Token');
      setUser(null);
    }
    return res
  };

  const logout = () => {
    localStorage.removeItem('_sell_Token');
    setUser(null);
  };

  const checkSession = async () => {
    try {
      // setLoading(true)
      // Optionally, you could make a request to the server to verify the token
      // await axios.get('/auth/verify', { headers: { Authorization: `Bearer ${token}` } });
      let res = await CHECK_SESSION()
      setRes(res)
      setUser(res.user);
    } catch (error) {
      setUser(null);
      localStorage.removeItem('_sell_Token');
    } finally {
      // setLoading(false)
    }

  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, checkSession, res, loading, AdminLogin }}>
      {loading ? <GlobalLoader /> : children}

    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

