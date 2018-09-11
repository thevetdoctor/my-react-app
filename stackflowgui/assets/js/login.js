const submit = document.getElementById('submit');
let email = document.getElementById('email').value;
let password = document.getElementById('password').value;
const questions = document.getElementById('questions');

		questions.innerHTML = '<h3>iii</h3>';

// let email = document.getElementsByTagName('input')[0].value;
// let password = document.getElementsByTagName('input')[1].value;

// email = email.value;
// password = password.value;

const user = {
	email,
	password
}


const loginUrl = `${apiUrl}users/auth/login`;


const login = (e) => {
e.preventDefault()

	console.log(user);
	console.log(loginUrl);

		const xhttp = new XMLHttpRequest();

	    xhttp.open("POST", loginUrl, true);
	    xhttp.setRequestHeader("Content-Type", "application/json");
	    // xhttp.withCredentials = true;
		xhttp.onreadystatechange = function() {
			if(this.readyState === 4 && this.status === 200){
				let result = this.responseText;
					result = JSON.parse(result);
		questions.innerHTML = '<h3>' + result.message + '</h3>';
					console.log(result);

			}
		// questions.innerHTML = '';
		}

		let data = JSON.stringify({
	email:'thevetdoctor@gmail.com',
	password: 'obafemi'
});
		console.log(data);;
		console.log(xhttp);

		xhttp.send(data);
	// window.location = apiUrl + 'questions';
	// window.location = apiUrl + 'questions';
}



submit.addEventListener('click', login);



// const login = (e) => {
// 	e.preventDefault();

// 	console.log('Welcome to Login');
// 	console.log(email);
// 	console.log(password);
// 	console.log(user);

// }
// const loginUrl = `${apiUrl}users/auth/login`;

// $(()=>{

// 	const $errMsg = $('#error');
// 	$errMsg.text('error.response.JSON.message');


// 	$('form').submit((e)=>{
// 		e.preventDefault();

// let myObj = {
//         email: 'obasam@yahoo.com',
//         password: 'samuel'
//         // email: $('#email').val(),
//         // password: $('#password').val()
// };

// // let order = JSON.stringify(myObj);

// // $.ajax({
// //     type: 'POST',
// //     url: loginUrl,
// //     data: order,
// //     contentType: "application/json",
// //     dataType: "json",
// //     success: function(data) {
// //      console.log("Data added!", data);
// // 		console.log('jquery');
// //     }
// //   });
// login(myObj)
// .then((result)=>{
// 	console.log(result)
// }).catch(error => {
// 	console.log(error)
// 	const errMsg = document.querySelector('#error');
// 	errMsg.innerText = error.response.JSON.message;
// 	errMsg.style.display = 'block';
// })

// 	})
// })
// function login(user){

// return $.post(loginUrl, user)
// }
