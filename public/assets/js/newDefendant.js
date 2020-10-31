$(document).ready(function () {
  $("#create-defendant").on("submit", (e) => {
      console.log(e)
    e.preventDefault();

    const defFName = $("#defendantFName").val().trim();
    console.log("Defendant first name", defFName)
    const defLName = $("#defendantLName").val().trim();
    console.log("Defendant Last name", defLName)

    newDefendant = {
      FName: defFName,
      LName: defLName,
    };
    console.log("inside jquery", newDefendant);
    $.ajax("/api/defendants", {
      type: "POST",
      data: newDefendant,
    }).then(() => {
      console.log("inside promise", newDefendant);
      location.reload();
      alert("You've added a new Defendant to the database.");
    });
  });
});
