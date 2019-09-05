var nav = document.querySelector('.c-mmenu__navigation');

document.querySelector('.c-mmenu__mobile-burguer').addEventListener('click', function(e) {
	e.preventDefault();
	
	this.classList.toggle('is-open'); // toggle vai adicionar/remover a cada click
	nav.classList.toggle('is-open');
});


var increment = document.querySelector('.c-shop__increment');
var decrement = document.querySelector('.c-shop__decrement');

var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }