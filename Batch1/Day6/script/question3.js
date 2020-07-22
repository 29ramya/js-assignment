const name = prompt("Enter your name","hello" );

title.innerText += `Welcome to the family ${name}`;
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

clock();

setInterval(clock,1000);

name.classList.toggle('dark');
body.classList.toggle('dark');
