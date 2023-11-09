import React from 'react'
import { Link } from 'react-router-dom'

const Image = ({src, alt}) => {
  return (
    <>
        <Link>
        <picture>
            <img src={src} alt={alt} />
        </picture>
        </Link>
    </>
  )
}

export default Image