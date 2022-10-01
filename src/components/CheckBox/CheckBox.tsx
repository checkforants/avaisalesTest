import React from 'react';
import cl from './CheckBox.module.scss'
const Checkbox = () => {
	return (
		<div className='checkBox'>
			<input type="checkbox" className={cl['custom-checkbox']} id="checkbox" name="checkbox" value="yes"/>
			<label htmlFor="checkbox">Happy</label>
		</div>
	);
};

export default Checkbox;