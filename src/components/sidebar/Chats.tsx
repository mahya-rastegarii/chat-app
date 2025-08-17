
import UserImage from "../user/UserImage";



const Chats = () => {
    
  

    return ( 
        <>

        <div  className=" flex space-x-3  p-2 mt-3 hover:bg-gray-900 transition-all duration-300 ease-in delay-75  cursor-pointer">
       
       <UserImage/>
        
            <div className="">
                <h2  className="font-bold text-lg text-white"> user</h2>
                <span  className="text-slate-300 text-sm">Hello</span>
            </div>
        </div>

        </>
     );
}

export default Chats;
 
