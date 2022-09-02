// dropdown

let pages = document.getElementsByClassName("pages")[0];
let dropdown = document.getElementById("dropdown");

pages.addEventListener('click', function () {
    dropdown.classList.toggle("fade");
})

// chay so 

let numberPlus = document.getElementsByClassName("number");
let n = 0;

let run1 = setInterval(function () {
    n += 5;
    if (n === 2500) {
        clearInterval(run1);
    }
    numberPlus[0].innerHTML = n;
}, 1);

let m = 0;

let run2 = setInterval(function () {
    m += 5;
    if (m === 1250) {
        clearInterval(run2);
    }
    numberPlus[1].innerHTML = m;
}, 1);


// doi theme 

let theme = document.getElementById("theme");
let colorMain = document.getElementsByTagName("main")[0];
let colorQuality = document.getElementsByClassName("quality")[0];
let h2 = document.getElementsByTagName("h2");
let h3 = document.getElementsByTagName("h3");

theme.addEventListener('click', function () {
    colorMain.style.backgroundColor = "black";
    colorQuality.style.backgroundColor = "#111";
    theme.innerHTML = "<i class=\"fa-solid fa-sun-bright\"></i>";

    for (let i = 0; i < h2.length; i++) {
        h2[i].style.color = "#fff";
        h3[i].style.color = "#fff";
    }
})

// $(".gallery__content--item").mouseleave(function () {
//     console.log("day ne");
//     $(this).animate({
//         opacity: '0',
//     }, 2000)
// })

$(".gallery__content--item").click(function() {
    $(this).animate({
        opacity: '0'
    }, 2000)
})

// chuc nang search tren navbar


let section = document.getElementsByTagName('section');

$("#search").click(function() {
    let input = document.getElementById("inputSearch");
    for (let i = 0; i < section.length; i++) {

        section[i].style.display = "none";

        if (input.value === section[i].className) {
            section[i].style.display = "block";
            console.log(section[i])
        }
    }
});