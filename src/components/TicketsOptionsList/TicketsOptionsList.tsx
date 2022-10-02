import React from 'react';
import cl from './TicketsOptionsList.module.scss'
const TicketsOptionsList = () => {
	return (
		<ul className={cl.ticketsOptionsList}>
			<li className={cl.ticketsOption}>Самый дешёвый</li>
			<li className={cl.ticketsOption}>Самый быстрый</li>
			<li className={cl.ticketsOption}>Оптимальный</li>
		</ul>
	);
};

export default TicketsOptionsList;