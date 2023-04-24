const button = document.querySelector('nav button.hamburger')

button.addEventListener('click',()=>{
    document.querySelector('nav').classList.toggle('open')
})