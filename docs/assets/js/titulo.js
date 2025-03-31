let previousTitle = document.title
window.addEventListener('blur', ()=>{
    previousTitle = document.title
    document.title = '¡See you later, come back soon!'
})
window.addEventListener('focus', () => {
    document.title = previousTitle
})