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

    $("#scrollDown").show();

    if (meat === "raw") {
      if (lizards === "1" || "2") {
        $("#mezozoic").show();
      } else if (lizards === "3" || "4") {
        $("#caveman").show();
        }
    } else if (meat === "love") {
      if (fire === "fireYes") {
        $("#caveman").show();
      } else if (fire === "fireMaybe") {
        $("#old-west").show();
      } else if (fire === "fireNo") {
        $("#medieval").show();
      }
    } else if (meat === "hate") {
      if (fire === "fireYes") {
        $("#old-west").show();
      } else {
        $("#nyc").show();;
      }
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
