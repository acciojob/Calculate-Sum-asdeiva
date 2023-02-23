//your JS code here. If required.
let n1=document.getElementById('n1').value
let n2=document.getElementById('n2').value
let sum=document.getElementById('sum')
function sumOf2(){
  console.log(parseInt(n1))
  lett ans = parseInt(n1+n2)
  if(ans!=0){
    sum.innerHTML = parseInt(n1+n2)
  }
	
}