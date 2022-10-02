import axios from 'axios';
import React from 'react';
import Segment from '../Segment/Segment';
import { ITicket } from './../../models';
import cl from './Ticket.module.scss'
const Ticket = (props:{ticket:ITicket}) => {
	console.log(props.ticket);
	const ticket = props.ticket 
	const start = new Date(Date.parse(ticket.segments[0].date)).getHours()
	const date = new Date(Date.parse(ticket.segments[0].date)+ticket.segments[0].duration).getHours()
	console.log(start, date);
	
	// console.log(Date.parse('2022-10-06T09:46:00.000Z'));
	
	return (
		<div className={cl.ticket}>
			<div className={cl.title}>
				<div>{ticket.price}</div>
				<img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt="carrier" />
			</div>

			<div className={cl.segments}>
				{ticket?.segments.map(segment=>
					<Segment segment={segment}></Segment>
					)}
			</div>
		</div>
	);
};

export default Ticket;