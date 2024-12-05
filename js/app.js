const form = document.querySelector('form');
const msg = document.querySelectorAll('.msg');
const lmsg = document.querySelector('.lmsg');
const terms = document.querySelector('#terms');
const sucess = document.querySelector('.sucess');

form.addEventListener('submit', handleSubmit);

terms.checked = false;

terms.addEventListener('change', (event) => {
	const isChecked = event.currentTarget.checked;
	console.log(isChecked);
	if (!isChecked) {
		msg[5].textContent = 'Agree to terms and conditions to contine';
		msg[5].classList.add('error');
	}
});

let submitting = false;
async function handleSubmit(event) {
	event.preventDefault();

	const firstname = event.currentTarget.firstname.value;
	const lastname = event.currentTarget.lastname.value;
	const emailaddress = event.currentTarget.emailaddress.value;
	const queries = event.currentTarget.queries.value;
	const message = event.currentTarget.message.value;
	const agree = event.currentTarget.agree.checked;

	if (firstname == '') {
		msg[0].textContent = 'First name can not be empty';
		msg[0].classList.add('error');
	}
	if (lastname == '') {
		msg[1].textContent = 'Last name can not be empty';
		msg[1].classList.add('error');
	}
	if (emailaddress == '') {
		msg[2].textContent = 'Email addres can not be empty';
		msg[2].classList.add('error');
	}
	if (queries == '') {
		msg[3].textContent = 'Queries can not be empty';
		msg[3].classList.add('error');
	}
	if (message == '') {
		msg[4].textContent = 'Message can not be empty';
		msg[4].classList.add('error');
	}

	const data = {
		firstname,
		lastname,
		agree,
		emailaddress,
		queries,
	};

	try {
		sucess.textContent = 'Submitting query ...';
		sucess.classList.add('success');
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log(data);
		sucess.textContent = 'Query submitted successfully';
		sucess.classList.add('success');
	} catch (error) {}
}
