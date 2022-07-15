import React from 'react'

function Card({items}) {
    const {name, role, id, email, officeNumber}= items;
  return (
    <>
        <div className="card">
            <div className="card-header">
                <h3>{name}</h3>
                <p>{role}</p>
            </div>
            <div className="card-content">
                <p>ID: {id}</p>
                <p>Email: {email}</p>
                <p>Office Number: {officeNumber}</p>
            </div>

        </div>
    </>
  )
}

export default Card