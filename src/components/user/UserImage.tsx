

import Image from 'next/image';
import React from 'react'

export type UserType = {
  username?: string | null;
  src?: string | null;
}

const UserImage = ({username, src} : UserType) => {

 

  return (
    <>
    {
        src ? <Image src={src} alt=" user image" className=" rounded-full" width={40} height={40}/>
        : <span className=" rounded-full bg-pink-600 flex justify-center items-center w-10 h-10 text-white ">{username?.slice(0, 1).toUpperCase()}</span>
    }
    </>
  )
}

export default UserImage