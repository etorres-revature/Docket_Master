$(document).ready(function () {
  $("#create-pAtty").on("submit", (e) => {
    e.preventDefault();

    const pAttyFName = $("#pAttyFName").val().trim();
    const pAttyLName = $("#pAttyLName").val().trim();
    const pAttyBarNo = $("#pAttyBarNo").val().trim();

    newPAtty = {
      FName: pAttyFName,
      LName: pAttyLName,
      barNumber: pAttyBarNo,
    };

    $.ajax("/api/plaintiff_attorneys", {
      type: "POST",
      data: newPAtty,
    }).then(() => {
      location.reload();
      alert("You've added a new Plaintiff Attorney to the database.");
    });
  });
});
