// Profile image js start from here
// Ids and class
let profileImg = document.getElementById('profileImg');
let profileImg2 = document.getElementById('profileImg2');
let profileImg3 = document.getElementById('profileImg3');
let inputFile = document.getElementById('input-file');
const userPichey = document.querySelector('#userPichey');
let postInput = document.getElementById('postInput');
const logInUser = JSON.parse(localStorage.getItem('logInUser')) || []
if(!logInUser){
    window.location.href = '../logIn/index.html'
}
inputFile.onchange = function () {
    const pic1 = profileImg.src = URL.createObjectURL(inputFile.files[0]);
    const pic2 = profileImg2.src = URL.createObjectURL(inputFile.files[0]);
    const pic3 = profileImg3.src = URL.createObjectURL(inputFile.files[0]);
    const pic4 = userPichey.src = URL.createObjectURL(inputFile.files[0]);

    const userPic = {
        image1: pic1,
        image2: pic2,
        image3: pic3
    }
    console.log(userPic);
    localStorage.setItem('userImages', JSON.stringify(userPic))
    myPic()
}
function myPic() {

    const getImg = JSON.parse(localStorage.getItem('userImages'))
    profileImg.src = getImg.image1;
    console.log(getImg.image1);
}

// displayUserProfile

const displayUserProfile = document.getElementById('displayUserProfile');
const sectionC = document.getElementById('sectionC')
function myHandle1() {
    sectionC.classList.remove('hidden');
    displayUserProfile.setAttribute('onclick', 'myHandle2()')
}

function myHandle2() {
    sectionC.classList.add('hidden');
    displayUserProfile.setAttribute('onclick', 'myHandle1()')
}
function myHandle3() {
    sectionC.classList.remove('hide');
    displayUserProfile.setAttribute('onclick', 'myHandle4()')
}
function myHandle4() {
    sectionC.classList.add('hidden');
    displayUserProfile.setAttribute('onclick', 'myHandle3()')
}
// function showFunc(){
//     sectionC.classList.add('show')
// }



// searchBar 

const searchBar = document.querySelector('.searchBar');
const postCard2 = document.getElementById('postCard2')
searchBar.addEventListener('click', function () {
    postCard2.style.display = 'block';
    console.log('chl rha hn');
})

// crossHandler
const crossHandler = document.getElementById('crossHandler');
// let postCard2 = document.getElementById('postCard2')
crossHandler.addEventListener('click', function () {
    postCard2.style.display = 'none'
})

// post 

function myPostHandler() {

}
// LogOut

document.querySelector('.goToLogIn').onclick = function(){
    swal("Great!", "Log out successfully", "success");
    setTimeout(() =>{
    window.location.href = '../logIn/index.html'
    }, 3000)
    localStorage.removeItem('logInUser')

}


