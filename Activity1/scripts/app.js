import { imgfun } from "./img.js";
import { infofunc, infofunc2 } from "./info.js";
import { cardfunc } from "./card.js";


let sec1 = document.getElementById('section1')
let sec2 = document.getElementById('section2')
let imageElement = imgfun("images/example.jpg");

let obj1 = {
    title   : "WELCOME MY FRIEND",
    par     : "By seeping into every aspect of our life, technology has changed the way we behave and operate. From communication and transport to healthcare and connectivity, technology has enhanced our lives for the better. The best part is that it is ever-evolving by facilitating more advanced features.",
    button  : "Elex Rollorata Tahud",
    img     : "images/elex1.jpg",
    titleClass: "white-title" 
}

const { title, par, button,titleClass, img } = obj1

let obj2 = {
    image1  : "https://i.pinimg.com/474x/96/d0/25/96d02512767883fb4130a494ef925e5b.jpg",
    image2  : "https://i.pinimg.com/564x/fb/eb/b9/fbebb91eec5e4b6036031e61fa7aa643.jpg",
    image3  : "https://i.pinimg.com/474x/7b/56/8e/7b568e01183f783a02fa62c7691e3d84.jpg",
    disc1   : "One of the most important features of CSS is its ability to cascade styles. This means that multiple style rules can be applied to the same element, and the browser determines which styles take precedence based on specificity and the order of declaration. This flexibility allows developers to create complex layouts and ensure consistency across the entire website.",
    disc2   : "I'm thrilled to present to you my portfolio, encapsulating my journey, skills, and passion for the world of [your industry or field]. Within its digital pages, you'll discover a comprehensive representation of my experiences, projects, and accomplishments, all meticulously curated to showcase my capabilities and dedication.",
    disc3   : "JavaScript is a versatile and powerful programming language primarily used for creating dynamic and interactive elements on webpages. It is an essential technology for web development alongside HTML and CSS. JavaScript enables developers to add functionality to websites, ranging from simple animations and form validations to complex web applications and server-side programming.",
    button1 : "View More",
    button2 : "View More",
    button3 : "View More",
    title2  : "Project Complete"
}

const { image1, image2, image3, disc1, disc2, disc3, button1, button2, button3, title2 } = obj2

section1.append(infofunc(title, par, button, titleClass));
section1.append(imgfun(img));
section3.append(infofunc2(title2));

section2.append(cardfunc(image1, disc1, button1, "https://www.w3schools.com/css/"));
section2.append(cardfunc(image2, disc2, button2, "https://en.wikipedia.org/wiki/Career_portfolio"));
section2.append(cardfunc(image3, disc3, button3, "https://www.w3schools.com/js/"));


