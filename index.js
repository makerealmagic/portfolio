var drk = document.querySelector("#drk");
var bag = document.querySelector(".bag");
var bgd = document.querySelector(".bgd");
drk.addEventListener("click", function(){
    bag.classList.toggle("drkcng");
    bgd.classList.toggle("whtcng");
})