// Post button Javascript
let imageUrl;
let oldPost;
let oldPostIndex;
// localStorage.removeItem('post')
const postBtn = document.getElementById('postBtn');
const postCard = document.querySelector('.postCard')
const user = JSON.parse(localStorage.getItem('usersDetail'))
const postLocal = JSON.parse(localStorage.getItem('post')) || [];
console.log(logInUser);
const userName2 = document.getElementById('userName2');
const createPostUser = document.getElementById('createPostUser');
const userNameInBar = document.getElementById('userNameInBar');
const searchUserName = document.getElementById('searchUserName');
function myCheck() {
    postCard.innerHTML = ''
    const postLocal = JSON.parse(localStorage.getItem('post')) || [];
    // let userText;
    //     if(imageUrl){
    //     userText = {
    //         userId: Date.now(),
    //         userInputText: postInput.value, 
    //         userEmail: logInUser.email,
    //         userDetail: JSON.parse(localStorage.getItem('logInUser')),
    //     }
    // }else{
    //     userText = {
    //         userId: Date.now(),
    //         userInputText: postInput.value, 
    //         userEmail: logInUser.email,
    //         userDetail: JSON.parse(localStorage.getItem('logInUser')),
    //     }
    // }
    // postLocal.push(userText)
    // localStorage.setItem('post', JSON.stringify(postLocal));
    const getUserDetail = JSON.parse(localStorage.getItem('logInUser'));
    
    // console.log(postLocal);
    
    // console.log(post);
    // const getUserPost = JSON.parse(localStorage.getItem('post'));
    
    const filteredItems = postLocal.filter((post) =>{
        if(post.userInputText == ''){
            return false
        }else{
            return true
        }
    })
    console.log(filteredItems);
    // console.log(filteredItems, '====> filteredItems');
    filteredItems.reverse().forEach(element => {
        createPostUser.textContent = getUserDetail.userName;
        userName2.textContent = getUserDetail.userName;
        userNameInBar.textContent = getUserDetail.userName;
        searchUserName.textContent = getUserDetail.userName;
             
              let card=`
                        <div class="card" id="postCard">
                            <div class="displayPost">
                                <div class="post">
                                    <i class="fa-solid fa-user"></i>
                                    <p>${element.userDetail.userName}</p>
                                </div>
                                <div class="postIcon">
                                ${getUserDetail.email === element.userDetail.email ?`<i class="fa-solid fa-ellipsis" id="editBtn" onclick="editHandler('${element.userId}')"></i>
                                <i class="fa-solid fa-xmark" id="dltBtn" onclick= deleteHandler('${element.userId}')></i>` : ''}
                                    
                                    
                                </div>
                            </div>
                            <p class="postPara">${element.userInputText}</p>
                            <div class="postPic m-2">
                                <img id="userImg" src="./Assets/nature.jpg" alt="" width="496px">
                            </div>
                            <!-- Like, comment and share -->
                            <div class="likeAndComments m-2">
                                <div class="thumb">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <p>Like</p>
                                </div>
                                <div class="thumb">
                                    <i class="fa-regular fa-comment"></i>
                                    <p>Comment</p>
                                </div>
                                <div class="thumb">
                                    <i class="fa-solid fa-square-arrow-up-right"></i>
                                    <p>Send</p>
                                </div>
                            </div>
                        </div>
    `
        postCard.innerHTML += card
        
       
    });

}
myCheck()
function myPostHandler(){
    let userText;
        if(imageUrl){
        userText = {
            userId: Date.now(),
            userInputText: postInput.value, 
            userEmail: logInUser.email,
            userDetail: JSON.parse(localStorage.getItem('logInUser')),
        }
    }else{
        userText = {
            userId: Date.now(),
            userInputText: postInput.value, 
            userEmail: logInUser.email,
            userDetail: JSON.parse(localStorage.getItem('logInUser')),
        }
    }
    postLocal.push(userText)
    localStorage.setItem('post', JSON.stringify(postLocal));
    postInput.value = ''
    myCheck()
}
function deleteHandler(check){
    // console.log(check);
    const forDelete = JSON.parse(localStorage.getItem('post'))
    console.log(forDelete);
    const filteredPost = forDelete.filter((post) =>{
        return post.userId != check

    })
    localStorage.setItem('post', JSON.stringify(filteredPost))
    console.log(filteredPost);
    myCheck()
}

function editHandler(editId){
   const userPost = JSON.parse(localStorage.getItem('post'));
   const findPost = userPost.find((post) =>{
    return post.userId == editId
   })
   postInput.value = findPost.userInputText;
   postBtn.innerHTML = 'Edit'
   postCard2.style.display = 'block';
   postBtn.setAttribute('onclick', `myEditHandler(${editId})`)
}

function myEditHandler(editId){
    console.log("I'm working");
    postBtn.innerHTML = 'Post'
    const userPost = JSON.parse(localStorage.getItem('post'));
   const findPost = userPost?.find((post) =>{
    return post.userId == editId;
   })
   oldPost = findPost;
   const findIndex = userPost?.findIndex((postIndex) => {
          return postIndex.userId == editId
   })
   oldPostIndex = findIndex
   console.log(findIndex, "===> index");
   const logInUser = JSON.parse(localStorage.getItem('logInUser'))
   const updatePost = {
    userEmail: logInUser.email,
    userId: editId,
    userInputText: postInput.value,
    userDetail: JSON.parse(localStorage.getItem('logInUser')),
   }
    userPost.splice(findIndex, 1, updatePost)
    // console.log(userPost);
    localStorage.setItem('post', JSON.stringify(userPost))
//   console.log(updatePost, "===> new post");
//    console.log(editId);
//    console.log(findPost, "===> post id");
   postBtn.setAttribute('onclick', `myPostHandler()` );
   postInput.value = ''
   myCheck()

}


// const myArr = [
//     {
//         name: 'Umair',
//         id : 12,
//     },
//     {
//         name: 'Umair',
//         id : 13,
//     },
//     {
//         name: 'Umair',
//         id : 13,
//     },
// ]

// const check = myArr.findIndex((val) => {
//     if(val.id == 12){
//         return true
//     }
// })

// const check2 = {
//         name: 'ahmed',
//         id : 10,
// }
// myArr.splice(check, 1, check2)
// console.log(myArr);
