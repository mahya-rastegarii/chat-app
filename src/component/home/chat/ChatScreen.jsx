import user from "/img/user.png"


const ChatScreen = () => {
    return (
    <div className=" bg-teal-50 overflow-y-scroll h-full ">

        <div className=" flex space-x-5  p-3 items-start mb-1 ">
            <div className=" w-auto">
                <img src= {user} alt=" user image" className=" rounded-full" width="40"/>
                <span className=" text-teal-900 text-sm"> Name</span>
            </div>
            <p className=" bg-white text-teal-900  max-w-lg w-auto rounded-xl rounded-tl-none p-2 mt-2"> Lorem ipsum dolor sit repellendus pariatur ex. Ap veniam similique quos in.</p>
        </div>

        <div className="chat-reverse">

            <div className=" w-auto">
                <img src= {user} alt=" user image" className=" rounded-full" width="40"/>
                <span className=" text-slate-700 text-sm"> Name</span>
            </div>
            <p className="">repellendus pariatur ex. Ap veniam similique quos in.</p>
        </div>
        
    
    </div>
    
    );
}

 
export default ChatScreen;