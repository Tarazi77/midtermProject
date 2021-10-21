document.addEventListener('DOMContentLoaded', () => {
    let btn = document.querySelector('.burger_menu'); 
    let drop = document.querySelector('.menu_class'); 

    btn.addEventListener('click', () => {

        if (drop.classList.contains('active1')) {
            drop.classList.remove('active1'); 
        } else {
            drop.classList.add('active1'); 
        }
    })
})