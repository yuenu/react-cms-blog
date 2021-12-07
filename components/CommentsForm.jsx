import React, { useRef, useState, useEffect } from 'react'

import { submitComment } from '../service'

function CommentForm({ slug }) {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name')
    emailEl.current.value = window.localStorage.getItem('email')
  }, [])

  const handleCommentSubmission = () => {
    setError(false)

    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) return setError(true)

    const commentObj = { name, email, comment, slug }

    if(storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('email', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('email', email)
    }

    submitComment(commentObj)
      .then((res) => {
        setShowSuccessMessage(true)
        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000)
      }) 
  }

  return (
    <div className="p-8 pb-12 mb-8 bg-white rounded-lg shadow-lg">
      <h3 className="pb-4 mb-8 text-xl font-semibold border-b">Leave a Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <label htmlFor="comment">Comment</label>
        <textarea
          ref={commentEl}
          className="w-full p-4 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
          name="comment"
          placeholder="Comment"
        ></textarea>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            ref={nameEl}
            className="w-full p-2 px-4 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            name="name"
            placeholder="Name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            ref={emailEl}
            className="w-full p-2 px-4 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-gray-200"
            name="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            ref={storeDataEl}
            id="storeData"
            name="storeData"
            value="true"
          />
          <label htmlFor="storeData" className="ml-2 text-gray-500 cursor-pointer select-none">Save my e-mail and name for the next time I comment.</label>
        </div>
      </div>
      {error && (
        <p className="text-xs text-red-500">All fields are required.</p>
      )}
      <div className="mt-8">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="inline-block px-8 py-3 text-lg text-white transition duration-300 bg-pink-600 rounded-full cursor-pointer ease hover:bg-indigo-900 "
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment Submit
          </span>
        )}
      </div>
    </div>
  )
}

export default CommentForm
