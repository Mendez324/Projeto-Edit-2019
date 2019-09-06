//Left this on a separate file to not mix 
//vanilla JS with jquery and wanted to test a little vanilla
var nav = document.querySelector('.c-mmenu__navigation');

    document.querySelector('.c-mmenu__mobile-burguer').addEventListener('click', function(e) {
    e.preventDefault();

        this.classList.toggle('is-open'); // toggle vai adicionar/remover a cada click
        nav.classList.toggle('is-open');
});


