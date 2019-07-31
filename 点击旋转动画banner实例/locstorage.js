//阻止表单默认提交
const rememberDiv = document.querySelector('.remember');
const forgetDiv = document.querySelector('.forget');
const form = document.querySelector('form');
const nameInput = document.querySelector('#entername');
const submitBtn = document.querySelector('#submitname');
const forgetBtn = document.querySelector('#forgetname');

const h1 = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');

submitBtn.addEventListener('click',function(){
	localStorage.setItem('name',nameInput.value);
	nameDisplayCheck();
})

forgetBtn.addEventListener('click',function(){
	localStorage.removeItem('name');
	nameDisplayCheck();
})

function nameDisplayCheck(){
	if(localStorage.getItem('name')){
		let name = localStorage.getItem('name');
		h1.textContent = 'Welcome,' + name;
		personalGreeting.textContent = 'Welcome to our website.'+ name + '! We hope you have fun while you are here.';
		rememberDiv.style.display = 'none';
		forgetDiv.style.display = 'block';
	}else{
		h1.textContent = "Welcome to our website .";
		personalGreeting.textContent = 'Welcome to our website.';
		forgetDiv.style.display = 'none';
		rememberDiv.style.display = 'block';
	}
}

document.body.onload = nameDisplayCheck;