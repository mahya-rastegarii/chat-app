import React from 'react'

type ButtonData = {
    text: string
}
const FormButton = ({text}: ButtonData) => {
  return (
    <button
    type="submit"
    className="w-full py-3 rounded-md bg-gradient-to-r from-gray-600 to-gray-900 text-white hover:from-gray-700 hover:to-black font-semibold transition"
     >
    {text}
  </button>
  )
}

export default FormButton