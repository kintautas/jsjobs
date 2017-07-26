class Job {
  constructor(id, title, description, skills) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.skills = skills;
  }
}



var skills = ['css','html','css3','html5']
var shown = [];
var selected = [];
function showSkills() {
	var inputSkill = document.getElementById("inputSuccess").value;



	if (inputSkill != "") {
		var foundSkills = skills.filter((skill) => {
			return skill.startsWith(inputSkill);
		})
		for (let s of foundSkills) {
			if (!shown.includes(s)) {
				shown.push(s);
				var btn = document.createElement("a");
				btn.className = "btn btn-primary skill"        // Create a <button> element
				var t = document.createTextNode(s);       // Create a text node
				btn.appendChild(t);                                // Append the text to <button>
				document.getElementById("list").appendChild(btn);  
			}  
		}
	}
	else {
		shown = [];
		var list = document.getElementById("list");
		var remove = [];
		for (let elem of list.childNodes) {
			remove.push(elem);
		}	
		for (let r of remove) {
			list.removeChild(r);
		}	
	}

	var list = document.getElementById("list"); 
	var remove = [];  // Get the <ul> element with id="myList"
	for (let elem of list.childNodes) {

		if (!elem.text.startsWith(inputSkill)) {
			remove.push(elem);
		}				
	}
	for (let r of remove) {
		console.log(r);
			list.removeChild(r);
			shown = shown.filter((elem) => {
				return elem != r.text
			})
		}	

}