var tipPercentage=5;

window.onload = function(){
    var totalBill=document.getElementById("bill");
    //var tipPercent=document.querySelector('input[name="tip-percentage"]');
    var noOfPeople=document.getElementById("ppl");

    totalBill.addEventListener("change", function(){
        console.log(totalBill.value);
    })

    document.querySelectorAll('input[name="tip-percentage"]').forEach((input) => {
        input.addEventListener('change', changeTip);
    });

    noOfPeople.addEventListener("change", function(){
        console.log(noOfPeople.value);
    })

    function changeTip(event){
        console.log(event.target.id);
    }
}


