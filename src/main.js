
const URL = "http://localhost:3000/students"

function loadPosts() {
	return fetch(URL);
}

function renderPosts(posts) {
	let template = document.getElementById("post-template");
	let postElement = template.content.querySelector(".post");
	let postList = document.getElementById("posts");
	postList.innerHTML = "";
	
	for (let post of posts) {
		let postClone = postElement.cloneNode(true);
		updatePostElement(postClone, post);
		console.log(postClone);
		postList.appendChild(postClone);
	}
}

function updatePostElement(postClone, post) {
	postClone.getElementsByTagName("h1")[0].innerHTML = post.name;
	postClone.getElementsByTagName("h2")[0].innerHTML = post.knowledge;
}

function initialize() {
	//loadPosts.then(renderPosts);
	posts = [{
		"name": "name",
		"knowledge": 10
	}];
	renderPosts(posts);
}


window.onload = initialize;
