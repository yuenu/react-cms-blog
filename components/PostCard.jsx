import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="p-0 pb-12 mb-8 bg-white rounded-lg shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md pb-80">
        <img 
          src={post.featuredImage.url} 
          alt={post.title}
          className="absolute object-cover object-top w-full rounded-t-lg shadow-lg h-80 lg:rounded-lg" />
      </div>
      <h1 className="mb-8 text-3xl font-semibold text-center transition duration-300 cursor-pointer hover:text-pink-600">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="items-center justify-center w-full mb-8 text-center bloc lg:flex">
        <div className="flex items-center justify-center w-full mb-4 mr-8 lg:mb-0 lg:w-full">
          <img 
            src={post.author.photo.url}
            alt={post.author.name}
            width="30px"
            height="30px"
            className="align-middle rounded-full"  
          />
          <p className="inline text-gray-700 align-middle">{post.author.name}</p>
        </div>
      </div>
    </div>
  )
}

export default PostCard
