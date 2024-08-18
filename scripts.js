fetch('developments/developments_cards.html')
    .then(response => response.text())
    .then(data => document.getElementById('developments').innerHTML = data);

$(document).ready(function(){
    $('.modal').modal();
});