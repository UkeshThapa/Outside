import'./App.scss';
import LogIn from './authentication/login/LogIn';
import SignUp from './authentication/signup/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div className='login-auth-container'>
                <LogIn/>
            </div>    
            }>  
          </Route>
          <Route path='/signup' element={
            <div className='signUp-auth-container'>
                <SignUp/>
            </div>    
            }>  
          </Route>
        </Routes>
      </BrowserRouter>

  )
}

export default App
