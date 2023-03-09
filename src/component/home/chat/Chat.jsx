
import NavbarChat from "./NavbarChat"
import ChatScreen from "./ChatScreen"
import Input from "./Input"


const Chat = () => {
    return(
        <div className=" flex flex-col h-full">
            <NavbarChat/>
            <ChatScreen/>
            <Input/>

        </div>
    )
}

export default Chat

