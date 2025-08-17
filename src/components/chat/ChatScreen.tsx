"use client"
import { useUser } from "@/context/UserContext";
import UserImage from "../user/UserImage";

const ChatScreen = () => {

    const {session, loading} = useUser();
    if (loading) return <div className="text-white">در حال بارگذاری...</div>;

    const username = session?.user.user_metadata.username;
    return (
    <div className=" bg-gray-100 overflow-y-scroll h-full ">

        <div className=" flex space-x-5  p-3 items-start mb-1 ">
            <div className=" w-auto">
            <UserImage/>
                <span className=" text-gray-900 text-sm"> Name </span>
            </div>
            <p className=" bg-white text-gray-900  max-w-lg w-auto rounded-xl rounded-tl-none p-2 mt-2"> Lorem ipsum dolor sit repellendus pariatur ex. Ap veniam similique quos in.</p>
        </div>

        <div className="chat-reverse">

            <div className=" w-auto">
            <UserImage username={username}/>
                <span className=" text-slate-700 text-sm"> { username}</span>
            </div>
            <p className="">repellendus pariatur ex. Ap veniam similique quos in.</p>
        </div>
        
    
    </div>
    
    );
}

 
export default ChatScreen;
