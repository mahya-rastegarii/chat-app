// import { useContext } from "react"
import { BrowserRouter , Routes , Route, Navigate  } from "react-router-dom"
// import { AuthContext } from "./context/AuthContext"

import HomePage from "./Page/Home"
import LoginPage from "./Page/Login"
import RegisterPage from "./Page/Register"




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
      
    <Route path="Register"  element={<RegisterPage/>}/>
  </Route>
</Routes>
</BrowserRouter>
    
      </div>
    </div>
  )
}

export default App
