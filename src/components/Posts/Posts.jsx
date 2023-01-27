import React from 'react'
import Provider from '../Provider/Provider'
import Post from './Post'

const Posts = () => {
  return (
    <div>
      <h1>Posts</h1>
      <Provider url="https://jsonplaceholder.typicode.com/posts?userId=1" render={(data, loading, error) => {
        return (
          <Post data={data} loading={loading} error={error} />
        )
      }} />
    </div>
  )
}

export default Posts