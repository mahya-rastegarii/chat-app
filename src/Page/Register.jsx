
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
// import {auth , storage, db} from "../firebase"
// import { collection, addDoc } from "firebase/firestore"; 
// import { doc, setDoc } from "firebase/firestore"; 
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import imageFileIcon from "/img/cameraAdd.svg"
import { useNavigate , Link} from "react-router-dom";



const RegisterPage = () => {
  
    
//     const [error , setError] = useState(false)
//     const navigate = useNavigate()


//  const handelSubmit = async(e) =>{
//     e.preventDefault();

//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

// try {
    
//     const response = await  createUserWithEmailAndPassword(auth, email, password)



// const storageRef = ref(storage,  displayName);

// const uploadTask = uploadBytesResumable(storageRef, file);

// uploadTask.on(

//   (error) => {
//     setError(true)
//   }, 
//   () => {
   
//     getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
//      await updateProfile(response.user, {
//         displayName,
//         photoURL : downloadURL,
//      });

//      await setDoc(doc(db, "users", response.user.uid), {
//         uid : response.user.uid,
//         displayName,
//         email,
//         photoURL : downloadURL,
//       });

//         await setDoc(doc(db , "userChat" , response.user.uid), {})
//         navigate("/")
//     });
//   }
// );
// } catch (error) {
//     setError(true)
// }

//  }
    
    return ( 
        <div className=" flex lg:px-28 bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 h-full w-full">
        <div className="container flex flex-col justify-center items-center w-3/4  md:w-2/4  lg:w-2/6 m-auto shadow-lg shadow-teal-900 bg-white rounded-md  py-5">
            <h1 className=" font-bold text-4xl text-teal-800">Hi Chat</h1>
            <span className="font-semibold text-xl text-teal-700 mt-1"> Register </span>
          
                 <form  className=" mt-5 w-full p-4">
                    <div className=" flex flex-col justify-center items-center space-y-6 w-full p-7">
                        <input type="text" className=" border-teal-900 outline-0 border-b py-2 text-lg font-bold placeholder:font-thin text-teal-900 placeholder-teal-800 w-full focus:placeholder-slate-300 focus:border-b-2 focus:border-teal-800" placeholder="Enter Name" />
                        <input type="email" className=" border-teal-900 outline-0 border-b py-2 text-lg font-bold placeholder:font-thin text-teal-900 placeholder-teal-800 w-full  focus:placeholder-slate-300 focus:border-b-2 focus:border-teal-800" placeholder="Enter Email" />
                        <input type="password" className=" border-teal-900 outline-0 border-b py-2 text-lg font-bold placeholder:font-thin text-teal-900 placeholder-teal-800 w-full  focus:placeholder-slate-300 focus:border-b-2 focus:border-teal-800" placeholder="Enter Password" />
                       {/* <div className=" flex w-full  items-center">

                        <input type="file" className=" mb-5" id="imageFile" accept="image/*" style={{display: "none"}} />
                        <label htmlFor="imageFile">
                            <img src={imageFileIcon} alt="image icon" className=" inline cursor-pointer"  width="40"/>
                        </label>
                           <span className=" text-slate-700 ">Add an avatar</span>
                       </div> */}

                     
                               
                            <div className="w-full h-full pt-5">

                            <button className=" bg-gradient-to-r from-teal-500  to-teal-800 hover:from-teal-600  hover:to-teal-900 rounded-sm w-full  py-3   text-white "> Register </button>
                            </div>
                        {/* {
                            error && <span> Error !!</span>
                        } */}
            </div>
                </form>
                     <p className=" text-teal-900"> You do have an account? <Link to="/login"><span className=" font-bold text-teal-900 hover:text-teal-700 cursor-pointer"> Login </span></Link> </p>
            
        </div>
        </div>
     );
}
 
export default RegisterPage;