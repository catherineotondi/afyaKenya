$(document).ready(function () {
  //pauline
  //formVal
  $("#myForm").submit(function () {
    return formVal();

    function formVal() {
      var name = $("#landing-name").val();
      var email = $("#landing-email").val();
      var text = $("#landing-message").val();

      //validating name
      var regex1 = /^[A-Z a-z]+$/;
      if (name === "") {
        alert("Name cannot be blank");
        return false;
      } else if (name.length < 4) {
        alert("Name is too short");
        return false;
      } else if (!regex1.test(name)) {
        alert("Name should only contain alphabets");
        return false;
      }

      //validating email
      var regex2 = /^([A-Za-z0-9\!\.\-\]+)@([A-Za-z0-9]+)\.([A-Za-z0-9]+)(\.[A-Za-z0-9]+)?$/;
      if (email === "") {
        alert("Please input your email");
        return false;
      } else if (!regex2.test(email)) {
        alert("Invalid email.");
        return false;
      }

      //text area
      if (text === "") {
        alert("You have not entered a message");
        return false;
      } else {
        //return true;
        alert("Thank you " + name + ". Your message has been received.");
      }
    }
  });

  //sam
  $(".darkmode-toggle").click(function (e) {
    e.preventDefault();
    $("body").toggleClass("dark-mode");
    $(".hospitalss").toggleClass("dark-mode2");
    $(".card-body").toggleClass("dark-mode");
    $(".contactUs").toggleClass("dark-mode2");
    $("#moon").toggleClass("hide");
    $("#sun").toggleClass("hide");
    $(".darkmode-toggle").toggleClass("dark-mode");
  });
});
