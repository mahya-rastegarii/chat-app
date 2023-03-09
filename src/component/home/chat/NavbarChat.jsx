import {BsCameraVideoFill} from 'react-icons/bs';
import {HiUserAdd} from 'react-icons/hi';
import {MdOutlineMoreHoriz} from 'react-icons/md';


const NavbarChat = () =>{
    return(
        <div className=" flex bg-teal-500  justify-between items-center px-3 h-1/6">
                <h3 className=' font-bold text-lg text-white'> Name </h3>
                <div className=' flex justify-center items-center  text-white text-xl space-x-2'>
                   <BsCameraVideoFill className=' cursor-pointer hover:text-teal-100 '/>
                   <HiUserAdd className=' cursor-pointer hover:text-teal-100'/>
                   <MdOutlineMoreHoriz className=' cursor-pointer hover:text-teal-100'/>

                </div>
        </div>
    )
}

export default NavbarChat; 