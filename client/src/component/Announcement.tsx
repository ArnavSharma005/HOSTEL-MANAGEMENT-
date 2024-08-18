import React from 'react'

type Announce={
  url:string,
  text:string
}

const AnnouncementComponent:React.FC<Announce> = ({url,text}) => {
  return (
    <a href={url}>
    <div >
      <p className='font-bold text-custom-dark-blue'>{text}</p>
    </div>
    </a>
  )
}

export default AnnouncementComponent