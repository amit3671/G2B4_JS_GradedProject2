
var prev = document.getElementById("prev");
var next = document.getElementById("next");


var searchbox = document.getElementById("searchbox");

var Phone = document.querySelector('#Phone');
var Email = document.querySelector('#Email');

var SkillName = document.querySelector('#SkillName');
var Level = document.querySelector('#Level');
var Types = document.querySelector('#Types');

var HobbiesList = document.querySelector('#HobbiesList');

var Name = document.querySelector('#Name');
var AppliedFor = document.querySelector('#AppliedFor');
var image = document.querySelector('#Image');
var named = document.querySelector('#name');

var CompanyName = document.querySelector('#CompanyName');
var Position = document.querySelector('#Position');
var StartDate = document.querySelector('#StartDate');
var EndDate = document.querySelector('#EndDate');
var Summary = document.querySelector('#Summary');

var ProjectTopic = document.querySelector('#PTopic');
var ProjectDetails = document.querySelector('#PDetails');

var UG = document.querySelector('#UG');
var PU = document.querySelector('#PU');
var HighSchool = document.querySelector('#HighSchool');

var InternshipCompanyName = document.querySelector('#InternshipCompanyName');
var InternshipPosition = document.querySelector('#InternshipPosition');
var InternshipStartDate = document.querySelector('#InternshipStartDate');
var InternshipEndDate = document.querySelector('#InternshipEndDate');
var InternshipSummary = document.querySelector('#InternshipSummary');

var AchDetails = document.querySelector('#AchDetails');

const candidateindex = [];
var ApplicationCount = 0;

alert("Click on submit and then next for candidates details");

