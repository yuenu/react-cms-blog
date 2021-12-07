import React from 'react'
import Image from 'next/image'

function Author({ author }) {
  return (
    <div className="relative p-12 mt-20 mb-8 text-center bg-black rounded-lg bg-opacity-20">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          src={author.photo.url}
          alt={author.name}
          unoptimized
          width="100px"
          height="100px"
          className="align-middle rounded-full"
        />
      </div>
        <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
        <p className="text-lg text-white">{author.bio}</p>
    </div>
  )
}

export default Author
