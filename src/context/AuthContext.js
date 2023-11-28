import { createContext, useState, useEffect, useCallback } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import api from '../services/api';

const LOGIN_URL = '/v1/customers/login';
const REFRESH_URL = '/v1/customers/refresh';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );
  const [customer, setCustomer] = useState(() =>
    localStorage.getItem('authTokens') ? jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access_token) : null
  );
  const [loading, setLoading] = useState(true);
  const [refreshingTokens, setRefreshingTokens] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const navigate = useNavigate();

  const logoutCustomer = useCallback(() => {
    setAuthTokens(null);
    setCustomer(null);
    localStorage.removeItem('authTokens');
    navigate('/');
  }, [setAuthTokens, setCustomer, navigate]);

  const refreshToken = useCallback(async () => {
    try {
      const response = await api.post(REFRESH_URL, {
        refresh_token: authTokens.refresh_token,
      });

      const { access_token, refresh_token } = response.data.token;

      setAuthTokens({ access_token, refresh_token });
      localStorage.setItem('authTokens', JSON.stringify({ access_token, refresh_token }));
    } catch (error) {
      console.error('Error refreshing token:', error);
      throw error;
    }
  }, [authTokens, setAuthTokens]);

  const loginCustomer = async ({ email, password }) => {
    try {
      const response = await api.post(LOGIN_URL, {
        email,
        password,
      });
      
      if (response.status === 200) {
        const data = response.data;


        const { access_token, refresh_token, customer, firstName, lastName } = data;

      
        const decodedUser = jwtDecode(access_token);

        setAuthTokens({ access_token, refresh_token });

        setCustomer({ ...decodedUser, customer, firstName, lastName });

        localStorage.setItem('authTokens', JSON.stringify({ access_token, refresh_token }));

        navigate('/');
      } else {
        const errorMessage = response.data.message; 
        setErrMsg(errorMessage || 'Something went wrong!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrMsg(error.response.data.message || 'Something went wrong!');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (authTokens) {
        const customer = jwtDecode(authTokens.access_token);
        const isExpired = dayjs.unix(customer.exp).diff(dayjs()) < 1;

        try {
          if (isExpired && authTokens.refresh_token) {
            if (!refreshingTokens) {
              setRefreshingTokens(true);
              await refreshToken();
              setRefreshingTokens(false);
            }
          } else if (isExpired) {
            logoutCustomer();
          } else {
            setCustomer(customer);
          }
        } catch (refreshError) {
          console.error('Error during token refresh:', refreshError);
          logoutCustomer();
        }
      }
      setLoading(false);
    };

    fetchData();
  }, [authTokens, refreshingTokens, refreshToken, logoutCustomer]);

  const contextData = {
    customer,
    authTokens,
    setAuthTokens,
    setCustomer,
    loginCustomer,
    logoutCustomer,
    errMsg,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
