$(document).ready(function () {
    $("#create-plaintiff").on("submit", (e) => {
      e.preventDefault();
  
      const plaintFName = $("#plaintiffFName").val().trim();
      const plaintLName = $("#plaintiffLName").val().trim();
  
      newPlaintiff = {
        FName: plaintFName,
        LName: plaintLName,
      };
    
      $.ajax("/api/plaintiffs", {
        type: "POST",
        data: newPlaintiff,
      }).then(() => {
        location.reload();
        alert("You've added a new Plaintiff to the database.");
      });
    });
  });
  