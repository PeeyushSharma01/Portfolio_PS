(function(){var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
var els=document.querySelectorAll("section>div,.cta");els.forEach(function(e){e.classList.add("rv")});
function count(b){var to=+b.dataset.to,d=+b.dataset.dec,suf=b.dataset.suf,t0=null;
function f(t){t0=t0||t;var p=Math.min((t-t0)/1200,1),e=1-Math.pow(1-p,3);b.textContent=(to*e).toFixed(d)+suf;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if(rm||!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("on")});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("on");x.target.querySelectorAll(".stats b").forEach(count);io.unobserve(x.target)}})},{threshold:.15});
els.forEach(function(e){io.observe(e)})})();

/* ---- Separated script section ---- */
(function(){
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches,$=function(i){return document.getElementById(i)};
/* typing headline */
var ty=$("ty"),W=["dependable full-stack tools","tests that catch bugs early","fixes for slow ERP systems","machine learning pipelines"],wi=0,ci=W[0].length,del=true;
function tick(){var w=W[wi];if(!del){ci++;ty.textContent=w.slice(0,ci);if(ci>=w.length){del=true;return setTimeout(tick,2200)}return setTimeout(tick,60)}ci--;ty.textContent=w.slice(0,ci);if(ci<=0){del=false;wi=(wi+1)%W.length;return setTimeout(tick,300)}setTimeout(tick,30)}
if(ty&&!rm)setTimeout(tick,2500);
/* network canvas */
var c=$("net");
if(c){var x=c.getContext("2d"),w,h,P=[],dpr=Math.min(devicePixelRatio||1,2),rgb="43,89,224",mx=-999,my=-999,vis=true;
function col(){var v=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim().replace("#","");if(v.length===6)rgb=parseInt(v.slice(0,2),16)+","+parseInt(v.slice(2,4),16)+","+parseInt(v.slice(4),16)}
function size(){var r=c.getBoundingClientRect();w=r.width;h=r.height;c.width=w*dpr;c.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);var n=Math.min(70,Math.round(w*h/15000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4});col();draw()}
function draw(){x.clearRect(0,0,w,h);for(var i=0;i<P.length;i++){var a=P[i];for(var j=i+1;j<P.length;j++){var b=P[j],d=Math.hypot(a.x-b.x,a.y-b.y);if(d<130){x.strokeStyle="rgba("+rgb+","+(1-d/130)*.35+")";x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
var dm=Math.hypot(a.x-mx,a.y-my);if(dm<150){x.strokeStyle="rgba("+rgb+","+(1-dm/150)*.7+")";x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke()}
x.fillStyle="rgba("+rgb+",.7)";x.beginPath();x.arc(a.x,a.y,2,0,6.283);x.fill()}}
function step(){if(vis){P.forEach(function(p){p.x+=p.vx;p.y+=p.vy;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1});draw()}requestAnimationFrame(step)}
size();addEventListener("resize",size);matchMedia("(prefers-color-scheme:dark)").addEventListener("change",function(){setTimeout(col,50)});
if(!rm){c.parentNode.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top});c.parentNode.addEventListener("pointerleave",function(){mx=my=-999});
new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(c);requestAnimationFrame(step)}}
/* die tracker */
var D=[{id:"D-104",i:1,l:"Tool crib"},{id:"D-117",i:0,l:"Line 3"},{id:"D-122",i:1,l:"Tool crib"},{id:"D-131",i:0,l:"Line 1"},{id:"D-140",i:1,l:"Tool crib"}],n=0,dt=$("dt"),dl=$("dlog");
function rows(f){dt.innerHTML=D.map(function(d,k){return'<tr'+(k===f?' class="fl"':'')+'><td>'+d.id+'</td><td class="'+(d.i?"in":"out")+'">'+(d.i?"In stock":"Issued")+'</td><td>'+d.l+'</td><td><button type="button" data-i="'+k+'">'+(d.i?"Issue":"Return")+'</button></td></tr>'}).join("");var a=D.filter(function(d){return d.i}).length;$("k-in").textContent=a;$("k-out").textContent=D.length-a;$("k-n").textContent=n}
function tog(k){var d=D[k],L=["Line 1","Line 2","Line 3"];if(d.i){d.i=0;d.l=L[Math.floor(Math.random()*3)]}else{d.i=1;d.l="Tool crib"}n++;var li=document.createElement("li");li.textContent=new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",second:"2-digit"})+"  "+d.id+(d.i?" returned":" issued to "+d.l);dl.prepend(li);while(dl.children.length>4)dl.lastChild.remove();rows(k)}
dt.addEventListener("click",function(e){var b=e.target.closest("button");if(b)tog(+b.dataset.i)});rows(-1);
var tm=null,stopped=false,lb=$("live");
function go(){if(tm)return;tm=setInterval(function(){tog(Math.floor(Math.random()*D.length))},1700);lb.textContent="Pause simulation";lb.setAttribute("aria-pressed","true")}
function halt(){clearInterval(tm);tm=null;lb.textContent="Start live simulation";lb.setAttribute("aria-pressed","false")}
lb.addEventListener("click",function(){if(tm){stopped=true;halt()}else{stopped=false;go()}});
if(!rm)new IntersectionObserver(function(e){if(e[0].isIntersecting){if(!stopped)go()}else halt()},{threshold:.3}).observe($("p-die"));
/* random forest */
var T=$("trees"),N=7,sz=$("sz"),run=$("run");
for(var q=0;q<N;q++)T.insertAdjacentHTML("beforeend",'<div class="tr"><b>'+(q+1)+'</b><span>waiting</span></div>');
sz.addEventListener("input",function(){$("szv").textContent=sz.value});
run.addEventListener("click",function(){run.disabled=true;var p=sz.value/100,mal=0,k=0;[].forEach.call(T.children,function(t){t.className="tr";t.lastChild.textContent="waiting"});$("bar").style.width="0";$("verdict").textContent="Forest is voting...";
(function st(){var t=T.children[k],bad=Math.random()<p;t.className="tr "+(bad?"bad":"ok");t.lastChild.textContent=bad?"Malignant":"Benign";if(bad)mal++;k++;if(k<N)return setTimeout(st,rm?0:280);var m=mal>N/2,cnt=m?mal:N-mal;$("verdict").textContent=(m?"Malignant":"Benign")+": "+cnt+" of "+N+" trees agree";var b=$("bar");b.className=m?"bad":"";b.style.width=(cnt/N*100)+"%";run.disabled=false})()});
/* shop */
var ART=[
`<rect x="30" y="16" width="60" height="88" rx="6" fill="#2B59E0"/><rect x="30" y="16" width="10" height="88" rx="4" fill="#1B3F9E"/><rect x="48" y="34" width="34" height="6" rx="3" fill="#fff" opacity=".9"/><rect x="48" y="46" width="24" height="4" rx="2" fill="#fff" opacity=".6"/><circle cx="35" cy="34" r="2" fill="#fff"/><circle cx="35" cy="52" r="2" fill="#fff"/><circle cx="35" cy="70" r="2" fill="#fff"/><circle cx="35" cy="88" r="2" fill="#fff"/>`,
`<g transform="rotate(35 60 60) translate(-20 6)"><rect x="52" y="12" width="12" height="80" rx="6" fill="#2BA3E0"/><path d="M52 92h12l-6 14z" fill="#333"/></g><g transform="rotate(35 60 60)"><rect x="52" y="12" width="12" height="80" rx="6" fill="#E24B5F"/><path d="M52 92h12l-6 14z" fill="#333"/><rect x="52" y="12" width="12" height="14" rx="6" fill="#B02E40"/></g><g transform="rotate(35 60 60) translate(20 -6)"><rect x="52" y="12" width="12" height="80" rx="6" fill="#F2B705"/><path d="M52 92h12l-6 14z" fill="#333"/></g>`,
`<path d="M26 70V58a34 34 0 0 1 68 0v12" fill="none" stroke="#1E2A3A" stroke-width="8" stroke-linecap="round"/><rect x="18" y="64" width="22" height="36" rx="10" fill="#2B59E0"/><rect x="80" y="64" width="22" height="36" rx="10" fill="#2B59E0"/><rect x="22" y="70" width="8" height="24" rx="4" fill="#fff" opacity=".35"/><rect x="90" y="70" width="8" height="24" rx="4" fill="#fff" opacity=".35"/>`,
`<rect x="26" y="30" width="68" height="62" rx="16" fill="#1E2A3A"/><circle cx="60" cy="66" r="20" fill="#2B3C55"/><circle cx="60" cy="66" r="10" fill="#2B59E0"/><circle cx="60" cy="66" r="3" fill="#fff" opacity=".7"/><circle cx="60" cy="43" r="3.5" fill="#F2B705"/>`,
`<path d="M44 30a16 14 0 0 1 32 0" fill="none" stroke="#1E2A3A" stroke-width="5"/><rect x="28" y="30" width="64" height="76" rx="20" fill="#1F9D8A"/><rect x="40" y="70" width="40" height="26" rx="8" fill="#167565"/><rect x="46" y="48" width="28" height="4" rx="2" fill="#fff" opacity=".6"/><rect x="52" y="78" width="16" height="4" rx="2" fill="#F2B705"/>`,
`<path d="M44 46c0-20 32-20 32 0" fill="none" stroke="#C9A66B" stroke-width="5" stroke-linecap="round"/><path d="M26 46h68l-6 58H32z" fill="#E8D5B0"/><circle cx="60" cy="76" r="10" fill="#2B59E0"/><path d="M55 76l4 4 7-8" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`,
`<path d="M60 46V30" stroke="#1E2A3A" stroke-width="5" stroke-linecap="round"/><rect x="52" y="14" width="16" height="16" rx="4" fill="#1E2A3A"/><rect x="18" y="46" width="84" height="30" rx="8" fill="#8A97A8"/><rect x="26" y="56" width="14" height="10" rx="3" fill="#1E2A3A"/><rect x="46" y="56" width="14" height="10" rx="3" fill="#1E2A3A"/><rect x="66" y="56" width="14" height="10" rx="3" fill="#1E2A3A"/><rect x="86" y="58" width="10" height="6" rx="3" fill="#2B59E0"/>`,
`<path d="M34 100h52" stroke="#1E2A3A" stroke-width="8" stroke-linecap="round"/><path d="M42 100l22-52" stroke="#8A97A8" stroke-width="8" stroke-linecap="round"/><rect x="56" y="14" width="32" height="56" rx="7" transform="rotate(14 72 42)" fill="#1E2A3A"/><rect x="60" y="20" width="24" height="42" rx="4" transform="rotate(14 72 42)" fill="#2B59E0"/>`],
svg=function(i){return'<svg viewBox="0 0 120 120" aria-hidden="true">'+ART[i]+'</svg>'},
PR=[{n:"Notebook A5",c:"Stationery",p:250,s:12,d:"Hardbound A5 notebook with ruled pages for notes and sketches."},{n:"Gel pen set",c:"Stationery",p:180,s:20,d:"Smooth-writing gel pens in three bright colors."},{n:"Wireless headphones",c:"Audio",p:1999,s:6,d:"Over-ear wireless headphones with cushioned ear cups."},{n:"Bluetooth speaker",c:"Audio",p:1499,s:5,d:"Portable Bluetooth speaker with a compact, sturdy body."},{n:"Laptop backpack",c:"Bags",p:1299,s:8,d:"Padded laptop backpack with a roomy front pocket."},{n:"Tote bag",c:"Bags",p:449,s:10,d:"Everyday cotton tote bag for books and groceries."},{n:"USB-C hub",c:"Tech",p:999,s:7,d:"Compact USB-C hub that adds extra ports to your laptop."},{n:"Phone stand",c:"Tech",p:349,s:15,d:"Foldable phone stand for desks and video calls."}],
fm=function(v){return"₹"+Math.round(v).toLocaleString("en-IN")},cart={},orders=[],wish={},coupon="",shown=0,KEY="ps_shop";
try{var sv=JSON.parse(localStorage.getItem(KEY)||"null");if(sv){cart=sv.cart||{};orders=sv.orders||[];coupon=sv.coupon||"";wish=sv.wish||{}}}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({cart:cart,orders:orders,coupon:coupon,wish:wish}))}catch(e){}}
function sold(i){var t=0;orders.forEach(function(o){t+=o.l[i]||0});return t}
function left(i){return PR[i].s-sold(i)}
function calc(){var sb=0,u=0;for(var k in cart){sb+=cart[k]*PR[k].p;u+=cart[k]}var d=coupon==="PS10"?sb*.1:0,sh=sb===0?0:(coupon==="FREESHIP"||sb>=999?0:60);return{sb:sb,u:u,d:d,sh:sh,t:sb-d+sh}}
function grid(){var q=$("q").value.toLowerCase(),c=$("cat").value,so=$("sort").value,ix=[];PR.forEach(function(p,i){if((c==="all"||(c==="wish"?wish[i]:p.c===c))&&p.n.toLowerCase().indexOf(q)>-1)ix.push(i)});
if(so==="lo")ix.sort(function(a,b){return PR[a].p-PR[b].p});if(so==="hi")ix.sort(function(a,b){return PR[b].p-PR[a].p});
$("pg").innerHTML=ix.map(function(i){var p=PR[i],lf=left(i),mx=(cart[i]||0)>=lf;return'<div class="pc"><button class="hrt'+(wish[i]?" on":"")+'" type="button" data-a="wish" data-i="'+i+'" aria-pressed="'+!!wish[i]+'" aria-label="Save '+p.n+'"><svg class="i" aria-hidden="true"><use href="#i-heart"/></svg></button><button class="im" type="button" data-a="qv" data-i="'+i+'" aria-label="Quick view '+p.n+'">'+svg(i)+'<span class="qk">Quick view</span></button><b>'+p.n+'</b><span class="cat">'+p.c+'</span><div class="pr"><b>'+fm(p.p)+'</b>'+(lf<=3?'<small>'+(lf>0?"Only "+lf+" left":"Sold out")+'</small>':"")+'</div><button class="btn sm" type="button" data-a="add" data-i="'+i+'"'+(mx?" disabled":"")+'>'+(lf<=0?"Sold out":mx?"Max in cart":"Add to cart")+'</button></div>'}).join("")||'<p class="mt">'+(c==="wish"?"No saved items yet. Tap the heart on a product.":"No products match your search.")+'</p>'}
function cartR(){
var c=calc(),h="";for(var k in cart){h+='<li><div class="ci"><span class="em2" aria-hidden="true">'+svg(k)+'</span><div><b>'+PR[k].n+'</b><span>'+fm(PR[k].p)+'</span></div></div><div class="qt"><button type="button" data-a="dec" data-i="'+k+'" aria-label="Decrease quantity">−</button><span>'+cart[k]+'</span><button type="button" data-a="inc" data-i="'+k+'" aria-label="Increase quantity">+</button><button type="button" class="rm" data-a="rm" data-i="'+k+'" aria-label="Remove item">×</button></div></li>'}
$("cl").innerHTML=h||'<li class="mt">Your cart is empty</li>';var cc=$("cc");cc.textContent=c.u;cc.classList.remove("bp");void cc.offsetWidth;cc.classList.add("bp");
$("sb").textContent=fm(c.sb);$("ds").textContent=c.d?"−"+fm(c.d):"₹0";$("sh").textContent=c.sb?(c.sh?fm(c.sh):"Free"):"₹0";$("co").disabled=!c.u;
var f=shown,t=c.t,t0=null;if(rm){$("ct").textContent=fm(t);shown=t}else{(function a(ts){t0=t0||ts;var p=Math.min((ts-t0)/400,1);$("ct").textContent=fm(f+(t-f)*p);if(p<1)requestAnimationFrame(a)})(performance.now());shown=t}}
function adm(){var r=0,u=0;orders.forEach(function(o){r+=o.t;u+=o.u});$("a-o").textContent=orders.length;$("a-r").textContent=fm(r);$("a-u").textContent=u;
$("a-t").innerHTML=orders.slice(0,5).map(function(o){return"<tr><td>"+o.id+"</td><td>"+o.u+"</td><td>"+fm(o.t)+"</td><td>"+o.at+"</td></tr>"}).join("")||'<tr><td colspan="4" style="color:var(--muted)">No orders yet. Check out from the Store tab.</td></tr>';
$("a-s").innerHTML=PR.map(function(p,i){var lf=left(i);return'<li class="'+(lf<=3?"low":"")+'"><span>'+p.n+'</span><span class="sbar"><i style="width:'+(lf/p.s*100)+'%"></i></span><b>'+lf+'</b></li>'}).join("")}
function all(){save();grid();cartR();adm()}
function fly(el,i){if(rm||!el.animate)return;var a=el.getBoundingClientRect(),t=$("cc").getBoundingClientRect(),f=document.createElement("div");f.className="fly";f.innerHTML=svg(i);document.body.appendChild(f);var x1=a.left+a.width/2-20,y1=a.top+a.height/2-20,x2=t.left+t.width/2-20,y2=t.top+t.height/2-20;f.animate([{transform:"translate("+x1+"px,"+y1+"px) scale(1)",opacity:1},{transform:"translate("+x2+"px,"+y2+"px) scale(.35)",opacity:.5}],{duration:650,easing:"cubic-bezier(.5,0,.75,.4)"}).onfinish=function(){f.remove()}}
$("pg").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var i=+b.dataset.i,a=b.dataset.a;if(a==="add"){if((cart[i]||0)<left(i)){fly(b,i);cart[i]=(cart[i]||0)+1;all()}}else if(a==="qv")qvOpen(i,b);else if(a==="wish"){if(wish[i])delete wish[i];else wish[i]=1;all()}});

