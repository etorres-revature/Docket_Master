$(document).ready(function () {
  $("#create-dAtty").on("submit", (e) => {
    e.preventDefault();

    const dAttyFName = $("#dAttyFName").val().trim();
    const dAttyLName = $("#dAttyLName").val().trim();
    const dAttyBarNo = $("#dAttyBarNo").val().trim();

    newDAtty = {
      def_attorneyFName: dAttyFName,
      def_attorneyLName: dAttyLName,
      barNumber: dAttyBarNo,
    };

    $.ajax("/api/defense_attorneys", {
      type: "POST",
      data: newDAtty,
    }).then(() => {
      location.reload();
      alert("You've added a new Defense Attorney to the database.");
    });
  });
});
