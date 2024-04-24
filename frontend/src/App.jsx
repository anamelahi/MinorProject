import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Homee from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";


function App() {
  const {authUser} = useAuthContext();
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
      <Routes>
                <Route path='/' element={ <Homee /> } />
                <Route path='/login' element={ <Login />} />
          { <Route path='/signup' element={ <SignUp />} /> } 
        <Route path='/signup' element={authUser ?  <Navigate to='/' /> : <SignUp /> } />
            </Routes>
    </div>
  )
}
export default App;