/*$("#main").append("Andrea Bisognin <br/>");*/
/*var AwesomeThougths = "I am Bisio and i am awesome!";*/
/*var funThoughts = AwesomeThougths.replace("awesome","fun");*/
/*$("#main").append(funThoughts);*/

var skills = ["awesomeness","programming","teaching","JS"];
/*$("#main").append(skills);*/

var bio = {
  "name":"Bisio",
  "role":"developer",
  "contact_info":"andrea.bisogin@gmail.com",
  "pictureUrl":"http://goo.gl",
  "welcomeMessage":"hi",
  "skills":skills,
};

var formattedName = HTMLheaderName.replace("%data%",bio.name)
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

$("#header").append(HTMLcontactGeneric.replace("%contact%","email").replace("%data%",bio.contact_info));

if (bio.skills) {

  $("#header").append(HTMLskillsStart);
  var skillsElements = skills.map(function(skill){
    return(HTMLskills.replace("%data%",skill))
  });
  $("#skills").append(skillsElements);
}
/*var name = "audacity";*/
/*name =  name.slice(1);*/
/*name = name.replace('u','U');*/
/*console.log(name);*/
/*s =  s.slice(1);*/
/*s = s.replace('u','U');*/
