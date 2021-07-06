var dataLeft;
window.onload=()=>{
    dataLeft=document.getElementById("data-left");
}

function onSliderChange(){
    if(dataLeft)
    {
        let dataUsed=document.getElementById("data-slider").value;
        document.getElementById("data-used").textContent=dataUsed;
        dataLeft.textContent=1000-dataUsed;
    }
}