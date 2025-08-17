

import React from 'react'

export type UserType = {
  username?: string
}

const UserImage = ({username} : UserType) => {

 

  return (
    <>
         {/* <Image src="/pic/user.png" alt=" user image" className=" rounded-full" width={40} height={40}/> */}
         <span className=" rounded-full bg-pink-600 flex justify-center items-center w-10 h-10 text-white ">{username?.slice(0, 1).toUpperCase()}</span>
    </>
  )
}

export default UserImage