const burger = document.querySelector('#hamburger-menu');
// const hamburger = document.querySelector('#hamburger-menu');

// burger.addEventListener('click', function(){
//     hamburger.classList.toggle('hidden');
// });

document.querySelector('#hamburger-icon').onclick = () => {
    burger.classList.toggle('burger-active');
};

const hamburger = document.querySelector('#hamburger-icon');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !burger.contains(e.target)) {
        burger.classList.remove('burger-active');
    }
})