//JS code for adding a new Plaintiff to that table
$(document).ready(function () {
  $("#create-plaintiff").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const plaintFName = $("#plaintiffFName").val().trim();
    const plaintLName = $("#plaintiffLName").val().trim();

    //creating an object to map the user entered input to the table rows
    newPlaintiff = {
      FName: plaintFName,
      LName: plaintLName,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/plaintiffs", {
      type: "POST",
      data: newPlaintiff,
    }).then(() => {
      //reloading the page and letting the user know the operation was successful
      location.reload();
      alert("You've added a new Plaintiff to the database.");
    });
  });
});
