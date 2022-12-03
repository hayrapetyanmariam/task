import React from 'react'
import TicketItem from '../ticetItem/TicketItem'
import '../ticketList/TicketList.css'

const TicketList = ({tickets, Booked}) => {
  return (
    <div className='TicketList'>
        {
            tickets.map((ticket, id) =>{
                return <TicketItem 
                    key={id}
                    ticket = {ticket}
                    Booked = {Booked}
                />
            })
        }
    </div>
  )
}

export default TicketList