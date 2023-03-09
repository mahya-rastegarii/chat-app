import Sidebar from "../component/home/sideBar/Sidebar"
import Chat from "../component/home/chat/Chat"
const HomePage = () => {
 return (
   
    <div className=" w-3/4 h-3/4  rounded-lg overflow-hidden flex justify-center items-center shadow-md shadow-teal-200">
          
          <div className=" h-full w-1/3 bg-gradient-to-b from-teal-700 via-teal-500 to-teal-300 ">
             <Sidebar/>
          </div>

        <div className=" h-full w-2/3">
            <Chat/>
        </div>
    </div>
 )   
}

export default HomePage;