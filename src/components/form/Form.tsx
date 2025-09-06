import React from "react";

type formData = {

    submited: () => void;
    title: string;
    children: React.ReactNode;
    
}

const Form = ({ submited, title , children} : formData) => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
    <div className="w-[90%] sm:w-2/3 md:w-2/5 lg:w-1/3 xl:w-1/4 p-6 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-xl shadow-black/30">
      <h1 className="text-3xl font-bold text-white text-center mb-2">Hi Chat</h1>
      <p className="text-center text-white/80 text-lg font-medium mb-6">{title }</p>
  
      <form onSubmit={submited} className="flex flex-col space-y-5">
        {
            children
        }
      </form>
  </div>
</div>
  )     
}

export default Form