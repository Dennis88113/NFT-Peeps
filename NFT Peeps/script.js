
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.append(ripples);

        setTimeout(() => {
            ripples.remove()
        },500);
    });
});




let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 300;
    if (offset > 1799) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 300;
    if (offset < 0) {
        offset = 300;
    }
    sliderLine.style.left = -offset + 'px';
});


const wrapper = document.querySelector('.wrapper')
const menuElement = document.querySelectorAll('.element')
console.log(menuElement)
let toggle = document.querySelector('#menu__toggle');

toggle.addEventListener('change', function(e) {
    wrapper.style.overflow = e.target.checked === true ? 'hidden' : '';
 })

menuElement.forEach((el) => {
    el.addEventListener('click', ()=>{
        toggle.checked = false;
        wrapper.style.overflow=''
        wrapper.style.scrollBehavior='smooth'
    })
})