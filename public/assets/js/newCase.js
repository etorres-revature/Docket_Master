$(document).ready(function() {

    // const matchList = document.getElementById('defendant-match-list');

    console.log('in the addCase js file');

    // function to query the database for all defendants and filter the results as they are typed in the field
    let defendantResults = async searchText => {
        //use fetch to get the data back from the api
        const res = await fetch('/api/defendants');
        const defendants = await res.json();
        let fullNames = [];
        defendants.forEach(item => {
            let name = `${item.FName} ${item.LName}`;
            fullNames.push(name);
        });

        let matches = fullNames.filter(fullname => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return fullname.match(regex);
        })
        if (searchText.length === 0) {
            matches = []
            $('#defendant-match-list').html(html);
        }

        // console.log(matches);
        outputHTML(matches);

    }

    const outputHTML = matches => {
            if (matches.length > 0) {
                const html = matches.map(
                    match => `<span><p>${match}</p></span>`
                ).join('');
                console.log(html);
                $('#defendant-match-list').html(html);

            }


        }
        //   event listener for defendant name input field 
    $('#update-defendant-fName').on('input', () => defendantResults($('#update-defendant-fName').val()));



    // event listener for form submission 
    $("#add-new-case").on("click", (e) => {
        console.log("---------------->>>>>>>>>>>>>>>submit button pressed");
        e.preventDefault();
        const caseNum = $("#update-case-number").val();
        const caption = $("#update-caption").val();
        const plaintFName = $("#update-plaintiff-fName").val();
        const pAttyFName = $("#update-pAttorney-fName").val();
        const pAttyLName = $("#update-pAttorney-lName").val();
        const defFName = $("#update-defendant-fName").val();
        const defLName = $("#update-defendant-lName").val();
        const dAttyFname = $("#update-dAttorney-fName").val();
        const dAttyLname = $("#update-dAttorney-lName").val();
        const amntCntrvsy = $("#update-amount-in-controversy").val();

        const newCase = {
            caseNumber: caseNum,
            caption: caption,
            PlaintiffId: plaintFName,
            PlaintiffAttorneyId: pAttyFName,
            DefendantId: defFName,
            DefenseAttorneyId: dAttyFname,
            amntCntrvsy: amntCntrvsy,
        };

        console.log(newCase);
        $.ajax("/api/cases", {
            type: "POST",
            data: newCase,
        }).then(() => {
            location.reload();
            alert("A new case has been entered into Docket Master.").val();
        });
    });
});