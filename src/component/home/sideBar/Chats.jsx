

import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../../context/AuthContext";
import user from "/img/user.png"
const Chats = () => {
    
    // const {currentUser} = useContext(AuthContext);

    // const [ chats , setChats] = useState([])


    // useEffect(() => {
      
    //     const getChats = () =>{
    //         const unSub = onSnapshot(doc(db, "userChats" , currentUser.uid) , (doc) => {
    //             setChats(doc.data());
    //     });

    //     return () => {
    //         unSub();
    //     };
    //     };

    //     currentUser.uid && getChats();
    // } , [currentUser.uid]);

    // //    console.log(Object.entries(chats))
    // console.log(chats)

    return ( 
        <>
        {/* { */}
            {/* // Object.entries(chats)?.map((chat) => ( */}
        
        <div  className=" flex space-x-3  p-2 mt-3 hover:bg-teal-900 transition-all duration-300 ease-in delay-75  cursor-pointer">
            <img src={user} width="50" alt="user image " className=" rounded-full"/>
            <div className="">
                <h2  className="font-bold text-lg text-white">User</h2>
                <span  className="text-slate-300 text-sm">Hello</span>
            </div>
        </div>

            {/* ) */}
         {/* )} */}
       
        </>
     );
}

export default Chats;
 
