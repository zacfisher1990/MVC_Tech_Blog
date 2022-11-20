const savePost = document.getElementById('save-post');
savePost.addEventListener('click', async (event) => {
  event.preventDefault();
  const title = document.getElementById('title-of-post').value;
  const post_content = document.getElementById('content-of-post').value;
  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];

  const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
          title,
          post_content
      }),
      headers: {
          'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
});

