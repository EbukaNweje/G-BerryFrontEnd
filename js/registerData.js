
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
  fetch('https://primefinancialtradebackend.onrender.com/api/signupemailsand', {
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
    userName: userName.value,
    fullName: names.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
    country: country.value,
    confirmPassword: confirmPassword.value,
  };
  
  console.log(data);
  button.innerHTML = "Loading...";

  fetch('https://prime-financial-trade-backend.vercel.app/api/register', {
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
      const userId = JSON.parse(localStorage.getItem('userId'))
      console.log("Local User Id", userId);
      window.location.href = `https://prime-financial-trade-account.vercel.app/#/${userId._id}`;
      
    })
    .catch((error) => {
      console.log(error);
      button.innerHTML = "Submit";
    });

 
};

