import React, {useState, useEffect} from 'react';
import cl from './CheckBox.module.scss'
interface ICheckboxProps{
	title:string,
	id:number|string,
	setTransfersAmount:(value:(number|string)[])=>void,
	transfersAmount:(number|string)[],
	value:number[]
}
const Checkbox = ({title, id, setTransfersAmount, transfersAmount, value}:ICheckboxProps) => {
	return (
		<div className={cl.checkBox}>
			<input onChange={()=>setTransfersAmount(
				id==='all'?transfersAmount.includes('all')?[]:['all',0,1,2,3]
				:transfersAmount.includes(id)?transfersAmount.filter(el=>(el!==id&&el!=='all')):[...transfersAmount, id])} 
			type="checkbox" checked={transfersAmount.includes(id)} className={cl['custom-checkbox']} id={`checkbox${id}`} name="checkbox" value="yes"/>
			<label htmlFor={`checkbox${id}`}>{title}</label>
		</div>
	);
};

export default Checkbox;