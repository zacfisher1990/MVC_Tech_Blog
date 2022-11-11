// function for logout button
async function logout() {
    // fetch /api/users/logout
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  // if response ok go to homepage
    if (response.ok) {
      document.location.replace('/');
      // if response not ok alert
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);