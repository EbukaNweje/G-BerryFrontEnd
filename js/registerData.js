
const names = document.getElementById('f_name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const userName = document.getElementById('input1');
const country = document.getElementById('country');
const button = document.querySelector('.subTinsedit');



const sendSignUpEmail = async () => {
  const data = {
    email: email.value,
  };
  fetch('https://g-berrybackend.onrender.com/api/signupemailsand', {
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
    fullName: names.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
    country: country.value,
  };
  
  console.log(data);
  button.innerHTML = "Loading...";

  fetch('https://g-berry-back-end-beta.vercel.app/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      localStorage.setItem('userId', JSON.stringify(response.data))
          sendSignUpEmail();
      console.log(response)
      const id = JSON.parse(localStorage.getItem('userId'))
      console.log("Local User Id", id);
      window.location.href = `https://tradingassets-use-account.vercel.app/#/${id._id}`;
      
    })
    .catch((error) => {
      console.log(error);
      button.innerHTML = "Submit";
    });

 
};

