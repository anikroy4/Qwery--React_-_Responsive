import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({src, alt,className}) => {
  return (
    <>
        <Link>
        <picture>
            <img className={`${className}`}src={src} alt={alt} />
        </picture>
        </Link>
    </>
  )
}

export default Image