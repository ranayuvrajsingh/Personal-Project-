const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const meme = document.getElementById("meme");
const text = document.getElementById("text");
const kiss = document.getElementById("kiss");

// NO runs
noBtn.addEventListener("mouseover",()=>{
let x=Math.random()*(window.innerWidth-120);
let y=Math.random()*(window.innerHeight-60);
noBtn.style.left=x+"px";
noBtn.style.top=y+"px";
});

// YES magic
yesBtn.onclick=()=>{
kiss.play();

text.style.display="none";
yesBtn.style.display="none";
noBtn.style.display="none";
meme.style.display="block";

for(let i=0;i<80;i++) confetti();
};

// floating hearts
setInterval(()=>{
const heart=document.createElement("div");
heart.className="heart";
heart.innerHTML="💗";
heart.style.left=Math.random()*100+"%";
heart.style.fontSize=Math.random()*20+15+"px";
document.body.appendChild(heart);

setTimeout(()=>heart.remove(),6000);
},250);

// confetti
function confetti(){
const c=document.createElement("div");
c.className="confetti";
c.innerHTML=["💖","⚡","✨","❤️"][Math.floor(Math.random()*4)];
c.style.left=Math.random()*100+"%";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
