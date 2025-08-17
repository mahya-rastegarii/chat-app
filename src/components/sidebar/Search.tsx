
import UserImage from "../user/UserImage";



const Search = () => {

    return(
        <div className=" absolute w-full shadow-2xl bg-gray-900 z-10">
        <div className="  flex justify-start items-center p-2">
        <input className=" bg-transparent border-0 outline-none text-white w-full placeholder:text-gray-400 focus:placeholder:text-gray-500  " placeholder=" Search User ... " />
        </div>
        {
         <div  className=" flex space-x-3   p-2 mt-3 hover:bg-gray-900 transition-all duration-300 ease-in delay-75  cursor-pointer">
          <UserImage/>
            <div className="">
                <h2 className="font-bold text-lg text-white">User </h2>
            </div>
        </div>
        }
        </div>
    )
}

export default Search;