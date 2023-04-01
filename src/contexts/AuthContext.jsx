  import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/axios";

const initialContextValue = {
  user: null,
  token: null,
  loading: true,
  login: (email , password) => {},
  logout: () => {},
  
};

const AuthContext = createContext(initialContextValue);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  async function validateTokenAndSetUser(token, user) {
    if (!token || !user) {
      // the user is not autheticated
      return navigate("\/login");
    }

    setAuth({ token, user });
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setLoading(false);

  }

  async function loadUserFromLocalStorage() {
    const token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if(user) user = JSON.parse(user)
    await validateTokenAndSetUser(token, user);
    // the authentication proccess is done
  }

  useEffect(() => {
    loadUserFromLocalStorage();
  }, []);

  const login = async (email, password) => {
    const res = await api.post("/login", { email, password });
    const { data : responseData, error  } = res?.data
    if(error) return error

    // user login is correct
    const { token, ...user } = responseData;
    localStorage.setItem("token" , token);
    localStorage.setItem("user" , JSON.stringify(user));
    if (token) await validateTokenAndSetUser(token , user);
    navigate("/")
  };

  const logout = async () => {
    const token = auth?.token;
    if (!token) throw new Error("user can't logout because he isn't signed in");
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const res = await api.get("/logout");
    if (!!res.data?.status) {
      setAuth(null);
       localStorage.removeItem("token");
       localStorage.removeItem("user");
    }
  };


  return (
    <AuthContext.Provider
      value={{
        user: auth?.user,
        token: auth?.token,
        loading,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
