let count=0;
let pTag = document.getElementById("counter")
document.getElementById("incrementBtn").addEventListener("click",()=>{
	alert(count);
	count++
	counter.innerText=count
})