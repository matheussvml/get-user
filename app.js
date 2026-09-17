const button = document.querySelector('button');


async function handle(){
    const response = await fetch('http://localhost:3000');
    const data = await response.json();
    
    console.log(data);
}

button.addEventListener('click', handle);

// handle();