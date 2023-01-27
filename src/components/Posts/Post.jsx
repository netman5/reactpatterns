import React from 'react'

const Post = ({ data, loading, error }) => {
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>{error.message} with code {error.code}</div>
  }
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>

          </div>
        )
      })}
    </div>
  )
}

export default Post