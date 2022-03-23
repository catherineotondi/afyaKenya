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

  let reviewerCount = 0;
  let totalRating = 0;
  let c = console.log;

  $("#feedbackBtn").click(function (e) {
    e.preventDefault();

    let name = $("#pages-name").val();
    let email = $("#pages-email").val();
    let rating = $("#pages-rating").val();
    let message = $("#pages-message").val();

    function UserDetails(name, email, rating, message) {
      this.name = name;
      this.email = email;
      this.rating = rating;
      this.message = message;
    }

    let userCreate = (name, email, rating, message) => {
      let user = new UserDetails(name, email, rating, message);
      reviewerCount += 1;
      totalRating += parseInt(user.rating);
      getAverage(totalRating, reviewerCount);
      // return user;
    };

    let getAverage = (totalRating, reviewerCount) => {
      let avarage = Math.floor(totalRating / reviewerCount);
      $("#avarageOut").text(avarage.toString());
      outputComments(message, name);
    };

    let outputComments = (message, name) => {
      $("#feedbackOut").prepend(`
          <div class="userOutContainer container">
            <p class="userName">${name}</p>
            <p class="userComment">${message}</p>
          </div>
      `);
      $("#userNumOut").text(reviewerCount.toString());
    };

    userCreate(name, email, rating, message);
    //c(reviewerCount, totalRating);
  });
});