$("cl").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;var i=b.dataset.i,a=b.dataset.a;if(a==="inc"&&cart[i]<left(i))cart[i]++;else if(a==="dec"){cart[i]--;if(cart[i]<=0)delete cart[i]}else if(a==="rm")delete cart[i];all()});
["q","cat","sort"].forEach(function(id){$(id).addEventListener("input",grid)});
$("ap").addEventListener("click",function(){var v=$("cp").value.trim().toUpperCase(),m=$("cpm");if(v==="PS10"||v==="FREESHIP"){coupon=v;m.className="ok";m.textContent=v==="PS10"?"PS10 applied: 10% off":"FREESHIP applied: free shipping"}else if(!v){coupon="";m.textContent="";m.className=""}else{coupon="";m.className="bad";m.textContent="Invalid code. Try PS10 or FREESHIP."}all()});
$("co").addEventListener("click",function(){var c=calc();if(!c.u)return;var b=$("co");b.disabled=true;b.textContent="Processing payment...";
setTimeout(function(){var l={};for(var k in cart)l[k]=cart[k];var o={id:"PS-"+(1001+orders.length),l:l,u:c.u,t:c.t,at:new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};orders.unshift(o);cart={};coupon="";$("cp").value="";$("cpm").textContent="";b.textContent="Checkout";all();
var ov=$("ok");ov.innerHTML='<div class="okb"><div class="tick" aria-hidden="true">✓</div><h4>Order placed</h4><p>'+o.id+" · "+o.u+" item"+(o.u>1?"s":"")+" · "+fm(o.t)+'</p><p>Demo only. No payment was taken.</p><button class="btn pri sm" type="button" id="okc">Continue shopping</button></div>';ov.hidden=false;$("okc").addEventListener("click",function(){ov.hidden=true})},rm?0:900)});
[].forEach.call(document.querySelectorAll(".tab"),function(t){t.addEventListener("click",function(){[].forEach.call(document.querySelectorAll(".tab"),function(x){x.classList.toggle("on",x===t)});$("sv-store").hidden=t.dataset.v!=="store";$("sv-admin").hidden=t.dataset.v!=="admin"})});
$("a-x").addEventListener("click",function(){orders=[];cart={};coupon="";all()});
var qv=$("qv"),qi=0,qn=1,lastF=null;
function qvR(){var lf=left(qi),room=lf-(cart[qi]||0),a=$("qv-a"),w=$("qv-w");$("qv-s").textContent=lf<=0?"Sold out":lf<=3?"Only "+lf+" left":"In stock";qn=Math.max(room>0?1:0,Math.min(qn,room));$("qv-q").textContent=qn;a.disabled=room<=0;a.textContent=lf<=0?"Sold out":room<=0?"Max in cart":"Add "+qn+" to cart";w.setAttribute("aria-pressed",!!wish[qi]);w.classList.toggle("on",!!wish[qi]);w.lastChild.textContent=wish[qi]?"Saved":"Save for later"}
function qvOpen(i,f){qi=i;qn=1;lastF=f;var p=PR[i];$("qv-i").innerHTML='<div class="zm">'+svg(i)+'</div>';$("qv-c").textContent=p.c;$("qv-n").textContent=p.n;$("qv-d").textContent=p.d;$("qv-p").textContent=fm(p.p);qvR();qv.hidden=false;document.body.style.overflow="hidden";qv.querySelector(".qvx").focus()}
function qvClose(){if(qv.hidden)return;qv.hidden=true;document.body.style.overflow="";if(lastF&&document.body.contains(lastF))lastF.focus()}
qv.querySelector(".qvx").addEventListener("click",qvClose);
qv.addEventListener("click",function(e){if(e.target===qv)qvClose()});
addEventListener("keydown",function(e){if(e.key==="Escape")qvClose()});
qv.querySelector(".qq").addEventListener("click",function(e){var b=e.target.closest("button");if(b){qn+=+b.dataset.d;qvR()}});
$("qv-a").addEventListener("click",function(){var b=$("qv-a");if(qn<1)return;fly(b,qi);cart[qi]=(cart[qi]||0)+qn;qn=1;all();qvR()});
$("qv-w").addEventListener("click",function(){if(wish[qi])delete wish[qi];else wish[qi]=1;all();qvR()});
var zi=$("qv-i");
zi.addEventListener("pointerenter",function(){if(!rm&&matchMedia("(hover:hover)").matches)zi.firstChild.classList.add("zoom")});
zi.addEventListener("pointermove",function(e){var r=zi.getBoundingClientRect();zi.firstChild.style.transformOrigin=((e.clientX-r.left)/r.width*100)+"% "+((e.clientY-r.top)/r.height*100)+"%"});
zi.addEventListener("pointerleave",function(){zi.firstChild.classList.remove("zoom")});
all();

})();

