const random = (min, max) =>{
    const rand = min + Math.random()*(max-min+1);
    return Math.floor(rand);
}
const buttonNo = document.querySelector('.no');

buttonNo.addEventListener('mouseenter', () => {
    buttonNo.style.left = `${random(0, 90)}%`;
    buttonNo.style.top = `${random(0, 90)}%`;
})

buttonNo.addEventListener('click', () => {
    alert('Ну ты и какашка(');
})

