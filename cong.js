window.onload = function(){
    var score = document.getElementsByClassName('valueScore')[0];
    score.innerHTML = localStorage.getItem("ipVal");
}