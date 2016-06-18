$(document).ready(function() {
  $("#blanks form").submit(function() {
    var personName = $("input#personName").val();
    var email = $("input#userEmail").val();
    var what = $("input#what").val();
    var meat = $("input:radio[name=meat]:checked").val();
    var fire = $("input:radio[name=fire]:checked").val();
    var electricity = $("#electricity").val();

    $(".personName").append(personName).val();

    alert(personName);
    alert(email);
    alert(what);
    alert(meat);
    alert(fire);
    alert(electricity);


  });
});
