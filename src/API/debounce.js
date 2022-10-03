export const debounce = (callback, ms)=>{
	let timeout;
	return function(){
		const fncall = () =>{callback.apply(this, arguments)}
		clearTimeout(timeout)
		setTimeout(fncall, ms);
	}
}