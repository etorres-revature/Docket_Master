//JS code for adding a new Defendant to that table
$(document).ready(function () {
  $("#create-defendant").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const defFName = $("#defendantFName").val().trim();
    const defLName = $("#defendantLName").val().trim();

    //creating an object to map the user entered input to the table rows
    newDefendant = {
      FName: defFName,
      LName: defLName,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/defendants", {
      type: "POST",
      data: newDefendant,
    }).then(() => {
      //reloading the page and letting the user know the operation was successful
      location.reload();
      alert("You've added a new Defendant to the database.");
    });
  });
});
