//Declarations
const workBtn = document.querySelector(".work");
const projectsBtn = document.querySelector(".projects");
const novaBtn = document.querySelector(".nova");
const expBtn = document.querySelector(".exp");
const emailCard = document.querySelector(".email-card");
const phoneCard = document.querySelector(".phone-card");
const whatsappCard = document.querySelector(".whatsapp-card");
const gitHubBtn = document.querySelector(".github");
const linkedInBtn = document.querySelector(".linkedin");

//Functions
workBtn.addEventListener("click", () => {
    location.href = "#projects"
})

projectsBtn.addEventListener("click", () => {
    window.open("https://github.com/MUsman2001?tab=repositories", "_blank")
})

novaBtn.addEventListener("click", () => {
    window.open("https://novapods5productlandingpage.vercel.app/", "_blank")
})

expBtn.addEventListener("click", () => {
    window.open("https://movies-explorer-tau-gules.vercel.app/", "_blank")
})

emailCard.addEventListener("click", () => {
    window.location.href = "mailto:usman3996@gmail.com"
})

phoneCard.addEventListener("click", () => {
    window.location.href = "tel:+923275760657"
})

whatsappCard.addEventListener("click", () => {
    window.open("https://wa.me/923404841183", "_blank")
})

gitHubBtn.addEventListener("click", () => {
    window.open("https://github.com/MUsman2001?tab=repositories", "_blank")
})

linkedInBtn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/muhammad-usman-35a7591a2/", "_blank")
})