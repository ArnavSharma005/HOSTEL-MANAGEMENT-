import React from 'react'

type workerLeave={
  name:string,
  type:string,
  phoneNumber:number ,
  Days:number,
  from:string,
  to:string
}

const Worker:React.FC<workerLeave> = ({name,type,phoneNumber,Days,from,to}) => {
  return (
    <div>
      <li className="pl-3 grid grid-cols-6 gap-4">
      <p className='w-[150px]' >{name}</p>
      <p className='w-[150px]'>{type}</p>
      <p className='w-[150px]'>{phoneNumber}</p>
      <p className='w-[150px]'>{Days}</p>
      <p className='w-[150px]'>{from}</p>
      <p className='w-[150px]'>{to}</p>
    </li>
    </div>
  )
}

export default Worker