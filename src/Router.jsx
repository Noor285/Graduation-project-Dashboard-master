import { Route, Routes } from "react-router-dom";
import GlobalLoading from "./component/globalLoading";
import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useLocation } from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Doctor from './pages/Doctor/Doctor';
import ViewDoctor from './component/crudDoctor/ViewDoctor/ViewDoctor';
import EditDoctor from './component/crudDoctor/EditDoctor/EditDoctor';
import AddDoctor from './component/crudDoctor/AddDoctor/AddDoctor';
import EditProfile from './pages/EditProfile/EditProfile';


const Router = () => {
const { loading } = useAuth()
const {pathname} = useLocation()

if(loading && pathname !== "/login") return <GlobalLoading />

return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
      <Route path="editProfile" element={<EditProfile />} />
      <Route path="home" element={<Home />} />
      <Route path="doctor" element={<Doctor/>}/>
      <Route path="/view/:ID" element={<ViewDoctor/>}/>
      <Route path="/edit/:ID" element={<EditDoctor/>}/>
      <Route path="/add" element={<AddDoctor/>}/>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;

