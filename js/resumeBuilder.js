var skills = ["HTML", "CSS", "JavaScript", "Ruby"];

var bio  = {
  "name": "Tommy Brennan",
  "role": "Full Stack Web Developer",
  "contacts": {
    "mobile": "718-440-4306",
    "email": "tommybrennan@gmail.com",
    "github": "",
    "linkedIn": ""
  },
  "welcomeMessage": "lorum ipsum lorum ispum lorum ipsum",
  "skills": skills,
  "bioPic": "images/headshot.jpg",
}

var work = {
  "jobs": [
  {
    "employer": "Credit Suisse",
    "roles":
    {
      "name": "Americas Operations",
      "description": "COO Group"
    },
    "location": "New York",
    "datesWorked": "Aug-2002/Dec-2012"
  },
  {
    "name": "General Assembly",
    "city": "New York",
    "degree": "Certificate",
    "major": "Full Stack Immersive Web Development"
  },
  {
    "name": "Udacity",
    "city": "Online",
    "degree": "Nanodegree",
    "major": "Front End Web Developer"
  }
 ]
}

var education = {
  "schools": [
  {
    "name": "State University of New York, College at Cortland",
    "city": "Cortland",
    "degree": "BS",
    "major": "Management Science/Economics"
  },
  {
    "name": "General Assembly",
    "city": "New York",
    "degree": "Certificate",
    "major": "Full Stack Immersive Web Development"
  },
  {
    "name": "Udacity",
    "city": "Online",
    "degree": "Nanodegree",
    "major": "Front End Web Developer"
  }
 ]
}

var projects = {
  "projects": [
  {
    "name": "State University of New York, College at Cortland",
    "date": "August 2014",
    "description": "Udacity Projects",
    "image": "images/placeholder.jpg"
  },
  {
    "name": "General Assembly",
    "city": "New York",
    "degree": "Certificate",
    "major": "Full Stack Immersive Web Development"
  },
  {
    "name": "Udacity",
    "city": "Online",
    "degree": "Nanodegree",
    "major": "Front End Web Developer"
  }
 ]
}

if (bio.skills.length > 0) {

  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[1])
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[2])
  $("#skills").append(formattedSkill);

  formattedSkill = HTMLskills.replace("%data%", bio.skills[3])
  $("#skills").append(formattedSkill);

}

//$('#main').append(schools.name);


// This file should only contain objects for:
// bio
// work
// education
// projects



var name = "Tommy Brennan";
var formattedName = HTMLheaderName.replace("%data%", name);

var role = "Front End Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$('#header').append(formattedName);
$('#header').append(formattedRole);


// $("#main").append(["Tommy Brennan"]);
// var awesomeThoughts = "I am Tom and I am Awesome!"
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
// console.log(funThoughts);
// $("#main").append([funThoughts]);


// $('#main').append(bio.name);
// $('#main').append(bio.role);
// $('#main').append(bio.phone);
// $('#main').append(bio.email);
// $('#main').append(bio.image);
// $('#main').append(bio.message);
// $('#main').append(bio.skills);

// var currentWork = {};
// currentWork.name = "Canon";
// currentWork.address = "One Canon Drive, Melville, NY";
// currentWork.startDate = "August 2015";

// $('#main').append(currentWork.name);
// $('#main').append(currentWork.address);
// $('#main').append(currentWork.startDate);










