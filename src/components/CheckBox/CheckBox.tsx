import React from 'react';
import cl from './CheckBox.module.scss'
interface ICheckboxProps{
	title:string,
	id:number
}
const Checkbox = ({title, id}:ICheckboxProps) => {
	return (
		<div className={cl.checkBox}>
			<input type="checkbox" className={cl['custom-checkbox']} id={`checkbox${id}`} name="checkbox" value="yes"/>
			<label htmlFor={`checkbox${id}`}>{title}</label>
		</div>
	);
};

export default Checkbox;