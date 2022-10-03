import React from 'react';
// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />
import {useState, useEffect} from 'react'
import axios from 'axios'
import { ITicket } from './models';
import aviasalesLogo from './images/Logo.png'
import Checkbox from './components/CheckBox/CheckBox';
import Ticket from './components/Ticket/Ticket';
import TransferMenu from './components/TransferMenu/TransferMenu';
import TicketsOptionsList from './components/TicketsOptionsList/TicketsOptionsList';

function App() {
	const [searchId, setSearchId] = useState('')
	const [tickets, setTickets] = useState([])
	const [loader, setLoader]= useState(false)
	const [error, setError]= useState(false)
	const [stopped, setStopped] = useState(false)
	const [amount,setAmount] = useState(5)
	const [sortMethod, setSortMethod] = useState(1)

	
	
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
		
		try{
			const response :any = await axios.get(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
			if (!response.data.stop) 
				setStopped(true)
				setTickets(response.sort(compareFunction3));
			return response.data.tickets
		}catch(error:any){
			setError(error.message);
		}
	}
	function compareFunction(a:ITicket,b:ITicket){
		
		return a.price - b.price
	}
	function compareFunction2(a:ITicket,b:ITicket){
		let sum1 = 0;
		for (let elem of  a.segments){
			sum1+=elem.duration
		}
		let sum2 = 0;
		for (let elem of  b.segments){
			sum2+=elem.duration
		}
		return sum1 - sum2;
		// return a.segments[0].duration - b.segments[0].duration;
	}
	function compareFunction3(a:ITicket,b:ITicket){
		let sum1 = 0;
		let amount1 = 0
		for (let elem of  a.segments){
			sum1+=elem.duration
		}
		let sum2 = 0;
		let amount2 = 0
		for (let elem of  b.segments){
			sum2+=elem.duration
		}
		return sum1/1000*a.price- sum2/1000*b.price ;
		// return a.segments[0].duration - b.segments[0].duration;
	}
	useEffect(()=> {
		setLoader(true)
		getSearchId()
			.then(id=>getData(id))
			.then(res=>{
				setTickets(res.sort(compareFunction));
			 	setLoader(false)
			})
		
	}, [])
	
  return (
    <div className="App">
		<div className='logo'>
			<img  src={aviasalesLogo} alt="avisales" />
		</div>

		<div className='main'>
			<TransferMenu/>
			<div className='tickets'>
				<TicketsOptionsList sortMethod={sortMethod} setSortMethod={setSortMethod}/>
				{loader
				?<div>Loading...</div>
				:error?<div>{error}</div>
				:tickets.sort(sortMethod===1?compareFunction:sortMethod===2?compareFunction2:compareFunction3).slice(0,amount).map((el:ITicket, index:number)=>
					<Ticket key={index} ticket={el}></Ticket>
					)
				}
				<button onClick={()=>setAmount(prev=>prev+=5)}>Показать ещё 5 билетов</button>
			</div>
		</div>
		
    </div>
  );
}

export default App;
