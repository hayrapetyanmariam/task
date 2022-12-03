import React from 'react'
import '../booking/Booking.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Booking = () => {

  const [users, setUsers] = useState([]);
  const [approve, setApprove] = useState(0);
  const navigate = useNavigate();

  const Approve = async(id, approve)=>{
    const result = await axios.patch("http://localhost:3000/tickets/" + id, {
      approve: approve 
    });
    console.log(result.data);

    const newUser = users.map(el=>{
     if(el.id == id)  el.approve = approve;
         return el;
      } 
    )
    setApprove(newUser);
  }

  useEffect(()=>{
    loadUsers();
  }, []);

  const loadUsers = async()=>{
    const result = await axios.get('http://localhost:3000/tickets');
    setUsers(result.data);
}

  return (
    <div className='Booking'>
      <table>
        <thead>
  <tr>
    <th>Play Name</th>
    <th>Spectator name</th>
    <th>Booked Date</th>
    <th>Starus</th>
  </tr>
  </thead>
  <tbody>
 
 {
 
  users.map((user, index)=>(
    <tr key={index}>
        <td>{user.id}</td>
        <td>{user.title}</td>
        <td>{user.date}</td>
        <td> 
          {
            user.approve === 0 && <div>
             <button onClick={()=> Approve( user.id, 1)} className="approved">Approved</button>
             <button onClick={()=>Approve( user.id, 2)} className="rejected">Rejected</button>
            </div>  
          }

          {
            user.approve === 1 && <span className='approve'>Approved</span>
          }

          {
            user.approve === 2 && <span className='reject'>Rejected</span>
          }

          {
            user.booked === true  && <span>Pending...</span>
          }
          
        </td>
    </tr>
   ) 
  )
 }

  </tbody>
</table>

    </div>
  )
}

export default Booking