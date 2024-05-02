
const email = document.getElementById('email')
const password = document.getElementById('password')
const button = document.getElementById('signInBtn')

console.log(button);

const sendLoginEmail = async () => {
  const data = {
    email: email.value,
  };
  fetch('https://g-berrybackend.onrender.com/api/loginemailsand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    email: email.value,
    password: password.value,
  };

  console.log(data);
  button.innerHTML = "Loading...";

  fetch('https://g-berry-back-end.vercel.app/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      // localStorage.setItem('userId', response._id)
      console.log(response._id)
      // console.log("Local User Id", id);
        window.location = `https://tradingassets-account.vercel.app/#/${response._id}`;
    })
    .catch((error) => {
      button.innerHTML = "Sign In";
      console.log(error);
    });
};