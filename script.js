
var button=document.getElementById("button");
button.addEventListener("click",calculate);
function calculate(){
    var bill=document.getElementById("bill").value;
var share=document.getElementById("share").value;
var tip=document.getElementById("tip").value;
var amountBox =document.getElementById("amount");
amountBox.style.display="inline"
var amount=(bill*tip)/share;
    let total=document.getElementById("totalamount");
    total.innerHTML=`Rs ${amount} !`;
    
}
