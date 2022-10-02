import React from 'react';
import Checkbox from './../CheckBox/CheckBox';
import cl from './TransferMenu.module.scss'
const TransferMenu = () => {
	return (
		<div className={cl.transferMenu}>
			<span>Количество пересадок</span>
			<Checkbox title={'Без пересадок'}/>
			<Checkbox title={'Без пересадок'}/>
			<Checkbox title={'Без пересадок'}/>
			<Checkbox title={'Без пересадок'}/>
			<Checkbox title={'Без пересадок'}/>
		</div>
	);
};

export default TransferMenu;