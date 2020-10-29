const updateBtn = $("#update-btn");
const updateModal = $("#update-modal");


updateBtn.click(function (event) {
    console.log("click");
    event.preventDefault();
    const caseID = $(this).parent().data("id");
    updateModal.modal(focus, populateUpdateFields(caseID));
});

function populateUpdateFields(id) {
    console.log("Populate update fields with an id of " + id);
}