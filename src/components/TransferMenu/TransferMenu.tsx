import React from 'react';
import Checkbox from './../CheckBox/CheckBox';
import cl from './TransferMenu.module.scss'
const TransferMenu = () => {
	return (
		<div className={cl.transferMenu}>
			<span>Количество пересадок</span>
			<Checkbox title={'Без пересадок'} id={1}/>
			<Checkbox title={'Без пересадок'} id={2}/>
			<Checkbox title={'Без пересадок'} id={3}/>
			<Checkbox title={'Без пересадок'} id={4}/>
			<Checkbox title={'Без пересадок'} id={5}/>
		</div>
	);
};

export default TransferMenu;