    import axios from 'axios';

    axios
      .post('http://127.0.0.1:1337/api/auth/local',       {
         identifier: "asdf@asdf.com",
         password: "Taipei101!"
      },
      {
        headers: {
            'Content-Type': 'application/json',
        }
      })
      .then(response => {
        console.log('User profile', response.data.user);
        console.log('User token', response.data.jwt);
      })
      .catch(error => {
        console.log('An error occurred:', error.message);
      });
