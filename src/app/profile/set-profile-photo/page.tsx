
import Image from "next/image";

const SetProfilePhoto = () => {
    return ( 
        <div className=" flex lg:px-28 bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 h-full w-full ">
             <div className=" container flex flex-col justify-center items-center w-3/4  md:w-2/4  lg:w-2/6 m-auto shadow-lg shadow-teal-900 bg-white rounded-md  py-5 space-y-4">

               <div className=" rounded-full border-2 border-teal-800">
                   <Image  src="public/pic/camera.svg" alt="cameraAdd" width={90} className=" m-5" height={90}/>
               </div>

                 <div className=" flex flex-col w-full justify-center items-center space-y-2">

                        <input type="file" className=" mb-5" id="imageFile" accept="image/*" style={{display: "none"}} />
                        <label htmlFor="imageFile" className=" bg-gradient-to-r from-teal-500  to-teal-800 hover:from-teal-600  hover:to-teal-900 px-5 rounded-md py-3 text-white cursor-pointer">
                           Set Profile
                        </label>

                        <button className=" bg-gradient-to-r from-teal-500  to-teal-800 px-5 rounded-md py-3 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed  " disabled> Go To Home </button>
                       </div>
             </div>
        </div>
     );
}
 
export default SetProfilePhoto;