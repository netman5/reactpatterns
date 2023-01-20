import React from 'react'

const Users = ({ data, ...props }) => {
  return (
    <div {...props}>
      <h1>Users</h1>
      <ul>
        {data.map(({ name, id, phone, email, address, company }) => (
          <li key={id}>
            <div>
              <span>{name}</span>
              <span>Phone: {phone}</span>
              <span>Email: {email}</span>
              <span>Address: {address.street}, {address.city}.</span>
              <span>Work at: {company.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users