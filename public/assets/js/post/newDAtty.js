//JS code for adding a new Defense Attorney to that table
$(document).ready(function () {
  $("#create-dAtty").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const dAttyFName = $("#dAttyFName").val().trim();
    const dAttyLName = $("#dAttyLName").val().trim();
    const dAttyBarNo = $("#dAttyBarNo").val().trim();

    //creating an object to map the user entered input to the table rows
    newDAtty = {
      def_attorneyFName: dAttyFName,
      def_attorneyLName: dAttyLName,
      barNumber: dAttyBarNo,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/defense_attorneys", {
      type: "POST",
      data: newDAtty,
    }).then(() => {
      //reloading the page and letting the user know the operation was successful
      location.reload();
      alert("You've added a new Defense Attorney to the database.");
    });
  });
});
