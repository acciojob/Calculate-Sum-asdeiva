//your JS code here. If required.
let n1=document.querySelector('#n1')
let n2=document.querySelector('#n2')
let sum=document.querySelector('#sum')
function sumOf2(){
	let n1 = parseFloat(n1.value);
	let n2 = parseFloat(n2.value);
	let result = n1+n2;
	sum.innerHTML = result
	
}