$(document).ready(function () {
  $("#add-new-case").on("submit", (e) => {
    e.preventDefault();
    const caseNum = $("#add-case-number");
    const caption = $("#add-caption");
    const plaintFName = $("#add-plaintiff-fName");
    const plaintLName = $("#add-plaintiff-lName");
    const pAttyFName = $("#add-pAttorney-fName");
    const pAttyLName = $("#add-pAttorney-lName");
    const defFName = $("#add-defendant-fName");
    const defLName = $("#add-defendant-lName");
    const dAttyFname = $("#add-dAttorney-fName");
    const dAttyLname = $("#add-dAttorney-lName");
    const amntCntrvsy = $("#add-amount-in-controversy");

    const newCase = {
      caseNumber: caseNum,
      caption: caption,
      Plaintiff: plaintFName,
      pAttorney: pAttyFName,
      Defendant: defFName,
      dAttorney: dAttyFname,
      amntCntrvsy: amntCntrvsy,
    };

    $.ajax("/api/cases", {
      type: "POST",
      data: newCase,
    }).then(() => {
      location.reload();
      alert("A new case has been entered into Docket Master.");
    });
  });
});
