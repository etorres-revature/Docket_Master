//JS code for adding a new Plaintiff Attorney to that table
$(document).ready(function () {
  $("#create-pAtty").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const pAttyFName = $("#pAttyFName").val().trim();
    const pAttyLName = $("#pAttyLName").val().trim();
    const pAttyBarNo = $("#pAttyBarNo").val().trim();

    //creating an object to map the user entered input to the table rows
    newPAtty = {
      FName: pAttyFName,
      LName: pAttyLName,
      barNumber: pAttyBarNo,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/plaintiff_attorneys", {
      type: "POST",
      data: newPAtty,
    }).then(() => {
      //reloading the page and letting the user know the operation was successful
      location.reload();
      alert("You've added a new Plaintiff Attorney to the database.");
    });
  });
});
