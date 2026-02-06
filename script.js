const noBtn=document.getElementById("no");
const yesBtn=document.getElementById("yes");
const kiss=document.getElementById("kiss");
const text=document.getElementById("text");
const final=document.getElementById("final");
const typing=document.getElementById("typing");
const slide=document.getElementById("slide");

// NO runs
function run(){
let x=Math.random()*(innerWidth-100);
let y=Math.random()*(innerHeight-60);
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
}
noBtn.addEventListener("mouseover",run);
noBtn.addEventListener("touchstart",run);

// YES pressed
yesBtn.onclick=()=>{
kiss.play();
navigator.vibrate(200);

text.style.display="none";
yesBtn.style.display="none";
noBtn.style.display="none";
final.style.display="block";

typeText("I LOVE YOU HIMANSHI ❤️");
for(let i=0;i<80;i++)confetti();
};

// typing effect
function typeText(msg){
let i=0;
setInterval(()=>{
typing.innerHTML+=msg[i];
i++;
},120);
}

// slideshow (change images if you want)
const photos=[
"https://i.imgur.com/t5xYq5P.jpeg",
"https://i.imgur.com/0DElr0H.jpeg",
"https://i.imgur.com/4AiXzf8.jpeg"
];

let idx=0;
setInterval(()=>{
idx=(idx+1)%photos.length;
slide.src=photos[idx];
},2500);

// hearts
setInterval(()=>{
const h=document.createElement("div");
h.className="heart";
h.innerHTML="💖";
h.style.left=Math.random()*100+"%";
document.body.appendChild(h);
setTimeout(()=>h.remove(),6000);
},300);

// confetti
function confetti(){
const c=document.createElement("div");
c.className="confetti";
c.innerHTML=["💖","✨","⚡","❤️"][Math.floor(Math.random()*4)];
c.style.left=Math.random()*100+"%";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}

// Magical sparkles around screen
setInterval(()=>{
const s=document.createElement("div");
s.innerHTML="✨";
s.style.position="absolute";
s.style.left=Math.random()*100+"%";
s.style.top=Math.random()*100+"%";
s.style.opacity=".6";
document.body.appendChild(s);
setTimeout(()=>s.remove(),1200);
},500);

