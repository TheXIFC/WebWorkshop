
const URL = "http://localhost:3000/students"

function loadStudents() {
	return fetch(URL).then(r => r.json());
}

function renderStudents(posts) {
	//console.log(posts);
	//conlose.log(posts.json());
	
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

function initialize() {
	loadStudents().then(renderStudents);
	/*posts = [{
			"name": "Andrew",
			"knowledge": 10
		},
		{
			"name": "Sergey",
			"knowledge": 20
		}

	];
	renderPosts(posts);*/
}


window.onload = initialize;
