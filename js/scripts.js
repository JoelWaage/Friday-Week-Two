$(document).ready(function() {
  $("#blanks form").submit(function() {
    var personName = $("input#personName").val();
    var email = $("input#userEmail").val();
    var what = $("input#what").val();
    var meat = $("input:radio[name=meat]:checked").val();
    var fire = $("input:radio[name=fire]:checked").val();
    var electricity = $("#electricity").val();

    if (meat === "love") {
      if (fire === "fireYes") {
        alert("You should go to the Mezozoic Era");
      } else if (fire === "fireMaybe") {
        alert("You should go to Ancient France with early Man")''
      } else if (fire === "fireNo") {
        alert("You should got to Medieval Europe");
      }

    }



    $(".personName").append(personName).val();

    // alert(personName);
    // alert(email);
    // alert(what);
    // alert(meat);
    // alert(fire);
    // alert(electricity);


  });
});
