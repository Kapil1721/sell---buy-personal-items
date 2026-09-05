import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { loginUser, signupUser, logoutUser, checkUserSession } from '../services/authApi';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const initAuth = () => {
    try {
      const token = localStorage.getItem('_sell_Token');
      if (token) {
        const decoded = jwtDecode(token);
        setUser(decoded);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error("Invalid token stored:", err);
      localStorage.removeItem('_sell_Token');
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    initAuth();
  }, []);

  const login = async (credentials) => {
    const res = await loginUser(credentials);
    if (res && res.token) {
      localStorage.setItem('_sell_Token', res.token);
      try {
        const decoded = jwtDecode(res.token);
        const userData = { ...decoded, ...(res.data || {}) };
        setUser(userData);
      } catch (e) {
        setUser(res.data || { email: credentials.usernameoremail });
      }
    }
    return res;
  };

  const signup = async (userData) => {
    const res = await signupUser(userData);
    if (res && res.token) {
      localStorage.setItem('_sell_Token', res.token);
      try {
        const decoded = jwtDecode(res.token);
        setUser({ ...decoded, ...(res.data || {}) });
      } catch (e) {
        setUser(res.data || { email: userData.email });
      }
    }
    return res;
  };

  const logout = async () => {
    await logoutUser();
    localStorage.removeItem('_sell_Token');
    setUser(null);
  };

  const setTokenAndUser = (token, data = {}) => {
    if (token) {
      localStorage.setItem('_sell_Token', token);
      try {
        const decoded = jwtDecode(token);
        setUser({ ...decoded, ...data });
      } catch (e) {
        setUser(data);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        login,
        signup,
        logout,
        setTokenAndUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