function searchfunction() {

    fetch("http://127.0.0.1:5500/Data%20(1).json")
        .then(res => res.json())

        .then(data => {

            var candidate1Position = data['resume'][0]['basics']['AppliedFor']
            var candidate2Position = data['resume'][1]['basics']['AppliedFor']
            var candidate3Position = data['resume'][2]['basics']['AppliedFor']
            var candidate4Position = data['resume'][3]['basics']['AppliedFor']
            var candidate5Position = data['resume'][4]['basics']['AppliedFor']
            var candidate6Position = data['resume'][5]['basics']['AppliedFor']


            var positionsearch = [
                candidate1Position,
                candidate2Position,
                candidate3Position,
                candidate4Position,
                candidate5Position,
                candidate6Position,
            ];


            for (var count = 0; count < 6; count++) {
                if (searchbox.value == positionsearch[count]) {
                    candidateindex[ApplicationCount] = count;
                    ApplicationCount = ApplicationCount + 1;
                    console.log(count);
                    console.log(candidateindex[ApplicationCount]);
                }
            }
            console.log(ApplicationCount);

            if (ApplicationCount > 0) {
                var ApplicationCountcheck = 0;
                var k = candidateindex[ApplicationCountcheck];

                let idValueinc = function () {
                    if (k <= candidateindex[candidateindex.length - 1]) {
                        candidateindex[ApplicationCountcheck] = candidateindex[ApplicationCountcheck + 1];
                        console.log(candidateindex[ApplicationCountcheck]);
                        console.log(candidateindex[3]);
                    }
                    if (candidateindex[ApplicationCountcheck] == candidateindex[1]) {
                        prev.style.display = "inline-block";
                    }
                    if (candidateindex[ApplicationCountcheck] == candidateindex[candidateindex.length - 2]) {
                        prev.style.display = "inline-block";
                    }
                    if (candidateindex[ApplicationCountcheck] == candidateindex[candidateindex.length - 1]) {
                        next.style.display = "none";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            {

                                var phone = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['phone']
                                var email = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['email']

                                Phone.innerHTML = `${phone}`
                                Email.innerHTML = `${email}`

                                var skillName = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['name']
                                var level = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['level']
                                var types = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][i]

                                SkillName.innerHTML = `${skillName}</span>`
                                Level.innerHTML = `<br>${level}</span><br>`
                                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][candidateindex[ApplicationCountcheck]]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][2]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][3]} </li><ul>`

                                HobbiesList.innerHTML = `<ul><li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][0]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][1]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][2]} </li> <ul>`

                                var name = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['name']
                                var appliedFor = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['AppliedFor']

                                Name.innerHTML = `${name}`
                                AppliedFor.innerHTML = `Applied For : ${appliedFor}`
                                console.log(appliedFor);
                                var companyName = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Company Name']
                                var position = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Position']
                                var startDate = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Start Date']
                                var endDate = data['resume'][candidateindex[ApplicationCountcheck]]['work']['End Date']
                                var summary = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Summary']

                                CompanyName.innerHTML = `<b>Company : </b>${companyName}`
                                Position.innerHTML = `<b>Position : </b>${position}`
                                StartDate.innerHTML = `<b>Start Date : </b>${startDate}`
                                EndDate.innerHTML = `<b>End Date : </b>${endDate}`
                                Summary.innerHTML = `<b>Summary : </b>${summary}`

                                var projectTopic = data['resume'][candidateindex[ApplicationCountcheck]]['projects']['name']
                                var projectDetails = data['resume'][candidateindex[ApplicationCountcheck]]['projects']['description']

                                ProjectTopic.innerHTML = `<h3>Projects </h3><b>${projectTopic} : </b>`
                                ProjectDetails.innerHTML = `${projectDetails}`

                                var UGinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["institute"]
                                var UGcourse = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["course"]
                                var UGstartdate = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["Start Date"]
                                var UGenddate = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["End Date"]
                                var UGcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["cgpa"]

                                UG.innerHTML = `<b>UG : </b>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  `

                                var PUinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['Senior Secondary']["institute"]
                                var PUcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['Senior Secondary']["cgpa"]

                                PU.innerHTML = `<b>PU : </b>${PUinstitute} | ${PUcgpa} `

                                var HighSchoolinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['High School']['institute']
                                var HighSchoolcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['High School']['cgpa']

                                HighSchool.innerHTML = `<b>High School : </b>${HighSchoolinstitute} | ${HighSchoolcgpa}`

                                var internshipCompanyName = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Company Name']
                                var internshipPosition = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Position']
                                var internshipStartDate = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Start Date']
                                var internshipEndDate = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['End Date']
                                var internshipSummary = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Summary']

                                InternshipCompanyName.innerHTML = `<b>Company Name : </b>${internshipCompanyName}`
                                InternshipPosition.innerHTML = `<b>Position : </b>${internshipPosition}`
                                InternshipStartDate.innerHTML = `<b>Start Date : </b>${internshipStartDate}`
                                InternshipEndDate.innerHTML = `<b>End Date : </b>${internshipEndDate}`
                                InternshipSummary.innerHTML = `<b>Summary : </b>${internshipSummary}`

                                var achDetails = data['resume'][candidateindex[ApplicationCountcheck]]['achievements']['Summary']

                                AchDetails.innerHTML = ` ${achDetails}`

                            }

                        })

                }

                next.addEventListener("click", idValueinc);

                let idValuedec = function () {

                    if (candidateindex[ApplicationCountcheck] > candidateindex[0]) {
                        candidateindex[ApplicationCountcheck] = candidateindex[ApplicationCountcheck - 1];
                    }

                    if (candidateindex[ApplicationCountcheck] == candidateindex[0]) {
                        next.style.display = "inline-block";
                    }

                    if (candidateindex[ApplicationCountcheck] == candidateindex[0]) {
                        prev.style.display = "none";
                    }

                    if (candidateindex[ApplicationCountcheck] == candidateindex[candidateindex.length - 2]) {
                        next.style.display = "inline-block";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            {

                                var phone = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['phone']
                                var email = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['email']

                                Phone.innerHTML = `${phone}`
                                Email.innerHTML = `${email}`

                                var skillName = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['name']
                                var level = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['level']
                                var types = data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][i]

                                SkillName.innerHTML = `${skillName}</span>`
                                Level.innerHTML = `<br>${level}</span><br>`
                                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][1]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][2]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['skills']['keywords'][3]} </li><ul>`

                                HobbiesList.innerHTML = `<ul><li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][0]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][1]} </li> <li>${data['resume'][candidateindex[ApplicationCountcheck]]['interests']['hobbies'][2]} </li> <ul>`

                                var name = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['name']
                                var appliedFor = data['resume'][candidateindex[ApplicationCountcheck]]['basics']['AppliedFor']

                                Name.innerHTML = `${name}`
                                AppliedFor.innerHTML = `Applied For : ${appliedFor}`
                                var companyName = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Company Name']
                                var position = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Position']
                                var startDate = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Start Date']
                                var endDate = data['resume'][candidateindex[ApplicationCountcheck]]['work']['End Date']
                                var summary = data['resume'][candidateindex[ApplicationCountcheck]]['work']['Summary']

                                CompanyName.innerHTML = `<b>Company : </b>${companyName}`
                                Position.innerHTML = `<b>Position : </b>${position}`
                                StartDate.innerHTML = `<b>Start Date : </b>${startDate}`
                                EndDate.innerHTML = `<b>End Date : </b>${endDate}`
                                Summary.innerHTML = `<b>Summary : </b>${summary}`

                                var projectTopic = data['resume'][candidateindex[ApplicationCountcheck]]['projects']['name']
                                var projectDetails = data['resume'][candidateindex[ApplicationCountcheck]]['projects']['description']

                                ProjectTopic.innerHTML = `<h3>Projects </h3><b>${projectTopic} : </b>`
                                ProjectDetails.innerHTML = `${projectDetails}`

                                var UGinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["institute"]
                                var UGcourse = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["course"]
                                var UGstartdate = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["Start Date"]
                                var UGenddate = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["End Date"]
                                var UGcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['UG']["cgpa"]

                                UG.innerHTML = `<b>UG : </b>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  `

                                var PUinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['Senior Secondary']["institute"]
                                var PUcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['Senior Secondary']["cgpa"]

                                PU.innerHTML = `<b>PU : </b>${PUinstitute} | ${PUcgpa} `

                                var HighSchoolinstitute = data['resume'][candidateindex[ApplicationCountcheck]]['education']['High School']['institute']
                                var HighSchoolcgpa = data['resume'][candidateindex[ApplicationCountcheck]]['education']['High School']['cgpa']

                                HighSchool.innerHTML = `<b>High School : </b>${HighSchoolinstitute} | ${HighSchoolcgpa}`

                                var internshipCompanyName = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Company Name']
                                var internshipPosition = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Position']
                                var internshipStartDate = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Start Date']
                                var internshipEndDate = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['End Date']
                                var internshipSummary = data['resume'][candidateindex[ApplicationCountcheck]]['Internship']['Summary']

                                InternshipCompanyName.innerHTML = `<b>Company Name : </b>${internshipCompanyName}`
                                InternshipPosition.innerHTML = `<b>Position : </b>${internshipPosition}`
                                InternshipStartDate.innerHTML = `<b>Start Date : </b>${internshipStartDate}`
                                InternshipEndDate.innerHTML = `<b>End Date : </b>${internshipEndDate}`
                                InternshipSummary.innerHTML = `<b>Summary : </b>${internshipSummary}`

                                var achDetails = data['resume'][candidateindex[ApplicationCountcheck]]['achievements']['Summary']

                                AchDetails.innerHTML = ` ${achDetails}`

                            }
                        })
                }

                prev.addEventListener("click", idValuedec);

            }

            else if (ApplicationCount == 0 && searchbox.value == "") {
                var i = -1;

                let idValueinc = function () {
                    if (i <= 5) {
                        i++;
                    }
                    if (i == 1) {
                        prev.style.display = "inline-block";
                    }
                    if (i == 4) {
                        prev.style.display = "inline-block";
                    }
                    if (i == 5) {
                        next.style.display = "none";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            {

                                var phone = data['resume'][i]['basics']['phone']
                                var email = data['resume'][i]['basics']['email']

                                Phone.innerHTML = `${phone}`
                                Email.innerHTML = `${email}`

                                var skillName = data['resume'][i]['skills']['name']
                                var level = data['resume'][i]['skills']['level']
                                var types = data['resume'][i]['skills']['keywords'][i]

                                SkillName.innerHTML = `${skillName}</span>`
                                Level.innerHTML = `<br>${level}</span><br>`
                                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][i]['skills']['keywords'][1]} </li> <li>${data['resume'][i]['skills']['keywords'][2]} </li> <li>${data['resume'][i]['skills']['keywords'][3]} </li><ul>`

                                HobbiesList.innerHTML = `<ul><li>${data['resume'][i]['interests']['hobbies'][0]} </li> <li>${data['resume'][i]['interests']['hobbies'][1]} </li> <li>${data['resume'][i]['interests']['hobbies'][2]} </li> <ul>`

                                var name = data['resume'][i]['basics']['name']
                                var appliedFor = data['resume'][i]['basics']['AppliedFor']

                                Name.innerHTML = `${name}`
                                AppliedFor.innerHTML = `Applied For : ${appliedFor}`
                                console.log(appliedFor);
                                var companyName = data['resume'][i]['work']['Company Name']
                                var position = data['resume'][i]['work']['Position']
                                var startDate = data['resume'][i]['work']['Start Date']
                                var endDate = data['resume'][i]['work']['End Date']
                                var summary = data['resume'][i]['work']['Summary']

                                CompanyName.innerHTML = `<b>Company : </b>${companyName}`
                                Position.innerHTML = `<b>Position : </b>${position}`
                                StartDate.innerHTML = `<b>Start Date : </b>${startDate}`
                                EndDate.innerHTML = `<b>End Date : </b>${endDate}`
                                Summary.innerHTML = `<b>Summary : </b>${summary}`

                                var projectTopic = data['resume'][i]['projects']['name']
                                var projectDetails = data['resume'][i]['projects']['description']

                                ProjectTopic.innerHTML = `<h3>Projects </h3><b>${projectTopic} : </b>`
                                ProjectDetails.innerHTML = `${projectDetails}`

                                var UGinstitute = data['resume'][i]['education']['UG']["institute"]
                                var UGcourse = data['resume'][i]['education']['UG']["course"]
                                var UGstartdate = data['resume'][i]['education']['UG']["Start Date"]
                                var UGenddate = data['resume'][i]['education']['UG']["End Date"]
                                var UGcgpa = data['resume'][i]['education']['UG']["cgpa"]

                                UG.innerHTML = `<b>UG : </b>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  `

                                var PUinstitute = data['resume'][i]['education']['Senior Secondary']["institute"]
                                var PUcgpa = data['resume'][i]['education']['Senior Secondary']["cgpa"]

                                PU.innerHTML = `<b>PU : </b>${PUinstitute} | ${PUcgpa} `

                                var HighSchoolinstitute = data['resume'][i]['education']['High School']['institute']
                                var HighSchoolcgpa = data['resume'][i]['education']['High School']['cgpa']

                                HighSchool.innerHTML = `<b>High School : </b>${HighSchoolinstitute} | ${HighSchoolcgpa}`

                                var internshipCompanyName = data['resume'][i]['Internship']['Company Name']
                                var internshipPosition = data['resume'][i]['Internship']['Position']
                                var internshipStartDate = data['resume'][i]['Internship']['Start Date']
                                var internshipEndDate = data['resume'][i]['Internship']['End Date']
                                var internshipSummary = data['resume'][i]['Internship']['Summary']

                                InternshipCompanyName.innerHTML = `<b>Company Name : </b>${internshipCompanyName}`
                                InternshipPosition.innerHTML = `<b>Position : </b>${internshipPosition}`
                                InternshipStartDate.innerHTML = `<b>Start Date : </b>${internshipStartDate}`
                                InternshipEndDate.innerHTML = `<b>End Date : </b>${internshipEndDate}`
                                InternshipSummary.innerHTML = `<b>Summary : </b>${internshipSummary}`

                                var achDetails = data['resume'][i]['achievements']['Summary']

                                AchDetails.innerHTML = ` ${achDetails}`

                                searchpost.addEventListener("click", searchfunction)
                            }

                        })

                }

                next.addEventListener("click", idValueinc);

                let idValuedec = function () {

                    if (i > 0) {
                        i--;
                    }

                    if (i == 0) {
                        next.style.display = "inline-block";
                    }

                    if (i == 0) {
                        prev.style.display = "none";
                    }

                    if (i == 4) {
                        next.style.display = "inline-block";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            {

                                var phone = data['resume'][i]['basics']['phone']
                                var email = data['resume'][i]['basics']['email']

                                Phone.innerHTML = `${phone}`
                                Email.innerHTML = `${email}`

                                var skillName = data['resume'][i]['skills']['name']
                                var level = data['resume'][i]['skills']['level']
                                var types = data['resume'][i]['skills']['keywords'][i]

                                SkillName.innerHTML = `${skillName}</span>`
                                Level.innerHTML = `<br>${level}</span><br>`
                                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][i]['skills']['keywords'][1]} </li> <li>${data['resume'][i]['skills']['keywords'][2]} </li> <li>${data['resume'][i]['skills']['keywords'][3]} </li><ul>`

                                HobbiesList.innerHTML = `<ul><li>${data['resume'][i]['interests']['hobbies'][0]} </li> <li>${data['resume'][i]['interests']['hobbies'][1]} </li> <li>${data['resume'][i]['interests']['hobbies'][2]} </li> <ul>`

                                var name = data['resume'][i]['basics']['name']
                                var appliedFor = data['resume'][i]['basics']['AppliedFor']

                                Name.innerHTML = `${name}`
                                AppliedFor.innerHTML = `Applied For : ${appliedFor}`
                                var companyName = data['resume'][i]['work']['Company Name']
                                var position = data['resume'][i]['work']['Position']
                                var startDate = data['resume'][i]['work']['Start Date']
                                var endDate = data['resume'][i]['work']['End Date']
                                var summary = data['resume'][i]['work']['Summary']

                                CompanyName.innerHTML = `<b>Company : </b>${companyName}`
                                Position.innerHTML = `<b>Position : </b>${position}`
                                StartDate.innerHTML = `<b>Start Date : </b>${startDate}`
                                EndDate.innerHTML = `<b>End Date : </b>${endDate}`
                                Summary.innerHTML = `<b>Summary : </b>${summary}`

                                var projectTopic = data['resume'][i]['projects']['name']
                                var projectDetails = data['resume'][i]['projects']['description']

                                ProjectTopic.innerHTML = `<h3>Projects </h3><b>${projectTopic} : </b>`
                                ProjectDetails.innerHTML = `${projectDetails}`

                                var UGinstitute = data['resume'][i]['education']['UG']["institute"]
                                var UGcourse = data['resume'][i]['education']['UG']["course"]
                                var UGstartdate = data['resume'][i]['education']['UG']["Start Date"]
                                var UGenddate = data['resume'][i]['education']['UG']["End Date"]
                                var UGcgpa = data['resume'][i]['education']['UG']["cgpa"]

                                UG.innerHTML = `<b>UG : </b>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  `

                                var PUinstitute = data['resume'][i]['education']['Senior Secondary']["institute"]
                                var PUcgpa = data['resume'][i]['education']['Senior Secondary']["cgpa"]

                                PU.innerHTML = `<b>PU : </b>${PUinstitute} | ${PUcgpa} `

                                var HighSchoolinstitute = data['resume'][i]['education']['High School']['institute']
                                var HighSchoolcgpa = data['resume'][i]['education']['High School']['cgpa']

                                HighSchool.innerHTML = `<b>High School : </b>${HighSchoolinstitute} | ${HighSchoolcgpa}`

                                var internshipCompanyName = data['resume'][i]['Internship']['Company Name']
                                var internshipPosition = data['resume'][i]['Internship']['Position']
                                var internshipStartDate = data['resume'][i]['Internship']['Start Date']
                                var internshipEndDate = data['resume'][i]['Internship']['End Date']
                                var internshipSummary = data['resume'][i]['Internship']['Summary']

                                InternshipCompanyName.innerHTML = `<b>Company Name : </b>${internshipCompanyName}`
                                InternshipPosition.innerHTML = `<b>Position : </b>${internshipPosition}`
                                InternshipStartDate.innerHTML = `<b>Start Date : </b>${internshipStartDate}`
                                InternshipEndDate.innerHTML = `<b>End Date : </b>${internshipEndDate}`
                                InternshipSummary.innerHTML = `<b>Summary : </b>${internshipSummary}`

                                var achDetails = data['resume'][i]['achievements']['Summary']

                                AchDetails.innerHTML = ` ${achDetails}`

                                searchpost.addEventListener("click", searchfunction)
                            }
                        })
                }

                prev.addEventListener("click", idValuedec);

            }

            else {
                document.querySelector("#top").innerHTML = `<h2> </h2>`;
                document.querySelector("#resumedetails").innerHTML = `<div style=" position: absolute; top:30%; left: 25%; width: 50%; box-shadow: 0.1em 0.1em 0.5em 0.5em lightblue; border-radius: 6%;"><h2 style="background-color: white; padding: 15%;"> <span style='font-size:300%; padding-right: 10%'>&#128551;</span> No such results found</h2></div>`;

                setTimeout(() => {
                    window.location.reload();
                    alert("Enter the correct Position for which you want to search the candidates")
                }, 3000);;

            }
        })






}

