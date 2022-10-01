import React from 'react';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import {useState, useEffect} from 'react'
import axios from 'axios'
import { ITicket } from './models';
import aviasalesLogo from './images/Logo.png'
import Checkbox from './components/CheckBox/CheckBox';

function App() {
	const [searchId, setSearchId] = useState('')
	const [tickets, setTickets] = useState([])
	const [loader, setLoader]= useState(false)
	const [error, setError]= useState(false)
	const [stopped, setStopped] = useState(false)
	const [amount,setAmount] = useState(5)
	async function getSearchId(){
		try{
			const response = await axios.get('https://front-test.dev.aviasales.ru/search')
			const searchId = await response.data.searchId
			setSearchId(searchId);
			return searchId
		}
		catch(e:any){
			setError(e.message)
		}
	}
	
	async function getData(id:string){
		console.log(id);
		try{
			const response :any = await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
			if (!response.data.stop) 
				setStopped(true)

			return response.data.tickets
		}catch(error:any){
			setError(error.message);
		}
	}
	
	useEffect(()=> {
		setLoader(true)
		getSearchId()
			.then(id=>getData(id))
			.then(res=>{setTickets(res); setLoader(false)})
		
	}, [])
	
  return (
    <div className="App">
		<div className='logo'>
			<img  src={aviasalesLogo} alt="avisales" />
		</div>

		<div className='main'>
			<Checkbox/>
			<div className='tickets'>
				<ul className='ticketsOptionsList'>
					<li className="ticketsOption">Самый дешёвый</li>
					<li className="ticketsOption">Самый быстрый</li>
					<li className="ticketsOption">Оптимальный</li>
				</ul>
				{loader
				?<div>Loading...</div>
				:error?<div>{error}</div>
				:tickets.slice(0,amount).map((el:ITicket, index:number)=>
					<div key={index}>{el.price}</div>
					)
				}
				<button onClick={()=>setAmount(prev=>prev+=5)}>Показать ещё 5 билетов</button>
			</div>
		</div>
		
    </div>
  );
}

export default App;
