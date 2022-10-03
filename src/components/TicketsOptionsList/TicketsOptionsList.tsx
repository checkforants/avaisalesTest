import React from 'react';
import cl from './TicketsOptionsList.module.scss'
interface IOption {
	sortMethod:number,
	setSortMethod:(active: number)=>void
}
const TicketsOptionsList = ({sortMethod, setSortMethod}:IOption) => {
	return (
		<ul className={cl.ticketsOptionsList}>
			<li onClick={()=>setSortMethod(1)} className={sortMethod===1?cl.ticketsOption +' '+ cl.selected:cl.ticketsOption}>Самый дешёвый</li>
			<li onClick={()=>setSortMethod(2)} className={sortMethod===2?cl.ticketsOption +' '+ cl.selected:cl.ticketsOption}>Самый быстрый</li>
			<li onClick={()=>setSortMethod(3)} className={sortMethod===3?cl.ticketsOption +' '+ cl.selected:cl.ticketsOption}>Оптимальный</li>
		</ul>
	);
};

export default TicketsOptionsList;