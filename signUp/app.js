const btn = document.getElementById('btn');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cPassword = document.getElementById('Cpassword');
const signUpHey = document.getElementById('signUpHey');
const loading = document.getElementById('myLoading');
const container = document.querySelector('.container');
const logInUser = JSON.parse(localStorage.getItem('logInUser'));
if(logInUser){
  window.location.href = '../home/index.html';
};
 function myhandle(){
  const localStore = JSON.parse(localStorage.getItem('usersDetail')) || [];
      console.log('chl rha');
      if(fullName.value == "" ||
          email.value == "" ||
          password.value == "" ||
          cPassword.value == ""
           ){
            alert('Plz fill the form correctly')
      }else if (password.value.length<8){
        alert("Password should be minimum 8 characters long")
    }else if(password.value.length !== cPassword.value.length){
      swal("Password and Confirm Password should be same");
    }
    else{
      const user = {
        userId : Date.now(),
        userName: fullName.value,
        email: email.value,
        password: password.value,
        cPassword: cPassword.value
      }
      localStore.push(user)
        localStorage.setItem('usersDetail', JSON.stringify(localStore))
        setTimeout(() => {
            window.location.href ='../Loading1/index.html'
        }, 2000)
      }
      fullName.value = '';
        email.value = '';
        password.value = '';
        cPassword.value = '';
 }

  const logIn = document.getElementById('logIn');
  logIn.addEventListener('click', function(){
    window.location.href = '../logIn/index.html'
  })

  // const map = new Map();
  // console.log(map);
  // map.set('a', 1).set('b', 2).set('c', 3);
  // const x = [...map.keys()]
  // console.log(...map.keys());
  // console.log(...map.values());
  // console.log(x.length);