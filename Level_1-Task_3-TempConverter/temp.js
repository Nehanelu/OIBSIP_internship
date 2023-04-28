let Celsius = document.getElementById("Celsius");
let fahrenhite= document.getElementById("fahrenhite");
function celToFar(){
    let output =(parseFloat(Celsius.value)*9/5)*32;
    fahrenhite.value = parseFloat(output.toFixed(2));
    
}
 function farToCel(){
    let output =(parseFloat(fahrenhite.value)-32)*5/9;
    Celsius.value = parseFloat(output.toFixed(2));
    console.log(output);
    
 }