/* ---- Separated script section ---- */
(function(){
var $=function(i){return document.getElementById(i)},root=document.documentElement,rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
/* theme */
var tg=$("theme");
function cur(){return root.getAttribute("data-theme")||(matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light")}
function ico(){tg.querySelector("use").setAttribute("href",cur()==="dark"?"#i-sun":"#i-moon")}
try{var sv=localStorage.getItem("theme");if(sv)root.setAttribute("data-theme",sv)}catch(e){}
ico();
tg.addEventListener("click",function(){var n=cur()==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("theme",n)}catch(e){}ico();dispatchEvent(new Event("resize"))});
/* mobile menu */
var mn=$("menu"),lk=$("links");
mn.addEventListener("click",function(){var o=lk.classList.toggle("open");mn.setAttribute("aria-expanded",o)});
lk.addEventListener("click",function(e){if(e.target.tagName==="A"){lk.classList.remove("open");mn.setAttribute("aria-expanded","false")}});
/* progress + back to top */
var pr=$("prog"),up=$("up"),tk=false;
function sc(){tk=false;var m=document.documentElement.scrollHeight-innerHeight;pr.style.transform="scaleX("+(m>0?scrollY/m:0)+")";up.classList.toggle("show",scrollY>700)}
addEventListener("scroll",function(){if(!tk){tk=true;requestAnimationFrame(sc)}},{passive:true});sc();
/* scrollspy */
var L={};[].forEach.call(lk.querySelectorAll("a"),function(a){L[a.getAttribute("href").slice(1)]=a});
if("IntersectionObserver" in window)(function(){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in L)L[k].classList.remove("act");L[e.target.id].classList.add("act")}})},{rootMargin:"-35% 0px -60% 0px"});for(var k in L){var t=$(k);if(t)io.observe(t)}})();
/* local time */
var ck=$("clk");function tm(){try{ck.textContent=new Intl.DateTimeFormat("en-IN",{timeZone:"Asia/Kolkata",hour:"numeric",minute:"2-digit",hour12:true}).format(new Date())+" IST"}catch(e){}}tm();setInterval(tm,30000);
/* toast */
var ts=$("toast"),tt;function toast(m){ts.textContent=m;ts.classList.add("show");clearTimeout(tt);tt=setTimeout(function(){ts.classList.remove("show")},2200)}
var EM="peeyush.sharma144823@gmail.com";
$("copy").addEventListener("click",function(){function ok(){toast("Email address copied")}
if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(EM).then(ok,fb)}else fb();
function fb(){var t=document.createElement("textarea");t.value=EM;t.style.position="fixed";t.style.opacity="0";document.body.appendChild(t);t.select();try{document.execCommand("copy");ok()}catch(e){toast(EM)}t.remove()}});
/* contact form -> opens the visitor's email app */
$("cf").addEventListener("submit",function(e){e.preventDefault();var n=$("fn").value.trim(),f=$("fe").value.trim(),m=$("fm").value.trim();
var a=document.createElement("a");a.href="mailto:"+EM+"?subject="+encodeURIComponent("Portfolio message from "+n)+"&body="+encodeURIComponent(m+"\n\n"+n+"\n"+f);a.target="_top";document.body.appendChild(a);a.click();a.remove();toast("Opening your email app")});
})();
