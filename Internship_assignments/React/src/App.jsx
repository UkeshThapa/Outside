import Dashboard from "./session1/assignment1/Dashboard/Dashboard"
import'./App.scss';
import LogIn from "./session1/assignment1/Dashboard/authentication/login/LogIn";


function App() {
  return (
    <>
      {/* <div className="main">
          <Dashboard/>
      </div> */}
      <div className="login-auth-container">
          <LogIn/>
      </div>
    </>
  )
}

export default App
