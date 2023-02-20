import Dashboard from "./session1/assignment1/Dashboard/Dashboard"
import'./App.scss';
import LogIn from "./session1/assignment1/Dashboard/authentication/login/LogIn";
import SignUp from "./session1/assignment1/Dashboard/authentication/signup/Signup";

function App() {
  return (
    <>
      {/* <div className="signUp-auth-container">
        <SignUp/>
      </div> */}
      <div className="main">
          <Dashboard/>
      </div>
      {/* <div className="login-auth-container">
          <LogIn/>
      </div> */}
    </>
  )
}

export default App
