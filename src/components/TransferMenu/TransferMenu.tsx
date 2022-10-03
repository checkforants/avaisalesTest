import React, {useState} from 'react';
import Checkbox from './../CheckBox/CheckBox';
import cl from './TransferMenu.module.scss'
interface ItransferProps{
	transfersAmount:(number|string)[], 
	setTransfersAmount:(value:(number|string)[])=>void
}
const TransferMenu = ({transfersAmount, setTransfersAmount}:ItransferProps) => {
	
	return (
		<div className={cl.transferMenu}>
			<span>Количество пересадок</span>
			{/* onChange={()=>setTransfersAmount([0,1,2,3])} */}
			<Checkbox setTransfersAmount={setTransfersAmount} value={[1,2,3,4,5]} transfersAmount={transfersAmount} title={'Все'} id='all'/>
			<Checkbox setTransfersAmount={setTransfersAmount} value={[2]} transfersAmount={transfersAmount} title={'Без пересадок'} id={0}/>
			<Checkbox setTransfersAmount={ setTransfersAmount} value={[3]} transfersAmount={transfersAmount} title={'1 пересадка'} id={1}/>
			<Checkbox setTransfersAmount={setTransfersAmount} value={[4]} transfersAmount={transfersAmount} title={'2 пересадки'} id={2}/>
			<Checkbox setTransfersAmount={setTransfersAmount} value={[5]} transfersAmount={transfersAmount} title={'3 пересадки'} id={3}/>
		</div>
	);
};

export default TransferMenu;