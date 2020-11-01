
const updateModal = $("#update-modal");
const updateCaseNumberField = $("#update-case-number");
const updateCaptionField = $("#update-caption");
const updatePFNameField = $("#update-plaintiff-fName");
const updatePLNameField = $("#update-plaintiff-lName");
const updatePAttyFNameField = $("#update-pAttorney-fName");
const updatePAttyLNameField = $("#update-pAttorney-lName");
const updateDFNameField = $("#update-defendant-fName");
const updateDLNameField = $("#update-defendant-lName");
const updateDAttyFNameField = $("#update-dAttorney-fName");
const updateDAttyLNameField = $("#update-dAttorney-lName");
const updateAmountField = $("#update-amount-in-controversy");


updateBtn.on("click", function(event) {
    event.preventDefault();
    const caseID = $(this).parent().data("id");
    $.ajax({
        // URL NEEDS TO BE UPDATED ONCE DEPLOYED
        url: "http://localhost:8080/api/cases",
        method: "GET"
    }).then(response => {
        const i = caseID - 1;
        const caseNumber = response[i].caseNumber;
        const caption = response[i].caption;
        const pFName = response[i].Plaintiff.FName;
        const pLName = response[i].Plaintiff.LName;
        const pAttyFName = response[i].PlaintiffAttorney.FName;
        const pAttyLName = response[i].PlaintiffAttorney.LName;
        const dFName = response[i].Defendant.FName;
        const dLName = response[i].Defendant.LName;
        const dAttyFName = response[i].DefenseAttorney.def_attorneyFName;
        const dAttyLName = response[i].DefenseAttorney.def_attorneyLName;
        const amountInControversy = response[i].amntCntrvsy;
        updateCaseNumberField.val(caseNumber);
        updateCaptionField.val(caption);
        updatePFNameField.val(pFName);
        updatePLNameField.val(pLName);
        updatePAttyFNameField.val(pAttyFName);
        updatePAttyLNameField.val(pAttyLName);
        updateDFNameField.val(dFName);
        updateDLNameField.val(dLName);
        updateDAttyFNameField.val(dAttyFName);
        updateDAttyLNameField.val(dAttyLName);
        updateAmountField.val(amountInControversy);
    })
});

