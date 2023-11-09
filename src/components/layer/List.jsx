import React from 'react'

const List = ( {className,children}) => {
  return (
    <>
        <ul className={`flex ${className}`}>{children}</ul>
    </>
  )
}

export default List