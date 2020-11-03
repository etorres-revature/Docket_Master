//JS code for adding a new Type of case to that table
$(document).ready(function () {
  $("#create-type").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const type = $("#type").val().trim();

    //creating an object to map the user entered input to the table rows
    newType = {
      Field: type,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/types", {
      type: "POST",
      data: newType,
    }).then(() => {
      //reloading the page and letting the user know that the operation was successful
      location.reload();
      alert("You've added a new type of case to the database.");
    });
  });
});
