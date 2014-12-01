/*$("#main").append("Andrea Bisognin <br/>");*/
/*var AwesomeThougths = "I am Bisio and i am awesome!";*/
/*var funThoughts = AwesomeThougths.replace("awesome","fun");*/
/*$("#main").append(funThoughts);*/
var formattedName = HTMLheaderName.replace("%data%","Andrea Bisognin")
var formattedRole = HTMLheaderRole.replace("%data%","developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness","programming","teaching","JS"];
$("#main").append(skills);

var bio = {
  "name":"James",
  "age":32,
  "skills":skills
};

/*var name = "audacity";*/
/*name =  name.slice(1);*/
/*name = name.replace('u','U');*/
/*console.log(name);*/
/*s =  s.slice(1);*/
/*s = s.replace('u','U');*/
