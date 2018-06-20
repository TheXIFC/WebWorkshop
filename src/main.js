
const URL = "http://localhost:3000/students"

function loadStudents() {
	return fetch(URL).then(r => r.json());
}

function renderStudents(posts) {
	let template = document.getElementById("post-template");
	let postElement = template.content.querySelector(".post");
	let postList = document.getElementById("posts");
	postList.innerHTML = "";
	
	for (let post of posts) {
		let postClone = postElement.cloneNode(true);
		updatePostElement(postClone, post);
		postList.appendChild(postClone);
	}
}

function updatePostElement(postClone, post) {
	postClone.getElementsByTagName("h1")[0].innerHTML = post.name;
	postClone.getElementsByTagName("h2")[0].innerHTML = post.knowledge;
}

function addStudent(e) {
	e.preventDefault();
	let name = document.getElementsById("nameField").value;
	let knowledge = document.getElementsById("knowledgeField").value;
	fetch(URL, {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({"name": name, "knowledge": knowledge})
	}).then(loadStudents).then(renderStudents);
}

function initialize() {
	loadStudents().then(renderStudents);
	let form = document.getElementById("postForm");
	form.addEventListener("submit", addStudent, false);
}




window.onload = initialize;
