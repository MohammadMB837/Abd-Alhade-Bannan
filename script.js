// mouse

const mouse = document.querySelector(".cursor")
const btns = document.querySelectorAll("button, a, .hamburger")

document.addEventListener("mousemove", (e) => {
    mouse.style.left = e.clientX + "px"
    mouse.style.top = e.clientY + "px"
})

btns.forEach((btn) => {
    btn.addEventListener("mouseenter",e => {mouse.classList.add("grow")})
    btn.addEventListener("mouseleave", e => {mouse.classList.remove("grow")})
})


// Hamburger

const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")
const bars = document.querySelector(".bars")
const xmark = document.querySelector(".xmark")

hamburger.addEventListener("click", () => {
    bars.classList.toggle("active")
    xmark.classList.toggle("active")
    navbar.classList.toggle("active")
})