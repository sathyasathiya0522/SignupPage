document.addEventListener('DOMContentLoaded', (event) => {
  const form = document.getElementById('signUpForm');

  form.addEventListener('submit', function(event) {
  
      event.preventDefault();
      event.stopPropagation();


      const firstName = document.getElementById('firstName');
      const lastName = document.getElementById('lastName');
      const email = document.getElementById('email');
      const password = document.getElementById('password');
      const confirmPassword = document.getElementById('confirmPassword');
      const birthMonth = document.getElementById('birthMonth');
      const birthDay = document.getElementById('birthDay');
      const birthYear = document.getElementById('birthYear');


      firstName.setCustomValidity('');
      lastName.setCustomValidity('');
      email.setCustomValidity('');
      password.setCustomValidity('');
      confirmPassword.setCustomValidity('');
      birthMonth.setCustomValidity('');
      birthDay.setCustomValidity('');
      birthYear.setCustomValidity('');


      if (password.value !== confirmPassword.value) {
          confirmPassword.setCustomValidity('Passwords do not match.');
      }


      if (form.checkValidity() === false) {
          form.classList.add('was-validated');
      } else {
          alert('Form submitted successfully!');
      }
  }, false);
});