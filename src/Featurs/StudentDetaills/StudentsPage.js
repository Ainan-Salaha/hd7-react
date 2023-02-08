import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import StudentTable from './StudentTable'

const StudentsPage = () => {
    const data=useSelector((state)=> state.Student)
  return (
    <div>
        <span id='name'>Student Details</span>
        <Link to='/studentpage' className='add'>
            <button className='btn'>Add New Students</button>
        </Link>
        <div>
            {data.stdArr.length ? <StudentTable/> : ""}
        </div>

    </div>
  )
}

export default StudentsPage