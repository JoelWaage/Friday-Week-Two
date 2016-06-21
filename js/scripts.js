var personName = '';
var email = '';
var what = '';
var meat = '';
var fire = '';
var electricty = '';
var lizards = '';


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();
    personName = $("input#personName").val();
    email = $("input#userEmail").val();
    what = $("input#what").val();
    meat = $("input:radio[name=meat]:checked").val();
    fire = $("input:radio[name=fire]:checked").val();
    electricity = $("input:radio[name=electricity]:checked").val();
    lizards = $("#lizards").val();

    alert(personName);
    alert(email);
    alert(what);
    alert(meat);
    alert(fire);
    alert(electricity);
    alert(lizards);

  });
});
