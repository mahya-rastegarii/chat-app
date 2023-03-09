
// import { useContext, useState } from "react";
// import { collection, query , getDocs , where, doc, setDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
// import { db } from "../../../firebase";

import ImgUser from "/img/user.png"
// import { AuthContext } from "../../../context/AuthContext";
const Search = () => {

    // const {currentUser} = useContext(AuthContext)

    // const [userName , setUserName] = useState("");
    // const [user, setUser] = useState(null);
    // const [error, setError] = useState(false);


    // const handleSearch = async () =>{
    //  const q = query(collection( db , "users"), where("displayName", "==" , userName))

    //  try{

    //      const querySnapshot = await getDocs(q);
    //      querySnapshot.forEach((doc) => {
    
    //     setUser(doc.data())
    // });
    //  }catch(error){
    //     setError(true)
    //  }
    // }

    // const handelKey = (e) => {
    //     e.code === "Enter" && handleSearch()
    // }

    // const handleSelect = async() =>{
        
    //     // const combinedId = currentUser.uid > user.uid ? currentUser.uid +user.uid : user.uid +currentUser.uid;
    //     try { 

    //         const res = await getDoc(doc(db, "chats", combinedId))

    //         if(!res.exists()){

    //             await setDoc(doc(db, "chats" , combinedId),{ messages: []});

    //             await updateDoc(doc(db, "userChats" , currentUser.uid) ,{
    //                 [combinedId + ".userInfo"] : {
    //                     uid:user.uid,
    //                     displayName: user.displayName ,
    //                     photoURL : user.photoURL
    //                 },
    //                 [combinedId+".data"]:serverTimestamp()
    //             });

    //             await updateDoc(doc(db, "userChats" , user.uid) ,{
    //                 [combinedId+ ".userInfo"] : {
    //                     uid:currentUser.uid,
    //                     displayName: currentUser.displayName ,
    //                     photoURL : currentUser.photoURL
    //                 },
    //                 [combinedId+".data"]:serverTimestamp()
    //             });
                    
    //         }
    //     }catch(err ){}
    //     setUser(null);
    //     setUserName("")
    // }
    return(
        <div className="border-b border-teal-700 ">
        <div className="  flex justify-start items-center p-2">
        <input className=" bg-transparent border-0 outline-none text-white w-full placeholder:text-teal-100 focus:placeholder:text-teal-500  " placeholder=" Search User ... " />

        </div>
        {/* { error && <span className=" text-red-700  z-10"> User Not Found! </span>} */}
        {
         <div  className=" flex space-x-3   p-2 mt-3 hover:bg-teal-900 transition-all duration-300 ease-in delay-75  cursor-pointer">
            <img src={ImgUser} width="50"  alt="user image " className=" rounded-full"/>
            <div className="">
                <h2 className="font-bold text-lg text-white">name</h2>
            </div>
        </div>
        }
        </div>
    )
}

export default Search;