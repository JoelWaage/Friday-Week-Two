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





// $(document).ready(function() {
  $("#submit1").click(function(event) {
    $(".question1").hide();
    $(".question2").show();
    event.preventDefault();
  });

  $("#submit2").click(function(event) {
    $(".question2").hide();
    $(".question3").show();
    event.preventDefault();
  });

  $("#submit3").click(function(event) {
    $(".question3").hide();
    $(".question4").show();
    event.preventDefault();
  });

  $("#submit4").click(function(event) {
    $(".question4").hide();
    $(".question5").show();
    event.preventDefault();
  });

  $("#submit5").click(function(event) {
    $(".question5").hide();
    $(".question6").show();
    event.preventDefault();
  });

  $("#submit6").click(function(event) {
    $(".question6").hide();
    $(".vacationResult").show();
    event.preventDefault();
  });


});
