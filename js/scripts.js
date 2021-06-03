 let toglerBtn = document.querySelector('.burger-menu');
 let list = document.querySelector('.site-header__list--kind-of-products');
 
 toglerBtn.addEventListener('click', function (){
     list.classList.toggle('list--open');
 })