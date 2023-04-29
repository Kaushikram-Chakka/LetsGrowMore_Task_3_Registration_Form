const form = document.querySelector('form');
const display = document.querySelector('.display');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const firstName = form.elements.firstName.value;
  const lastName = form.elements.lastName.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  display.innerHTML = `
    <h2>Registration Form Data</h2>
    <p>First Name: ${firstName}</p>
    <p>Last Name: ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `;
});