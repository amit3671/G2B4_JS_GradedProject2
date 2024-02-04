
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var searchbox = document.querySelector("#searchbox");

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


var i = 0;

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

                Phone.innerHTML = `<span>${phone}</span>`
                Email.innerHTML = `<span>${email}</span>`

                var skillName = data['resume'][i]['skills']['name']
                var level = data['resume'][i]['skills']['level']
                var types = data['resume'][i]['skills']['keywords'][i]

                SkillName.innerHTML = `<span>${skillName}</span>`
                Level.innerHTML = `<br><span>${level}</span><br>`
                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][i]['skills']['keywords'][1]} </li> <li>${data['resume'][i]['skills']['keywords'][2]} </li> <li>${data['resume'][i]['skills']['keywords'][3]} </li><ul>`

                HobbiesList.innerHTML = `<ul><li>${data['resume'][i]['interests']['hobbies'][0]} </li> <li>${data['resume'][i]['interests']['hobbies'][1]} </li> <li>${data['resume'][i]['interests']['hobbies'][2]} </li> <ul>`

                var name = data['resume'][i]['basics']['name']
                var appliedFor = data['resume'][i]['basics']['AppliedFor']

                Name.innerHTML = `<span>${name}</span>`
                AppliedFor.innerHTML = `<span><b>Applied For : </b>${appliedFor}</span>`

                var companyName = data['resume'][i]['work']['Company Name']
                var position = data['resume'][i]['work']['Position']
                var startDate = data['resume'][i]['work']['Start Date']
                var endDate = data['resume'][i]['work']['End Date']
                var summary = data['resume'][i]['work']['Summary']

                CompanyName.innerHTML = `<b>Company : </b><span>${companyName}</span>`
                Position.innerHTML = `<b>Position : </b><span>${position}</span>`
                StartDate.innerHTML = `<b>Start Date : </b><span>${startDate}</span>`
                EndDate.innerHTML = `<b>End Date : </b><span>${endDate}</span>`
                Summary.innerHTML = `<b>Summary : </b><span>${summary}</span>`

                var projectTopic = data['resume'][i]['projects']['name']
                var projectDetails = data['resume'][i]['projects']['description']

                ProjectTopic.innerHTML = `<h3>Projects </h3><b><span>${projectTopic} : </span></b>`
                ProjectDetails.innerHTML = `<span>${projectDetails}</span>`

                var UGinstitute = data['resume'][i]['education']['UG']["institute"]
                var UGcourse = data['resume'][i]['education']['UG']["course"]
                var UGstartdate = data['resume'][i]['education']['UG']["Start Date"]
                var UGenddate = data['resume'][i]['education']['UG']["End Date"]
                var UGcgpa = data['resume'][i]['education']['UG']["cgpa"]

                UG.innerHTML = `<b>UG : </b><span>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  </span>`

                var PUinstitute = data['resume'][i]['education']['Senior Secondary']["institute"]
                var PUcgpa = data['resume'][i]['education']['Senior Secondary']["cgpa"]

                PU.innerHTML = `<b>PU : </b><span>${PUinstitute} | ${PUcgpa} </span>`

                var HighSchoolinstitute = data['resume'][i]['education']['High School']['institute']
                var HighSchoolcgpa = data['resume'][i]['education']['High School']['cgpa']

                HighSchool.innerHTML = `<b>High School : </b><span>${HighSchoolinstitute} | ${HighSchoolcgpa} </span>`

                var internshipCompanyName = data['resume'][i]['Internship']['Company Name']
                var internshipPosition = data['resume'][i]['Internship']['Position']
                var internshipStartDate = data['resume'][i]['Internship']['Start Date']
                var internshipEndDate = data['resume'][i]['Internship']['End Date']
                var internshipSummary = data['resume'][i]['Internship']['Summary']

                InternshipCompanyName.innerHTML = `<b>Company Name : </b><span>${internshipCompanyName}<span>`
                InternshipPosition.innerHTML = `<b>Position : </b><span>${internshipPosition}<span>`
                InternshipStartDate.innerHTML = `<b>Start Date : </b><span>${internshipStartDate}<span>`
                InternshipEndDate.innerHTML = `<b>End Date : </b><span>${internshipEndDate}<span>`
                InternshipSummary.innerHTML = `<b>Summary : </b><span>${internshipSummary}<span>`

                var achDetails = data['resume'][i]['achievements']['Summary']

                AchDetails.innerHTML = `<span> ${achDetails}</span>`

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


            let positionsearch = [
                "data['resume'][0]['basics']['AppliedFor']",
                "data['resume'][1]['basics']['AppliedFor']",
                "data['resume'][2]['basics']['AppliedFor']",
                "data['resume'][3]['basics']['AppliedFor']",
                "data['resume'][4]['basics']['AppliedFor']",
                "data['resume'][5]['basics']['AppliedFor']",
                "data['resume'][6]['basics']['AppliedFor']"
            ];

            {

                var phone = data['resume'][i]['basics']['phone']
                var email = data['resume'][i]['basics']['email']

                Phone.innerHTML = `<span>${phone}</span>`
                Email.innerHTML = `<span>${email}</span>`

                var skillName = data['resume'][i]['skills']['name']
                var level = data['resume'][i]['skills']['level']
                var types = data['resume'][i]['skills']['keywords'][i]

                SkillName.innerHTML = `<span>${skillName}</span>`
                Level.innerHTML = `<br><span>${level}</span><br>`
                Types.innerHTML = `<ul><li>${types} </li> <li>${data['resume'][i]['skills']['keywords'][1]} </li> <li>${data['resume'][i]['skills']['keywords'][2]} </li> <li>${data['resume'][i]['skills']['keywords'][3]} </li><ul>`

                HobbiesList.innerHTML = `<ul><li>${data['resume'][i]['interests']['hobbies'][0]} </li> <li>${data['resume'][i]['interests']['hobbies'][1]} </li> <li>${data['resume'][i]['interests']['hobbies'][2]} </li> <ul>`

                var name = data['resume'][i]['basics']['name']
                var appliedFor = data['resume'][i]['basics']['AppliedFor']

                Name.innerHTML = `<span>${name}</span>`
                AppliedFor.innerHTML = `<span><b>Applied For : </b>${appliedFor}</span>`

                var companyName = data['resume'][i]['work']['Company Name']
                var position = data['resume'][i]['work']['Position']
                var startDate = data['resume'][i]['work']['Start Date']
                var endDate = data['resume'][i]['work']['End Date']
                var summary = data['resume'][i]['work']['Summary']

                CompanyName.innerHTML = `<b>Company : </b><span>${companyName}</span>`
                Position.innerHTML = `<b>Position : </b><span>${position}</span>`
                StartDate.innerHTML = `<b>Start Date : </b><span>${startDate}</span>`
                EndDate.innerHTML = `<b>End Date : </b><span>${endDate}</span>`
                Summary.innerHTML = `<b>Summary : </b><span>${summary}</span>`

                var projectTopic = data['resume'][i]['projects']['name']
                var projectDetails = data['resume'][i]['projects']['description']

                ProjectTopic.innerHTML = `<b><span>${projectTopic} : </span></b>`
                ProjectDetails.innerHTML = `<span>${projectDetails}</span>`

                var UGinstitute = data['resume'][i]['education']['UG']["institute"]
                var UGcourse = data['resume'][i]['education']['UG']["course"]
                var UGstartdate = data['resume'][i]['education']['UG']["Start Date"]
                var UGenddate = data['resume'][i]['education']['UG']["End Date"]
                var UGcgpa = data['resume'][i]['education']['UG']["cgpa"]

                UG.innerHTML = `<b>UG : </b><span>${UGinstitute} | ${UGcourse} | ${UGstartdate}  to  ${UGenddate} | ${UGcgpa}  </span>`

                var PUinstitute = data['resume'][i]['education']['Senior Secondary']["institute"]
                var PUcgpa = data['resume'][i]['education']['Senior Secondary']["cgpa"]

                PU.innerHTML = `<b>PU : </b><span>${PUinstitute} | ${PUcgpa} </span>`

                var HighSchoolinstitute = data['resume'][i]['education']['High School']['institute']
                var HighSchoolcgpa = data['resume'][i]['education']['High School']['cgpa']

                HighSchool.innerHTML = `<b>High School : </b><span>${HighSchoolinstitute} | ${HighSchoolcgpa} </span>`

                var internshipCompanyName = data['resume'][i]['Internship']['Company Name']
                var internshipPosition = data['resume'][i]['Internship']['Position']
                var internshipStartDate = data['resume'][i]['Internship']['Start Date']
                var internshipEndDate = data['resume'][i]['Internship']['End Date']
                var internshipSummary = data['resume'][i]['Internship']['Summary']

                InternshipCompanyName.innerHTML = `<b>Company Name : </b><span>${internshipCompanyName}<span>`
                InternshipPosition.innerHTML = `<b>Position : </b><span>${internshipPosition}<span>`
                InternshipStartDate.innerHTML = `<b>Start Date : </b><span>${internshipStartDate}<span>`
                InternshipEndDate.innerHTML = `<b>End Date : </b><span>${internshipEndDate}<span>`
                InternshipSummary.innerHTML = `<b>Summary : </b><span>${internshipSummary}<span>`

                var achDetails = data['resume'][i]['achievements']['Summary']

                AchDetails.innerHTML = `<span> ${achDetails}</span>`


            }
        })
}

prev.addEventListener("click", idValuedec);

