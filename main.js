// //create some classes of what potentially we can make of :

class Dish {
    constructor (ingredient1, ingredient2, result){
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.result = result
    }
    recipe(){return `with ${this.ingredient1} and ${this.ingredient} you can cook  `}
}

// //egg + oil = fried eggs
// //egg + milk = omelet
// //use API for recipes or create a form, that users will 
// //fill out themselves, like input=eggs, input = milk
// //OR use API https://www.themealdb.com/api.php with fetching 
// //OR https://rapidapi.com/spoonacular/api/recipe-food-nutrition/

// // use adding ingredients to class

const text = document.querySelector(".page-text")
const button = document.querySelector(".give-hint")
const inputText = document.querySelector(".input-text")

button.addEventListener('click', () => {
    const newText = inputText.value;
    text.textContent = newText

})


let user = {
    email: "email@email.com",
    password: "abcde"
}
let loginButton = document.querySelector('#login-form button');
let form = document.getElementById("login-form");
console.log(form);

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("running login");
    let name = document.getElementById('name-input').value;
    let password = document.getElementById('password-input').value;
    
    if (password === user.password && name) {
        let userInfoContainer = document.querySelector('.user-info');
        form.style.display = "none";
        userInfoContainer.style.display = "block";
        let userH1 = document.querySelector('.user-info h1');
        userH1.textContent = `nice to see you here, ${name}`;
        let postForm = document.getElementById('post-it');
        postForm.style.display = "flex";
    }
})
let newPostForm = document.querySelector('#post-it');
newPostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("running function");
    let name = document.getElementById('name-input').value;
    let postTitle = document.querySelector('#new-post input').value;
    let postContent = document.querySelector('#new-post textarea').value;

    let postContainer = document.getElementById('posts-container');
    let dateRightNow = new Date().toDateString("mm-dd-yy")
    postContainer.innerHTML += `
    <div class="post">
        <div>Posted by ${name} on ${dateRightNow}</div>
        <h2>${postTitle}</h2>
        <p>${postContent}</p>
    </div>
    `

})