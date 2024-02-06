
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

var candidateindex = [];
var ApplicationCount = 0;
var count = 0, initial = 0, second = 0, third = 0, fourth = 0, final = 0;

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


            for (count = 0; count < 6; count++) {
                if (searchbox.value == positionsearch[count]) {
                    candidateindex[ApplicationCount] = count;
                    ApplicationCount = ApplicationCount + 1;
                    if (ApplicationCount == 1) {
                        initial = count;
                    }
                    if (ApplicationCount == 2) {
                        second = count;
                    }
                    if (ApplicationCount == 3) {
                        third = count;
                    }
                    if (ApplicationCount == 4) {
                        fourth = count;
                    }
                    if (ApplicationCount == 5) {
                        final = count;
                    }
                }
            }

            if (ApplicationCount == 1) {
                fetch("http://127.0.0.1:5500/Data%20(1).json")
                    .then(res => res.json())

                    .then(data => {
                        console.log(initial);
                        count = initial;
                        next.style.display = "none";
                        prev.style.display = "none";

                        candidateDetails();
                    })
            }

            else if (ApplicationCount == 2) {
                fetch("http://127.0.0.1:5500/Data%20(1).json")
                    .then(res => res.json())

                    .then(data => {
                        console.log(initial);
                        count = initial;

                        candidateDetails();

                        let idValueinc = function () {
                            candidateDetails();
                            next.style.display = "none";
                            prev.style.display = "inline-block";
                        }

                        let idValuedec = function () {
                            candidateDetails();
                            count = initial;
                            if (count == initial) {
                                prev.style.display = "none";
                                candidateDetails();
                                count = second;
                                next.style.display = "inline-block";
                                next.addEventListener("click", idValueinc);
                            }
                        }

                        if (count == initial) {
                            prev.style.display = "none";
                            candidateDetails();
                            count = second;
                            next.addEventListener("click", idValueinc);
                        }

                        if (count == second) {
                            prev.style.display = "inline-block";
                            next.style.display = "none";
                            candidateDetails();
                            count = second;
                            prev.addEventListener("click", idValuedec);
                        }


                        next.addEventListener("click", idValueinc);


                        prev.addEventListener("click", idValuedec);
                    })
            }

            else if (ApplicationCount == 3) {
                fetch("http://127.0.0.1:5500/Data%20(1).json")
                    .then(res => res.json())

                    .then(data => {
                        console.log(initial);
                        count = initial;

                        candidateDetails();

                        let idValueinc = function () {
                            candidateDetails();
                            next.style.display = "none";
                            prev.style.display = "inline-block";

                            if (count == third) {
                                candidateDetails();
                                next.style.display = "inline-block";
                                prev.style.display = "inline-block";
                                prev.addEventListener("click", idValuedec);
                                next.addEventListener("click", idValueinc);
                            }

                            if (count == second) {
                                count = third;
                                candidateDetails();
                                next.style.display = "none";
                                prev.style.display = "inline-block";
                                prev.addEventListener("click", idValuedec);
                            }

                            if (count == initial) {
                                count = second;
                                candidateDetails();
                                next.style.display = "inline-block";
                                prev.addEventListener("click", idValuedec);
                                next.addEventListener("click", idValueinc);
                            }

                        }

                        let idValuedec = function () {
                            candidateDetails();
                            if (count == initial) {
                                prev.style.display = "none";
                                candidateDetails();
                                count = second;
                                next.style.display = "inline-block";
                                next.addEventListener("click", idValueinc);
                            }

                            if (count == second) {
                                prev.style.display = "none";
                                console.log(count);
                                count = initial;
                                candidateDetails();
                                next.style.display = "inline-block";
                                prev.style.display = "none";
                                next.addEventListener("click", idValueinc);
                            }

                            if (count == third) {
                                count = second;
                                candidateDetails();
                                prev.style.display = "inline-block";
                                next.style.display = "inline-block";
                                next.addEventListener("click", idValueinc);
                            }


                        }

                        if (count == initial) {
                            prev.style.display = "none";
                            candidateDetails();
                            count = second;
                            next.addEventListener("click", idValueinc);
                        }

                        if (count == second) {
                            prev.style.display = "inline-block";
                            next.style.display = "inline-block";
                            candidateDetails();
                            prev.addEventListener("click", idValuedec);
                            next.addEventListener("click", idValueinc);
                        }

                        if (count == third) {
                            prev.style.display = "inline-block";
                            next.style.display = "inline-block";
                            candidateDetails();
                            prev.addEventListener("click", idValuedec);
                            next.addEventListener("click", idValueinc);
                        }
                        next.addEventListener("click", idValueinc);


                        prev.addEventListener("click", idValuedec);
                    })
            }


            else if (searchbox.value == "") {
                count = -1;

                let idValueinc = function () {
                    if (count <= 5) {
                        count++;
                    }
                    if (count == 1) {
                        prev.style.display = "inline-block";
                    }
                    if (count == 4) {
                        prev.style.display = "inline-block";
                    }
                    if (count == 5) {
                        next.style.display = "none";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            candidateDetails();
                        })

                }

                next.addEventListener("click", idValueinc);

                let idValuedec = function () {

                    if (count > 0) {
                        count--;
                    }

                    if (count == 0) {
                        next.style.display = "inline-block";
                    }

                    if (count == 0) {
                        prev.style.display = "none";
                    }

                    if (count == 4) {
                        next.style.display = "inline-block";
                    }

                    fetch("http://127.0.0.1:5500/Data%20(1).json")
                        .then(res => res.json())

                        .then(data => {

                            candidateDetails();
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

            function candidateDetails() {

                var phone = data['resume'][count]['basics']['phone']
                var email = data['resume'][count]['basics']['email']

                Phone.innerHTML = `${phone}`
                Email.innerHTML = `${email}`

                var skillName = data['resume'][count]['skills']['name']
                var level = data['resume'][count]['skills']['level']
                var types = data['resume'][count]['skills']['keywords'][count]

                SkillName.innerHTML = `${skillName}</span>`
                Level.innerHTML = `<br>${level}</span><br>`
                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][count]['skills']['keywords'][count]} </li> <li>${data['resume'][count]['skills']['keywords'][2]} </li> <li>${data['resume'][count]['skills']['keywords'][3]} </li><ul>`

                HobbiesList.innerHTML = `<ul><li>${data['resume'][count]['interests']['hobbies'][0]} </li> <li>${data['resume'][count]['interests']['hobbies'][1]} </li> <li>${data['resume'][count]['interests']['hobbies'][2]} </li> <ul>`

                var name = data['resume'][count]['basics']['name']
                var appliedFor = data['resume'][count]['basics']['AppliedFor']

                Name.innerHTML = `${name}`
                AppliedFor.innerHTML = `Applied For : ${appliedFor}`

                var companyName = data['resume'][count]['work']['Company Name']
                var position = data['resume'][count]['work']['Position']
                var startDate = data['resume'][count]['work']['Start Date']
                var endDate = data['resume'][count]['work']['End Date']
                var summary = data['resume'][count]['work']['Summary']

                CompanyName.innerHTML = `<b>Company : </b>${companyName}`
                Position.innerHTML = `<b>Position : </b>${position}`
                StartDate.innerHTML = `<b>Start Date : </b>${startDate}`
                EndDate.innerHTML = `<b>End Date : </b>${endDate}`
                Summary.innerHTML = `<b>Summary : </b>${summary}`

                var projectTopic = data['resume'][count]['projects']['name']
                var projectDetails = data['resume'][count]['projects']['description']

                ProjectTopic.innerHTML = `<h3>Projects </h3><b>${projectTopic} : </b>`
                ProjectDetails.innerHTML = `${projectDetails}`

                var UGinstitute = data['resume'][count]['education']['UG']["institute"]
                var UGcourse = data['resume'][count]['education']['UG']["course"]
                var UGstartdate = data['resume'][count]['education']['UG']["Start Date"]
                var UGenddate = data['resume'][count]['education']['UG']["End Date"]
                var UGcgpa = data['resume'][count]['education']['UG']["cgpa"]

                UG.innerHTML = `<b>UG : </b>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  `

                var PUinstitute = data['resume'][count]['education']['Senior Secondary']["institute"]
                var PUcgpa = data['resume'][count]['education']['Senior Secondary']["cgpa"]

                PU.innerHTML = `<b>PU : </b>${PUinstitute} | ${PUcgpa} `

                var HighSchoolinstitute = data['resume'][count]['education']['High School']['institute']
                var HighSchoolcgpa = data['resume'][count]['education']['High School']['cgpa']

                HighSchool.innerHTML = `<b>High School : </b>${HighSchoolinstitute} | ${HighSchoolcgpa}`

                var internshipCompanyName = data['resume'][count]['Internship']['Company Name']
                var internshipPosition = data['resume'][count]['Internship']['Position']
                var internshipStartDate = data['resume'][count]['Internship']['Start Date']
                var internshipEndDate = data['resume'][count]['Internship']['End Date']
                var internshipSummary = data['resume'][count]['Internship']['Summary']

                InternshipCompanyName.innerHTML = `<b>Company Name : </b>${internshipCompanyName}`
                InternshipPosition.innerHTML = `<b>Position : </b>${internshipPosition}`
                InternshipStartDate.innerHTML = `<b>Start Date : </b>${internshipStartDate}`
                InternshipEndDate.innerHTML = `<b>End Date : </b>${internshipEndDate}`
                InternshipSummary.innerHTML = `<b>Summary : </b>${internshipSummary}`

                var achDetails = data['resume'][count]['achievements']['Summary']

                AchDetails.innerHTML = ` ${achDetails}`

            }
        })






}

