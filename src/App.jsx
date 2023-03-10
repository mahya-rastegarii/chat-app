// import { useContext } from "react"
import { BrowserRouter , Routes , Route, Navigate  } from "react-router-dom"
// import { AuthContext } from "./context/AuthContext"

import HomePage from "./Page/Home"
import LoginPage from "./Page/Login"
import RegisterPage from "./Page/Register"
import SetProfilePhoto from "./Page/SetProfilePhoto"




function App() {

  // const {currentUser} = useContext(AuthContext);

  // const protectedRoute = ({children}) =>{
    
  //   if(!currentUser){
  //     return <Navigate to="/login"/>
  //   }
  // }
  return (
    <div className="App">
      <div className=" flex justify-center items-center h-screen bg-teal-100">
<BrowserRouter>
<Routes>
  <Route path="/">

    <Route  index  element={ <HomePage/> }/>

    <Route  path="login" element={<LoginPage/>}/>
      
    <Route path="register"  element={<RegisterPage/>}/>

    <Route path="profile"  element={ <SetProfilePhoto/>}/>
  </Route>
</Routes>
</BrowserRouter>
    
      </div>
    </div>
  )
}

export default App
