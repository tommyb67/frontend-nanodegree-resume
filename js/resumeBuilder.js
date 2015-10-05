var bio = {
  "name": "Tommy Brennan",
  "role": "Full Stack Web Developer",
  "contacts": {
    "mobile": "718-440-4306",
    "email": "tommybrennan@gmail.com",
    "github": "https://github.com/tommyb67",
    "linkedIn": "https://www.linkedin.com/in/tommybrennan1",
    "location": "New York"
    },
    "welcomeMessage": "lorum ipsum lorum ispum lorum ipsum",
    "skills": [
        "HTML", "CSS", "JavaScript", "Ruby"
    ],
    "bioPic": "images/headshot.jpg"
}

var education = {
  "schools": [
  {
    "name": "State University of New York, College at Cortland",
    "city": "Cortland",
    "degree": "BS",
    "major": "Management Science/Economics",
    "url": "http://www2.cortland.edu/home/"
    }
  ],
  "onlineCourses": [
  {
    "title": "Full Stack Immersive Web Development",
    "school": "General Assembly",
    "city": "New York",
    "degree": "Certificate",
    "url": "Full Stack Immersive Web Development"
  },
  {
    "title": "Front-End Web Developer",
    "school": "Udacity",
    "city": "Online",
    "degree": "Nanodegree",
    "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree"
  }
 ]
}

var work = {
  "jobs": [
  {
    "employer": "Credit Suisse",
    "title": "AVP",
    "name": "Americas Operations",
    "description": "COO Group",
    "location": "New York",
    "datesWorked": "Aug-2002/Dec-2012"
  },
 ]
}

var projects = {
  "projects": [
  {
    "title": "Online Portfolio",
    "date": "September 2015",
    "description": "Udacity Project",
    "image": "images/placeholder.jpg",
    "url": "http://tommyb67.github.io/udacity-portfolio-project/"
  },
 ]
}

// if (document.getElementsByTagName('h1').length === 0) {
//   document.getElementById('header').style.display = 'none';
// }


if (bio.skills.length > 0) {

  $('#header').append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $('#skills').append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $('#skills').append(formattedSkill);

}


for (job in work.jobs) {
  $("#workExperience").append(HTMLworkStart);

  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);
}



