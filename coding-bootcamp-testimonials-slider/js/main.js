// Define Variables
let picture = document.querySelector("#profile-picture");
let testimonial = document.querySelector("#testimonial");
let author = document.querySelector("#author");
let occupation = document.querySelector("#occupation");

// Counter index for testimonials array
let counter = 1;

let testimonials = [
    {
        author: "John Tarkpor <span> Junior Front-end Developer</span>",
        "profile-pic": "image-john.jpg",
        testimonial: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”"
    },
    {
        author: "Tanya Sinclair <span> UX Engineer</span>",
        "profile-pic": "image-tanya.jpg",
        testimonial: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”"
    }
];

// Add events to buttons
document.querySelector("#previous").addEventListener("click", () => {
    if (counter === 1) {
        // Add animations
        picture.classList.remove("animation-in");
        picture.classList.add("animation-out");

        testimonial.style.animation = "fadeOut 0.5s ease-in-out";
        author.style.animation = "fadeOut 0.5s ease-in-out";

        // When animation finish, remove existing and add next.
        picture.addEventListener("animationend", () => {
            picture.classList.remove("animation-out");
            picture.src = "images/" + testimonials[0]["profile-pic"];
            picture.classList.add("animation-in");

            testimonial.innerHTML = testimonials[0].testimonial;
            testimonial.style.animation = "fadeIn 0.5s ease-in-out";

            author.innerHTML = testimonials[0].author;
            author.style.animation = "fadeIn 0.5s ease-in-out";
        });
        
        counter = 0;
    } else {
        // Add animations
        picture.classList.remove("animation-in");
        picture.classList.add("animation-out");

        testimonial.style.animation = "fadeOut 0.5s ease-in-out";
        author.style.animation = "fadeOut 0.5s ease-in-out";

        // When animation finish, remove existing and add next.
        picture.addEventListener("animationend", () => {
            picture.classList.remove("animation-out");
            picture.src = "images/" + testimonials[1]["profile-pic"];
            picture.classList.add("animation-in");

            testimonial.innerHTML = testimonials[1].testimonial;
            testimonial.style.animation = "fadeIn 0.5s ease-in-out";

            author.innerHTML = testimonials[1].author;
            author.style.animation = "fadeIn 0.5s ease-in-out";
        });
        
        counter = 1;
    }
});

document.querySelector("#next").addEventListener("click", () => {
    if (counter === 1) {
        // Add animations
        picture.classList.remove("animation-in");
        picture.classList.add("animation-out");

        testimonial.style.animation = "fadeOut 0.5s ease-in-out";
        author.style.animation = "fadeOut 0.5s ease-in-out";

        // When animation finish, remove existing and add next.
        picture.addEventListener("animationend", () => {
            picture.classList.remove("animation-out");
            picture.src = "images/" + testimonials[0]["profile-pic"];
            picture.classList.add("animation-in");

            testimonial.innerHTML = testimonials[0].testimonial;
            testimonial.style.animation = "fadeIn 0.5s ease-in-out";

            author.innerHTML = testimonials[0].author;
            author.style.animation = "fadeIn 0.5s ease-in-out";
        });
        
        counter = 0;
    } else {
        // Add animations
        picture.classList.remove("animation-in");
        picture.classList.add("animation-out");

        testimonial.style.animation = "fadeOut 0.5s ease-in-out";
        author.style.animation = "fadeOut 0.5s ease-in-out";

        // When animation finish, remove existing and add next.
        picture.addEventListener("animationend", () => {
            picture.classList.remove("animation-out");
            picture.src = "images/" + testimonials[1]["profile-pic"];
            picture.classList.add("animation-in");

            testimonial.innerHTML = testimonials[1].testimonial;
            testimonial.style.animation = "fadeIn 0.5s ease-in-out";

            author.innerHTML = testimonials[1].author;
            author.style.animation = "fadeIn 0.5s ease-in-out";
        });
        
        counter = 1;
    }
});