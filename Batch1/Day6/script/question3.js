const name = prompt("Enter your name","hello" );

title.innerText += `Welcome to the LetsUpgrade family ${name}`;


const timing=document.getElementById('time' );
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    timing.innerText = time;
}

clock();

setInterval(clock,1000);

name.classList.toggle('dark');
body.classList.toggle('dark');
