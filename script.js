const bar = document.getElementById('bar');
const close = document.getElementById('close');
const men = document.getElementById('menu');
const menuItems = document.querySelectorAll('#menu a');
/*Top-bar Responsive*/
if(bar){
    bar.addEventListener('click', () => {
    men.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
    men.classList.remove('active');
    })
}
/*Menu-Active*/
/*-----------------------------*/
function handleMenuItemClick(event) {
    menuItems.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active');
menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));
}

/*-----------------------------*/