const logBtn = document.getElementById('logBtn');
const imgHey = document.getElementById('imgHey');
const email = document.getElementById('email');
const password = document.getElementById('password');
password.value = ''
const logInHey = document.querySelector('.logInHey');
const users =JSON.parse(localStorage.getItem('usersDetail')) || [] ;
// console.log(users[0].userName);
if(!users) window.location.href = '../signUp/index.html'
const logInUser = JSON.parse(localStorage.getItem('logInUser')) || [];
console.log(logInUser);
console.log(logInUser);
logBtn.addEventListener('click', function(){
   const logInUser = JSON.parse(localStorage.getItem('logInUser'));
     if(email.value == "" || password.value == ""){
        swal("Please insert your email and password correctly");
     }
    users.filter(element => {
         console.log(element.userName);
         if(element.email !== email.value || element.password!== password.value){
            swal("Wrong!", "Please insert correct password and email!");
         }else{
            
            const findUserId = users.find((val) => {
               return  val.userId

               
            })
            const logInUserObject = {
               userName: element.userName,
               email: element.email,
               password: element.password,
               id: findUserId.userId,
            }
           localStorage.setItem('logInUser', JSON.stringify(logInUserObject))
           
           
         }
        
         
      });
      window.location.href ='./loader/index.html'
   if(!logInUser){
      window.location.href = '../signUp/index.html'
   }
 
 email.value = "";
 password.value = "";
})



