import React, { useEffect } from 'react'
import { UsePoststore } from '../store/Poststore.js'

function Posts() {
    const {posts , loading , error , fetchposts} = UsePoststore()
    useEffect(() => {
fetchposts()
    } , [fetchposts])

    if(loading) return <p>Loading </p>
    if(error) return <p>Error</p>
  return (
    <ul>
        {posts.map((p) => (
            <li key={p.id}>{p.title}</li>
        ))}
    </ul>
  )
}

export default Posts