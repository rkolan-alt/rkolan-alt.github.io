const canvas=document.getElementById('world-map'),ctx=canvas.getContext('2d');
ctx.imageSmoothingEnabled=false;
let step=0;
function rect(x,y,w,h,c){ctx.fillStyle=c;ctx.fillRect(x,y,w,h)}
function tree(x,y,s=1){rect(x+9*s,y+21*s,5*s,10*s,'#706c41');rect(x+3*s,y+24*s,19*s,4*s,'#759950');rect(x+4*s,y+8*s,18*s,16*s,'#365e40');rect(x,y+13*s,26*s,7*s,'#365e40');rect(x+7*s,y,12*s,6*s,'#365e40');rect(x+3*s,y+9*s,19*s,10*s,'#52794b');rect(x+7*s,y+3*s,12*s,11*s,'#52794b');rect(x+8*s,y+5*s,7*s,4*s,'#6d9252');rect(x+5*s,y+15*s,5*s,3*s,'#6d9252')}
function draw(){rect(0,0,400,240,'#adc97c');for(let y=0;y<240;y+=12){for(let x=0;x<400;x+=12){const n=(x*13+y*7)%37;if(n<9){rect(x+2,y+5,2,3,'#9fbd6c');rect(x+5,y+4,2,4,'#96b767')}}}
// Winding river and banks
for(let y=0;y<240;y+=4){const x=Math.round(292+Math.sin(y/45)*22);rect(x-5,y,76,4,'#d0d59a');rect(x,y,66,4,'#72b6bb');rect(x+5,y,54,4,'#82c5c6');if(y%16===0){rect(x+12,y,17,2,'#afd9d1');rect(x+39,y+5,15,2,'#afd9d1')}}
// Trail through the forest
rect(126,0,32,240,'#dccc98');rect(121,0,5,240,'#c0ba80');rect(158,0,4,240,'#c0ba80');rect(126,129,162,30,'#dccc98');rect(164,125,116,4,'#c0ba80');rect(164,159,116,4,'#c0ba80');for(let y=4;y<240;y+=18){rect(134,y,3,2,'#c5b987');rect(148,y+8,4,2,'#e8dcad')}
// Wooden bridge
rect(275,126,76,34,'#7b7651');for(let x=278;x<350;x+=8)rect(x,130,6,26,'#bd9e65');rect(275,124,78,4,'#e0c48b');rect(275,157,78,4,'#e0c48b');for(let x=277;x<353;x+=23){rect(x,121,3,8,'#77774c');rect(x,157,3,8,'#77774c')}
// Trees and clearing
[[4,18,1.2],[37,9,1.2],[72,25,1.1],[2,61,1.1],[37,61,1.3],[76,79,1],[4,181,1.3],[44,191,1.2],[81,183,1.1],[174,12,1.1],[211,6,1.2],[242,29,1],[171,184,1.2],[208,200,1.1],[242,179,1.2],[353,8,1.2],[377,41,1.2],[361,187,1.3],[334,213,1.1]].forEach(a=>tree(...a));
// Research lab
rect(190,74,70,43,'#7b9670');rect(187,69,70,43,'#f0e7bd');rect(184,65,76,8,'#6a7561');rect(190,49,65,16,'#71878b');rect(196,43,53,8,'#71878b');rect(196,52,53,4,'#9bb1aa');rect(193,76,17,13,'#719b9c');rect(195,78,13,3,'#b7d3c0');rect(235,76,15,13,'#719b9c');rect(237,78,11,3,'#b7d3c0');rect(216,88,14,24,'#58776b');rect(218,90,10,15,'#92b5a1');rect(213,112,21,5,'#c5b98b');rect(212,75,20,5,'#d6cd9e');rect(219,71,6,14,'#648a70');
// Fence
for(let x=15;x<106;x+=16){rect(x,146,4,16,'#e1d6a1');rect(x+1,144,2,3,'#eee4b5')}rect(16,151,87,3,'#dfd09c');
// Flowers, rocks and signpost
[[26,124],[54,115],[89,164],[180,157],[264,91],[373,104],[211,166]].forEach(([x,y])=>{rect(x,y+3,2,5,'#648851');rect(x-2,y,6,4,'#f2df98');rect(x,y+1,2,2,'#cc9761')});rect(167,107,3,14,'#87734b');rect(162,103,16,9,'#a38d5c');rect(165,105,10,2,'#e3d399');rect(64,47,11,6,'#879174');rect(66,44,7,4,'#a8b295');
// Trainer follows the trail
const spots=[[141,145],[177,145],[221,145],[257,145],[310,145],[141,182]],p=spots[step%spots.length],x=p[0],y=p[1];rect(x-6,y+12,15,4,'#849260');rect(x-3,y+8,4,6,'#35424b');rect(x+3,y+8,4,6,'#35424b');rect(x-5,y-1,13,11,'#396b76');rect(x-4,y-8,11,9,'#e8b984');rect(x-5,y-12,13,5,'#e6bd53');rect(x-7,y-8,17,3,'#f0ce6c');rect(x-6,y+1,5,7,'#d6c28d');rect(x+7,y+1,3,7,'#e4b686');
// Tiny companion
rect(x+17,y+8,9,6,'#ead477');rect(x+22,y+3,6,8,'#ead477');rect(x+22,y,2,5,'#786644');rect(x+26,y,2,5,'#786644');rect(x+26,y+6,1,2,'#354836');rect(x+14,y+6,4,3,'#ead477');}
draw();let toastTimer;document.getElementById('explore-map').addEventListener('click',()=>{step++;draw();const toast=document.getElementById('map-toast');const messages=['Route discovered: the project collection.','Research Lab: where data becomes insight.','New encounter: curiosity. Always worth following.','Bridge crossed! Keep exploring.','Back on the trail. Your next quest awaits.','You returned to spawn. Ready for another adventure?'];toast.textContent=messages[(step-1)%messages.length];toast.classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('visible'),3200)});
const navLinks=[...document.querySelectorAll('nav a')];const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){navLinks.forEach(link=>{const active=link.hash==='#'+entry.target.id;link.classList.toggle('active',active);if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current')})}}},{rootMargin:'-15% 0px -60% 0px',threshold:0});document.querySelectorAll('main .section').forEach(section=>observer.observe(section));
