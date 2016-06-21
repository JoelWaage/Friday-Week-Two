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

    if (meat === "love") {
      alert("carnivore!");
    } else if (meat === "hate") {
      alert("vegan!");
    } else {
      alert("raw!");
    };

    if (fire === "fireYes") {
      alert("Fire!!!!");
    } else if (fire ==="fireMaybe") {
      alert("fire?");
    } else {
      alert("damp!");
    }

    if (electricity === "electricityYes") {
      alert("Edison's Child");
    } else if (electricity === "electricityMaybe") {
      alert("happy camper");
    } else {
      alert("full ludite");
    }


    // alert(personName);
    // alert(email);
    // alert(what);
    // alert(meat);
    // alert(fire);
    // alert(electricity);
    // alert(lizards);

  });
});
