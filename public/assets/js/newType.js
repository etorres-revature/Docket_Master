$(document).ready(function () {
    $("#create-type").on("submit", (e) => {
      e.preventDefault();
  
      const type = $("#type").val().trim();
  
      newType = {
        Field: type,
      };
  
      $.ajax("/api/types", {
        type: "POST",
        data: newType,
      }).then(() => {
        location.reload();
        alert("You've added a new type of case to the database.");
      });
    });
  });
  