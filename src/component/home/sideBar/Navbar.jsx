
// import { useContext } from 'react';
import {FiLogOut} from 'react-icons/fi'
// import { AuthContext } from '../../../context/AuthContext';
import ImgUser from "/img/user.png"
const Navbar = () => {


    // const {currentUser} = useContext(AuthContext)
    return (
        <div className=" flex justify-between items-center bg-teal-700 px-3 py-4 h-full">
            <h1 className=" font-bold text-2xl text-white">Hi Chat!</h1>
            <div className=" flex justify-center items-center space-x-2 h-full">
               <div className=' flex justify-center items-center r-2 space-x-2 h-full'>
               <img src={ImgUser} alt=" user image" width="48"  className=" rounded-full" />
                <h2 className=' text-white  text-lg'>name</h2>
               </div>
                <button className=" font-bold text-2xl text-teal-500 hover:text-teal-600 rounded-sm p-1 " title='logout'><FiLogOut/></button>
                
            </div>
        </div>
    )
}

export default Navbar;