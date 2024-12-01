fetch('developments/developments_cards1.html')
    .then(response => response.text())
    .then(data => document.getElementById('developments1').innerHTML = data);

fetch('developments/developments_cards2.html')
    .then(response => response.text())
    .then(data => document.getElementById('developments2').innerHTML = data);

fetch('streams/stream1.html')
    .then(response => response.text())
    .then(data => document.getElementById('stream1').innerHTML = data);

$(document).ready(function(){
    $('.modal').modal();
});