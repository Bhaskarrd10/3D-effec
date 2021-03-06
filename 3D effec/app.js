const card = document.querySelector('.card');
const container = document.querySelector('.container');

const title = document.querySelector('.title');
const anjela = document.querySelector('.anjela img');
const course = document.querySelector('.course button');
const description = document.querySelector('.info h3');
const tools = document.querySelector('.tools');

container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


container.addEventListener('mouseenter', (e) => {
    card.style.transform = "none";

    title.style.transform = "translateZ(150px)";
    anjela.style.transform = "translateZ(200px) rotateZ(-10deg) rotateZ(10deg)";
    description.style.transform = "translateZ(125px)";
    tools.style.transform = "translateZ(100px)";
    course.style.transform = "translateZ(75px)";
});



container.addEventListener('mouseleave', (e) => {
    card.style.transform = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    title.style.transform = "translateZ(0px)";
    anjela.style.transform = "translateZ(0px) rotateZ(0deg) rotate(0deg)";
    description.style.transform = "translateZ(0px)";
    tools.style.transform = "translateZ(0px)";
    course.style.transform = "translateZ(0px)";
});