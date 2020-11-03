//JS code for adding a new Division to that table
$(document).ready(function () {
  $("#create-division").on("submit", (e) => {
    e.preventDefault();

    //grabbing the values entered by the user on the form
    const division = $("#division").val().trim();
    const judgeFName = $("#judgeFName").val().trim();
    const judgeLName = $("#judgeLName").val().trim();
    const roomNumber = $("#roomNumber").val().trim();

    //creating an object to map the user entered input to the table rows
    newPAtty = {
      division,
      judgeFName,
      judgeLName,
      roomNumber,
    };

    //ajax sending the values to the route as a POST request
    $.ajax("/api/divisions", {
      type: "POST",
      data: newPAtty,
    }).then(() => {
      //reloading the page and letting the user know the operation was successful
      location.reload();
      alert("You've added a new Judge and Division to the database.");
    });
  });
});
