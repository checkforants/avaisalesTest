import React from 'react';
import cl from './CheckBox.module.scss'
interface ICheckboxProps{
	title:string
}
const Checkbox = ({title}:ICheckboxProps) => {
	return (
		<div className={cl.checkBox}>
			<input type="checkbox" className={cl['custom-checkbox']} id="checkbox" name="checkbox" value="yes"/>
			<label htmlFor="checkbox">{title}</label>
		</div>
	);
};

export default Checkbox;