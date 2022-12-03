import React from 'react'
import { useState, useEffect } from 'react'
import { json } from 'react-router-dom';
import TicketList from '../../components/ticketList/TicketList';
import axios from 'axios';


const Plays = () => {

    const [tickets, setTickets] = useState([]);
    const [booked, setBooked] = useState(false);

    const Booked = async(id, booked)=>{
    const result = await axios.patch("http://localhost:3000/tickets/" + id, {
      booked: booked
    })
    console.log(result.data);

    const bookTicket = tickets.map(el =>{
      if(el.id == id) el.booked = !booked
      return el;
    })
    setBooked(bookTicket)
  }

    useEffect(()=>{
        fetch('http://localhost:3000/tickets')
        .then(response => response.json())
        .then(json => setTickets(json))
    })

  return (
    <div className='Plays'>
        <TicketList tickets = {tickets} Booked = {Booked}/>
    </div>
  )
}

export default Plays