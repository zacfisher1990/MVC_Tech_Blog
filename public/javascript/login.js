
// function for submit button
async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  // if username and password exist
    if (username && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          username,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  // if username and password exist go to dashboard
      if (response.ok) {
        document.location.replace('/dashboard');
        // no username or password alert
      } else {
        alert(response.statusText);
      }
    }
  }

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);