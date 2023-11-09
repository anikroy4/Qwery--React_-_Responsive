import React from 'react'
import { Link } from 'react-router-dom'

const ListItem = ({ListInnerItem , className, liclassName}) => {
  return (
    <>
        <li className={liclassName}>
            <Link className={` ${className}`} to="" >{ListInnerItem}</Link>
        </li>
    </>
  )
}

export default ListItem