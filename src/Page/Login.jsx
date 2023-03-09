import { useState } from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate , Link } from "react-router-dom";
// import { auth } from "../firebase";


const LoginPage = () => {



//     const [error , setError] = useState(false)

//     const navigate = useNavigate()


    
//  const handelSubmit = async(e) =>{
//     e.preventDefault();

   
//     const email = e.target[0].value;
//     const password = e.target[1].value;
   
    
//     try {
        
//     //   await signInWithEmailAndPassword(auth, email, password);
//         navigate("/")

   
// } catch (error) {
//     setError(true)
// }

//  }
    return ( 
        <div className=" flex lg:px-28 bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 h-full w-full">

        
        <div className="container flex flex-col justify-center items-center w-3/4  md:w-2/4  lg:w-2/6 m-auto shadow-lg shadow-teal-900 bg-white rounded-md  py-5">
    <h1 className=" font-bold text-4xl text-teal-800">Hi Chat</h1>
    <span className="font-semibold text-xl text-teal-700 mt-1"> Login </span>
  
         <form className=" mt-5 w-full p-4">
            <div className=" flex flex-col justify-center items-center space-y-6 w-full p-7">
    
                <input type="email" className="border-teal-900 outline-0 border-b py-2 text-lg font-bold placeholder:font-thin text-teal-900 placeholder-teal-800 w-full focus:placeholder-slate-300 focus:border-b-2 focus:border-teal-800" placeholder="Enter Email" />
                <input type="password" className=" border-teal-900 outline-0 border-b py-2 text-lg font-bold placeholder:font-thin text-teal-900 placeholder-teal-800 w-full  focus:placeholder-slate-300 focus:border-b-2 focus:border-teal-800" placeholder="Enter Password" />
               
               

             
                       
                <div className="w-full h-full pt-5">
                    <button className=" bg-gradient-to-r from-teal-500  to-teal-800 hover:from-teal-600  hover:to-teal-900 rounded-sm w-full  py-3   text-white "> Login </button>
       </div>
        {/* { error && <span> Error!!</span>} */}
             <p className="  text-teal-900"> You don't have an account? <Link to="/register"> <span className=" font-bold text-teal-900 hover:text-teal-700 cursor-pointer"> Register </span> </Link> </p>
    </div>
        </form>
    
</div>
</div>
 );
}
 
export default LoginPage;