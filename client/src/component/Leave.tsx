import React from 'react'

type workerLeave={
  name:string,
  type:string,
  phoneNumber:number | string,
  Days:number|string,
  from:string,
  to:string
}

const Leave:React.FC<workerLeave> = ({name,type,phoneNumber,Days,from,to}) => {
  return (
    <div>
      <li className="pl-3 grid grid-cols-8 gap-4">
      <p >{name}</p>
      <p>{type}</p>
      <p>{phoneNumber}</p>
      <p>{Days}</p>
      <p>{from}</p>
      <p>{to}</p>
      <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Allow</button>

      <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deny</button>

      

     
      
    </li>
    </div>
  )
}

export default Leave