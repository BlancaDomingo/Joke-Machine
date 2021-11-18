const btn = document.querySelector('button');
btn.addEventListener('mouseenter', () => {
    btn.innerHTML = '🤣';
    btn.style.backgroundColor = 'white';
})
btn.addEventListener('mouseleave', () => {
    btn.innerHTML = '😂';
    btn.style.backgroundColor = 'mistyrose';
})