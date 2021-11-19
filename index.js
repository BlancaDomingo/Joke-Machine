const btn = document.querySelector('button');
const form = document.getElementById('submit-form');

async function getJoke() {
    const language = document.querySelector('input[name="language"]:checked').value;
    console.log(language);
    const output = document.querySelector('.output');
    const output2 = document.querySelector('.output2');
    output.innerText = '';
    output2.innerText = '';

    const response = await fetch(`https://v2.jokeapi.dev/joke/Programming?lang=${language}&type=twopart`);
    const data = await response.json();
    console.log(data);

    output.innerText = data.setup;
    setTimeout(() => {
        output2.innerText = data.delivery;
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 2000);

    

    
}

form.addEventListener('submit', (event => event.preventDefault(getJoke())));

btn.addEventListener('mouseenter', () => {
    btn.innerHTML = '🤣';
    btn.style.backgroundColor = 'white';
})
btn.addEventListener('mouseleave', () => {
    btn.innerHTML = '😂';
    btn.style.backgroundColor = 'mistyrose';
})