let counterEle= document.getElementById('counterValue');

function onIncrement(){
    let previousCounterEle = counterEle.textContent;
    let updatedCounterEle = parseInt(previousCounterEle)+1;
    counterEle.textContent = updatedCounterEle;

    if(updatedCounterEle > 0){
        counterEle.style.color="Green";
    }else if(updatedCounterEle < 0){
        counterEle.style.color="Red";

    } else{
        counterEle.style.color="black";
    }

}
function onDecrement(){
    let previousCounterEle = counterEle.textContent;
    let updatedCounterEle = parseInt(previousCounterEle)-1;
    counterEle.textContent = updatedCounterEle;

    if(updatedCounterEle >0){
        counterEle.style.color="Green";
        
    }else if(updatedCounterEle < 0){
        counterEle.style.color="Red";

    } else{
        counterEle.style.color="black";
    }


}
function onReset(){
    let updatedCounterEle = 0;
    counterEle.textContent  = updatedCounterEle;
    counterEle.style.color="black";

}