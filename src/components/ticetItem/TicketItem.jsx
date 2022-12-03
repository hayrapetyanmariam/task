import React, { useState, useEffect } from 'react'
import '../ticetItem/TicketItem.css'

const TicketItem = ({ticket, Booked}) => {

  
  return (
    <div className='TicketItem'>
        <h5 className='title'>{ticket.title}</h5>
        <img src={ticket.image_path} />
        <h5 className='date'>{ticket.date}</h5>
        <h5 className='time'>{ticket.time}</h5>
        
        {
          ticket.booked === false && <button className='btn' onClick={()=>Booked(ticket.id, true)}>Book</button>
        }
        {
          ticket.booked === true && <span>Booked</span>
        }
    </div>
  )
}

export default TicketItem