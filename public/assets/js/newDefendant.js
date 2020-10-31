$(document).ready(function () {
  $("#create-defendant").on("submit", (e) => {
    e.preventDefault();

    const defFName = $("#defendantFName").val().trim();
    const defLName = $("#defendantLName").val().trim();

    newDefendant = {
      FName: defFName,
      LName: defLName,
    };

    $.ajax("/api/defendants", {
      type: "POST",
      data: newDefendant,
    }).then(() => {
      location.reload();
      alert("You've added a new Defendant to the database.");
    });
  });
});
