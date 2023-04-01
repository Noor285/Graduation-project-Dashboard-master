import { BrowserRouter ,Routes , Route, useNavigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Router from './Router';

function App() {

  
  // const getToken = () => {
  //   const tokenString = localStorage.getItem('token');
  //   const userToken = JSON.parse(tokenString);
  //   return userToken
  // };

  // const navigate = useNavigate();
  // useEffect(()=>{
  //   const isLogin = ()=>{
  //     const login = localStorage.getItem('IsLogin')
  //     if(login !== true)
  //     {
  //       navigate('/login')
  //     }else{
  //       navigate('/')
  //     }
  //   }
  //   isLogin()
  // },[])



  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
