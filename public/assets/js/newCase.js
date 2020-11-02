$(document).ready(function() {

    // THIS SECTION  IS FOR PERFORMING THE AUTO COMPLETE FOR THE INPUT FIELDS

    // DEFENDANTS:  function to query the database for all defendants and filter the results as they are typed in the field
    // let defendantResults = async function(searchText) {
    //     //use fetch to get the data back from the api
    //     const res = await fetch('/api/defendants');
    //     const defendants = await res.json();
    //     let fullNames = [];
    //     defendants.forEach(item => {
    //         let name = `${item.FName} ${item.LName}`;
    //         fullNames.push(name);
    //     });

    //     let matches = fullNames.filter(fullname => {
    //         const regex = new RegExp(`${searchText}`, 'gi');
    //         return fullname.match(regex);
    //     })
    //     if (searchText.length === 0) {
    //         matches = []
    //         $('#defendant-match-list').html(html);
    //     }

    //     // console.log(matches);
    //     outputHTML(matches, '#defendant-match-list');


    // }

    let defendantResults = async function(searchText) {
        //use fetch to get the data back from the api
        const res = await fetch('/api/defendants');
        const defendants = await res.json();
        let fullNames = [];
        defendants.forEach(item => {
            let name = {
                id: item.id,
                name: `${item.FName} ${item.LName}`
            }
            fullNames.push(name);
        });

        let matches = fullNames.filter(fullname => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return fullname.name.match(regex);
        })
        if (searchText.length === 0) {
            matches = []
            $('#defendant-match-list').html(html);
        }

        // console.log(matches);
        outputHTML(matches, '#defendant-match-list');


    }

    // PLAINTIFFS:  function to query the database for all defendants and filter the results as they are typed in the field
    let plaintiffResults = async function(searchText) {
        //use fetch to get the data back from the api
        const res = await fetch('/api/plaintiffs');
        const plaintiffs = await res.json();
        let fullNames = [];
        plaintiffs.forEach(item => {
            let name = {
                id: item.id,
                name: `${item.FName} ${item.LName}`
            }
            fullNames.push(name);
        });

        let matches = fullNames.filter(fullname => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return fullname.name.match(regex);
        })
        if (searchText.length === 0) {
            matches = []
            $('#plaintiff-match-list').html(html);
        }

        // console.log(matches);
        outputHTML(matches, '#plaintiff-match-list');


    }

    // PLAINTIFFS ATTORNEYS:  function to query the database for all defendants and filter the results as they are typed in the field
    let pAttorneyResults = async function(searchText) {
        //use fetch to get the data back from the api
        const res = await fetch('/api/plaintiff_attorneys');
        const pAttorney = await res.json();
        let fullNames = [];
        pAttorney.forEach(item => {
            let name = {
                id: item.id,
                name: `${item.FName} ${item.LName}`
            }
            fullNames.push(name);
        });

        let matches = fullNames.filter(fullname => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return fullname.name.match(regex);
        })
        if (searchText.length === 0) {
            matches = []
            $('#pAttorney-match-list').html(html);
        }

        // console.log(matches);
        outputHTML(matches, '#pAttorney-match-list');

    }


    // DEFENSE ATTORNEYS:  function to query the database for all defendants and filter the results as they are typed in the field
    let dAttorneyResults = async function(searchText) {
        //use fetch to get the data back from the api
        const res = await fetch('/api/defense_attorneys');
        const dAttorney = await res.json();
        let fullNames = [];
        dAttorney.forEach(item => {
            let name = {
                id: item.id,
                name: `${item.def_attorneyFName} ${item.def_attorneyLName}`
            }
            fullNames.push(name);
        });

        let matches = fullNames.filter(fullname => {
            const regex = new RegExp(`${searchText}`, 'gi');
            return fullname.name.match(regex);
        })
        if (searchText.length === 0) {
            matches = []
            $('#dAttorney-match-list').html(html);
        }

        // console.log(matches);
        outputHTML(matches, '#dAttorney-match-list');

    }




    // Output html function for auto complete as user is typing 
    const outputHTML = function(matches, htmlTarget) {
            if (matches.length > 0) {
                const html = matches.map(
                    // match => `<span><p>${match.name}</p></span>`
                    match => `<option value='${match.name}'>`
                ).join('');
                console.log(html);
                $(htmlTarget).html(html);
                $('#defendant-name').data(`${match.id}`)

            }
        }
        //   add all the event listers for the input fields
    $('#defendant-name').on('input', () => defendantResults($('#defendant-name').val()));
    $('#plaintiff-name').on('input', () => plaintiffResults($('#plaintiff-name').val()));
    $('#pAttorney-name').on('input', () => pAttorneyResults($('#pAttorney-name').val()));
    $('#dAttorney-name').on('input', () => dAttorneyResults($('#dAttorney-name').val()));

    // event listerns for when focus is removed from the fiels. will clean up and revmoew and of the autocomplete windows. 
    $('#defendant-name').on('blur', () => { $('#defendant-match-list').html('') });
    $('#plaintiff-name').on('blur', () => { $('#plaintiff-match-list').html('') });
    $('#pAttorney-name').on('blur', () => { $('#pAttorney-match-list').html('') });
    $('#dAttorney-name').on('blur', () => { $('#dAttorney-match-list').html('') });



    // event listener for the form submission 
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