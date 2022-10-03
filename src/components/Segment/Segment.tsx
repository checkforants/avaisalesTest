import React from 'react';
import {ISegment} from '../../models'
import cl from './Segment.module.scss'
const Segment = (props:{segment:ISegment}) => {
	const segment = props.segment 
	
	const departureInMillisec = new Date(segment.date).getTime()
	const durationInMillisec = segment.duration*60000
	
	
	
	const departure = new Date(departureInMillisec).toLocaleTimeString()
	const duration =  new Date(durationInMillisec).toLocaleTimeString()
	const arrival = new Date(durationInMillisec + departureInMillisec).toLocaleTimeString()
	const stopsAmountStr = segment.stops.length===0?'0 ПЕРЕСАДОК':segment.stops.length===1?'1 ПЕРЕСАДКА': `${segment.stops.length} ПЕРЕСАДКИ`
	
	
	
	return (
		<div className={cl.segment}>
			<div className={cl.part}>
				<div className={cl.title}>
					{segment.origin} - {segment.destination}
				</div>
				<div className={cl.body}>
					{`${departure.slice(0, 5)} - ${arrival.slice(0, 5)}`}
				</div>
			</div>
			<div className={cl.part}>
				<div className={cl.title}>
					В ПУТИ
				</div>
				<div className={cl.body}>
					{Math.floor(durationInMillisec/3600000)}ч {Math.floor(durationInMillisec%3600000)/60000}м
				</div>
			</div>
			<div className={cl.part}>
				<div className={cl.title}>
					{stopsAmountStr}
				</div>
				<div className={cl.body}>
					{segment.stops.join(',')}
				</div>
			</div>
		</div>

	);
};

export default Segment;