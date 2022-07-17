/* Sign Up Form */
let myForm = document.getElementById("myForm");

function openForm() {
    if (myForm.style.display === "block") {
        myForm.style.display = "none";
    } else myForm.style.display = "block";
}
  
function closeForm() {
    myForm.style.display = "none";
}

function checkForm() {
    let email = document.querySelector("input[name='email']").value;
    let password = document.querySelector("input[name='psw']").value;
    let repeatPassword = document.querySelector("input[name='psw-repeat']").value;
    if (email == "" || password == "" || repeatPassword == "") {
        alert("All fields must be filled");
        return false;
    }
    if(password !== repeatPassword) {
        alert("Paswords didn't match");
        return false;
    }
}

/* Search Button */ 

function hideSearch() {
    let searchInput = document.querySelector(".search");
    if (searchInput.style.display === "block") {
        searchInput.style.display = "none";
    } else searchInput.style.display = "block";
}

/* Scroll down */

function scrollDown() {
    document.querySelector('.adventures').scrollIntoView({
        behavior: 'smooth'
      });
}

/* slider */

sliderItems = [{
    title: 'Last Article',
    description: 'Camping in Western Australia',
    text: 'A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.',
    image: './images/slider/image-1/png',
},
{
    title: 'Last Article',
    description: 'Camping in Western Australia',
    text: 'A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.',
    image: './images/slider/image-1/png',
},
{
    title: 'Last Article',
    description: 'Camping in Western Australia',
    text: 'A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.',
    image: './images/slider/image-1/png',
},
{
    title: 'Last Article',
    description: 'Camping in Western Australia',
    text: 'A vibrant red, dusty highway stretches out before us into what seems like infinity, at the far reach of our sights it distorts and shimmers from the afternoon heat, fading into the blue of the horizon.',
    image: './images/slider/image-1/png',
}];

let slideIndex = 1;

showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }

    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";    
}

/* Recent Articles: */
let articles = [
    {
        img: "./images/articles/image-1.png", 
        title: "Ultimate guide to LA Skateparks",
        description: "Stacey Roswells",
    },
    {
        img: "./images/articles/image-2.png", 
        title: "Ski touring",
        description: "Sofia Sjoberg",
    },
    {
        img: "./images/articles/image-3.png", 
        title: "Arctic Surfing",
        description: "Jacob Wester",
    },
    {
        img: "./images/articles/image-4.png", 
        title: "San Diego Surf Spots",
        description: "Justin Barr",
    },
]

let articlesContainer = document.querySelector(".articles-container");

function drawArticle(data, container, name, boxClass, hasHover = false) {
    data.map((article) => {
    let box = document.createElement("div");
    box.classList.add(boxClass);
    let img = document.createElement("img");
    img.src = article.img;
    img.classList.add(name + "-img");
    let title = document.createElement("p");
    title.classList.add(name + "-title");
    title.innerText = article.title;
    let description = document.createElement("p");
    description.classList.add(name + "-description");
    description.innerText = article.description;
    box.appendChild(img);
    box.appendChild(title);
    box.appendChild(description);
    container.appendChild(box);

    if(hasHover) {
        box.addEventListener("mouseover", () => {
            adventureSection.style.backgroundImage = "url(" + article.img + ")";
            adventureTitle.innerText = article.title;
            adventureDescription.innerText = article.description;
        })
    }
    })
}

drawArticle(articles, articlesContainer, "article", "article-box");

/* Adventures Section */

let adventureSection = document.querySelector('.adventures-section');
let adventureTitle = document.querySelector('.adventure-title');
let adventureDescription = document.querySelector('.adventure-description');

/* Places */

let places = [
    {
        img: "./images/places/image-1.png", 
        title: "Whistler Mountin Biking",
        description: "Cycling",
    },
    {
        img: "./images/places/image-2.png", 
        title: "Surf Camp in Costa Rica",
        description: "Surfing",
    },
    {
        img: "./images/places/image-3.png", 
        title: "Ski Touring Mont Blanc",
        description: "Skiing",
    },
    {
        img: "./images/places/image-4.png", 
        title: "Riverside Camping",
        description: "Camping",
    },
]

let placesContainer = document.querySelector(".places-container");

drawArticle(places, placesContainer, "place", "place-box", true);

/* Inbox Sign up */

function validateEmail() {
    var inboxEmail = document.getElementById('inbox-mail').value;
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if(inboxEmail == "") {
        alert("Email is empty!")
    }
    if (pattern.test(inboxEmail)) {
        alert("You signed up successfully!")
    } else {
        alert('Incorrect email address: ' + inboxEmail);
        return false;
    }
}