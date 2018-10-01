function mainContent(section) {
    document.getElementById("mainContent").innerHTML = document.getElementById(section).innerHTML;
}

let sampleFunction = "Fuctions are very usefull in Javascript. In fact, you triggered a Javascript function when you clicked that button. I'm actually just a function. Functions are snippets of code that only get run when they are told to. Plus, when you tell a function to run, you can even give it data to utilize. It's kind of like giving someone a number to use and telling them which chapter in their math book has the algorithim for that number. Or a heart surgeon looking in a specific chapter of his textbook to see where to put the heart he is holding. Okay, maybe not that latter one...";
    let sampleLoop = "Loops help you work through things in Javascript. If you want to sift through something in order to find a smaller thing within it, you want a loop. Or if you are performing repetitive actions through a specific data set, loops are your friend. It's like someone panning for gold. They have their dishy thinghy and they keep putting it in a creek or something so they might find gold or something. They are sifting through a large data set, the flowing creek, in order to compile a smaller data set, a jar of gold. And that's only a basic usage for loops. They can do so much more!";
let typingsys;
let txt;
let tptime;
let sect;
function typing(section, content, speed) {
    document.getElementById(section).innerHTML = "";
   typingsys = 0;
   txt = content;
   tptime = speed;
   sect = section;
   typingR();
}


function typingR() {
    if (typingsys < txt.length) {
        document.getElementById(sect).innerHTML += txt.charAt(typingsys);
        typingsys++
        setTimeout(typingR, tptime);
    }
}
