import React from 'react';
import {ISegment} from '../../models'

const Segment = (props:{segment:ISegment}) => {
	const segment = props.segment 
	return (
		<div>{segment.origin} - {segment.destination}
			<div>
				{new Date(segment.date).getHours()} - {new Date(Date.parse(segment.date)+segment.duration*3600000).getHours()}
			</div>
		</div>
	);
};

export default Segment;