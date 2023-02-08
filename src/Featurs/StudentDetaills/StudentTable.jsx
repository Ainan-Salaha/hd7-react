import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StudentTable = () => {
  const data = useSelector((state) => state.Student);
  return (
    <div className="table">
      <table width='100%'>
        <thead>
          <tr>
            <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}> Name </th>
            <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}> Age </th>
            <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}> Course </th>
            <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}> Batch </th>
            <th style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}> Edit Info</th>
          </tr>
        </thead>

        <tbody>
        {
        data.stdArr.map((item,index) => (

            <tr key={index}>
            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.name}</td>
            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.age}</td>
            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.course}</td>
            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.batch}</td>
            <td style={{ backgroundColor: 'rgba(256, 255, 255, 0.2)' }}>{item.edit}<Link to={`/studentpage/${index+1}`} state={{details:item,id:index}} id='edit'>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
