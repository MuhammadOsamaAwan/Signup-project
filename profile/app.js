// tag Id
const user = JSON.parse(localStorage.getItem('logInUser'));
let {userName, desc, email, pNumber, profileUrl,hobbies, id} = user;


const userName2 = document.getElementById('userName');
const desc2 = document.getElementById('desc');
const email2 = document.getElementById('email');
const pNumber2 = document.getElementById('pNumber'); 
const hobbies2 = document.getElementById('hobbies');

console.log(userName);
console.log(user);
console.log(userName);
userName2.textContent= `${userName.slice(0,1).toUpperCase()}${userName.slice(1).toLowerCase()}`
desc2.textContent = desc? desc  : 'No User description';
email2.textContent = email ? email : 'No Email';
pNumber2.textContent = pNumber? pNumber : 'No phone number';
hobbies2.textContent = hobbies ? hobbies : 'No hobbies '
console.log(user.userName);


// Modal Inputbar Id
const userName3 = document.getElementById('userName3');
const email3 = document.getElementById('email3');
const pNumber3 = document.getElementById('pNumber3');
const userImg3 = document.getElementById('userImg3');
const desc3 = document.getElementById('desc3');
userName3.value = userName ? userName : '';
email3.value = email ? email : '';
pNumber3.value = pNumber ? pNumber : '';
userImg3.value = profileUrl ? profileUrl : '';
desc3.value = desc ? desc : '';
if(profileUrl){
  userImg3.src = profileUrl
}
console.log(profileUrl);
const updateHandler = () => {
   
   const userDetail = JSON.parse(localStorage.getItem('usersDetail')) || [];
   const logInUser = JSON.parse(localStorage.getItem('logInUser'));
    const signUp = userDetail.map((val) => {
           if(val.email == logInUser.email || val.userName == logInUser.userName){
            val.email = email3.value;
            logInUser.email = email3.value;
            val.userName = userName3.value;
            logInUser.userName = userName3.value;
            return val.email
            
           }
       })

       console.log(signUp);
console.log(userDetail);
logInUser.pNumber = pNumber3.value,
logInUser.profileUrl = userImg3.value,
logInUser.desc= desc3.value,
    console.log(logInUser);
  localStorage.setItem('logInUser', JSON.stringify(logInUser))
 localStorage.setItem('usersDetail', JSON.stringify(userDetail))
 const userObj = {
  userName: userName3.value,
  email: email3.value,
  pNumber: pNumber3.value,
  profileUrl: userImg3.value,
  desc: desc3.value,
 }
 
 console.log(userObj, "=====>>> userObj");
 localStorage.setItem("userObj", JSON.stringify(userObj))
    // signUp.userName = userName3.value;
    // signUp.email = email3.value;
    // signUp.pNumber = pNumber3.value;
    // signUp.profileUrl = userImg3.value;
    // signUp.desc = desc3.value;
    // userDetail.push(signUp);
    // console.log(signUp, "===>>> users")
    // localStorage.setItem('logInUser', JSON.stringify(signUp))
    // localStorage.setItem('usersDetail', JSON.stringify(userDetail))
  

   
  // //  localStorage.setItem('logInUser', JSON.stringify(updateProfileInput))
  //  const users = JSON.parse(localStorage.getItem('users'))
  //  const logInUser = JSON.parse(localStorage.getItem('logInUser'));
  //  console.log(logInUser.email);
  //  const userDetail = JSON.parse(localStorage.getItem('usersDetail'));
  //  const signUp = userDetail.find((val) => {
  //      if(val.email == logInUser.email || val.password == logInUser.password){
  //       return true
  //      }
  //  })
  //  console.log(signUp.password);
  // //  const newUser = {
  // //   userName :userName3.value,
  // //   email: email3.value,
  // //   password : signUp.password,
  // //   Cpassword : userDetail.Cpassword,
  // //  }
  // //  console.log(newUser);
  // //  const userLogIn = {
  //  signUp.userName = userName3.value,
  //  signUp.desc = desc3.value;
  //  signUp.email= email3.value,
  //  signUp.password= signUp.password,
  //  signUp.pNumber= pNumber3.value,
  //  signUp.profileUrl= userImg3.value,
  //  signUp.userDesc = desc3.value;
  // //  }
  // //  localStorage.setItem('usersDetail', JSON.stringify(newUser));
  //  localStorage.setItem('logInUser', JSON.stringify(userLogIn))
  //  localStorage.setItem('users', JSON.stringify(signUp))

}


const check = [
  {
    name: 'Umair',
    password: '1234',
  },
  {
    name: 'Ahmed',
    password: '1234',
  },
  {
    name: 'Faiz',
    password: '1234',
  },

]

const name = check.map((val) =>{
  if(val.name === 'Ahmed'){
    val.password = '12345678';
    return val.password
  }
  return val.password
})
console.log(name);
